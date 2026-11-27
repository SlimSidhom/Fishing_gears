(function (root, factory) {
  var physics = factory();
  if (typeof module === 'object' && module.exports) module.exports = physics;
  else root.ReelPhysics = physics;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  var NEWTONS_PER_KGF = 9.80665;
  var RUNNING_DRAG_FRACTION = 0.96;
  // Effective inertia and damping include the response of the loaded line in this demonstration.
  // The dynamic coefficients are illustrative. Daiwa supplies the maximum drag force.
  var LOADED_SPOOL_INERTIA = 0.00045; // kg m²
  var LOADED_SPOOL_DAMPING = 0.006;  // N m s / rad

  function dragLimit(settingKgf, fullRadius, radius, running) {
    return settingKgf * fullRadius / radius * (running ? RUNNING_DRAG_FRACTION : 1);
  }

  function advanceDrag(omega, pullKgf, settingKgf, fullRadius, radius, dt) {
    var limit = dragLimit(settingKgf, fullRadius, radius, omega > 0);
    if (dt <= 0 || (omega === 0 && pullKgf <= limit)) {
      return { omega: omega, angle: 0, limit: limit };
    }

    // Line tension applies torque at the line pack. Once sliding starts, the running
    // washer torque is slightly below breakaway torque to illustrate smooth ATD startup.
    var runningLimit = dragLimit(settingKgf, fullRadius, radius, true);
    var torque = (pullKgf - runningLimit) * NEWTONS_PER_KGF * radius;
    var rate = LOADED_SPOOL_DAMPING / LOADED_SPOOL_INERTIA;
    var steadyOmega = torque / LOADED_SPOOL_DAMPING;
    var movingTime = dt;
    if (steadyOmega < 0) {
      movingTime = Math.min(dt, Math.log1p(omega / -steadyOmega) / rate);
    }

    // Integrate the linear torque/damping equation over the part of the step
    // spent moving. This allows the spool to stop without running backwards.
    var decay = -Math.expm1(-rate * movingTime);
    var nextOmega = Math.max(0, omega + (steadyOmega - omega) * decay);
    var angle = Math.max(0, steadyOmega * movingTime + (omega - steadyOmega) * decay / rate);
    return { omega: nextOmega < 1e-4 ? 0 : nextOmega, angle: angle, limit: limit };
  }

  return { advanceDrag: advanceDrag, dragLimit: dragLimit };
});

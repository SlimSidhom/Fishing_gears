const assert = require('node:assert/strict');
const { test } = require('node:test');
const { advanceDrag, dragLimit } = require('../reel-physics.js');

const fullRadius = 0.80 / (2 * Math.PI * 5.7);
const dragSetting = 1;

function step(omega, pull, radius, dt = 1 / 120) {
  return advanceDrag(omega, pull, dragSetting, fullRadius, radius, dt);
}

test('a smaller line pack needs more tension for the same drag torque', () => {
  const lowFillRadius = 0.019;
  const pull = 1.1;

  assert.equal(dragLimit(dragSetting, fullRadius, fullRadius, false), dragSetting);
  assert(dragLimit(dragSetting, fullRadius, lowFillRadius, false) > pull);
  assert(step(0, pull, fullRadius).angle > 0);
  assert.deepEqual(step(0, pull, lowFillRadius), {
    omega: 0,
    angle: 0,
    limit: dragSetting * fullRadius / lowFillRadius,
  });
});

test('the spool starts only above breakaway and keeps slipping just below it', () => {
  const runningLimit = dragLimit(dragSetting, fullRadius, fullRadius, true);
  const pull = (dragSetting + runningLimit) / 2;

  assert.equal(step(0, dragSetting, fullRadius).omega, 0);
  assert.equal(step(0, pull, fullRadius).omega, 0);
  const moving = step(0, 2, fullRadius);
  assert(moving.angle > 0);
  assert(step(moving.omega, pull, fullRadius).angle > 0);
});

test('the spool stops without reversing once the pull ends', () => {
  const moving = step(0, 2, fullRadius, 0.1);
  const stopping = step(moving.omega, 0, fullRadius, 1);
  assert.equal(stopping.omega, 0);
  assert(stopping.angle > 0);
  assert.equal(step(stopping.omega, 0, fullRadius).angle, 0);
});

test('constant torque produces the same motion divided into substeps', () => {
  const one = step(0, 3, fullRadius, 0.1);
  const first = step(0, 3, fullRadius, 0.05);
  const second = step(first.omega, 3, fullRadius, 0.05);

  assert(Math.abs(one.omega - second.omega) < 1e-9);
  assert(Math.abs(one.angle - (first.angle + second.angle)) < 1e-9);
});

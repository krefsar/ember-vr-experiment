import Ember from 'ember';
import PositionMixinMixin from 'ember-vr-experiment/mixins/position-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | position mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let PositionMixinObject = Ember.Object.extend(PositionMixinMixin);
  let subject = PositionMixinObject.create();
  assert.ok(subject);
});

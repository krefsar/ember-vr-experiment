import Ember from 'ember';
import OnGazeMixinMixin from 'ember-vr-experiment/mixins/on-gaze-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | on gaze mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let OnGazeMixinObject = Ember.Object.extend(OnGazeMixinMixin);
  let subject = OnGazeMixinObject.create();
  assert.ok(subject);
});

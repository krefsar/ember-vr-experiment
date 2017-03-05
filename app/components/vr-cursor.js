import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['color', 'fuse', 'fuse-timeout'],
  color: 'blue',
  fuse: 'true',
  'fuse-timeout': Ember.computed.alias('timeout'),
  tagName: 'a-cursor'
});

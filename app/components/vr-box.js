import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['color', 'depth', 'opacity'],
  color: '#6173F4',
  depth: 2,
  opacity: '0.8',
  tagName: 'a-box',
});

import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['color', 'position'],
  color: '#6173F4',
  position: Ember.computed('positionX', 'positionY', 'positionZ', function() {
    return `${this.get('positionX')} ${this.get('positionY')} ${this.get('positionZ')}`;
  }),
  positionX: 0,
  positionY: 2,
  positionZ: -5,
  tagName: 'a-box',
});

import Ember from 'ember';
import PositionMixin from '../mixins/position-mixin';

export default Ember.Component.extend(PositionMixin, {
  attributeBindings: ['color', 'position'],
  color: '#6173F4',
  tagName: 'a-box'
});

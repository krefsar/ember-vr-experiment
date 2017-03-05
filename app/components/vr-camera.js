import Ember from 'ember';
import PositionMixin from '../mixins/position-mixin';

export default Ember.Component.extend(PositionMixin, {
  attributeBindings: ['position'],
  tagName: 'a-camera'
});

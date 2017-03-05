import Ember from 'ember';
import PositionMixin from '../mixins/position-mixin';

export default Ember.Component.extend(PositionMixin, {
  attributeBindings: ['src'],
  tagName: 'a-curvedimage',

  src: Ember.computed('imageId', function() {
    return `#${this.get('imageId')}`;
  })
});

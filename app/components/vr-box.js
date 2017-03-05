import Ember from 'ember';
import PositionMixin from '../mixins/position-mixin';
import OnGazeMixin from '../mixins/on-gaze-mixin';

export default Ember.Component.extend(PositionMixin, OnGazeMixin, {
  attributeBindings: ['color', 'position'],
  color: '#6173F4',
  message: 'hey message',
  gazeAttribute: Ember.computed('message', function() {
    return `message: ${this.get('message')}`;
  }),
  tagName: 'a-box',

  didInsertElement() {
    this._super(...arguments);
    console.log('inserting element');
    console.log(this.get('eventListener'));
    this.$().attr(this.get('eventListener'), this.get('gazeAttribute'));
  }
});

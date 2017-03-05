import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    blueAction() {
      console.log('blue action was triggered!');
      this.transitionTo('blueRoute');
    },

    redAction() {
      console.log('red action was triggered!');
      this.transitionTo('redRoute');
    }
  }
});

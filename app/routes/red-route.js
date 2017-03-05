import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    greenAction() {
      console.log('green action was triggered');
      this.transitionTo('index');
    },

    yellowAction() {
      console.log('yellow action was triggered');
      this.transitionTo('blueRoute');
    }
  }
});

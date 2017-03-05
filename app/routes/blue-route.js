import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    purpleAction() {
      console.log('purple action was triggered!');
      this.transitionTo('index');
    },

    greyAction() {
      console.log('white action was triggered!');
      this.transitionTo('redRoute');
    }
  }
});

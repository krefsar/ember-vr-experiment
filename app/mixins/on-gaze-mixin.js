import Ember from 'ember';

export default Ember.Mixin.create({
  init() {
    this._super(...arguments);
    let triggerFunction = this.get('gazeAction');
    
    console.log('registering component');
    console.log(this.elementId);
    let thisId = this.elementId;
    this.set('eventListener', `test-trigger-${thisId}`);
    
    AFRAME.registerComponent(`test-trigger-${thisId}`, {
      schema: {
        message: {
          type: 'string',
          default: 'default message'
        }
      },

      init() {
        console.log('adding event listener');
        this.el.addEventListener('click', triggerFunction);
      },
    });
  }
});

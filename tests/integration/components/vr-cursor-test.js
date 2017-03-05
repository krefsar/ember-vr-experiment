import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('vr-cursor', 'Integration | Component | vr cursor', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{vr-cursor}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#vr-cursor}}
      template block text
    {{/vr-cursor}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

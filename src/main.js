var module = [
  {
    name: 'address',
    module: require('vux-components/address')
  },
  {
    name: 'cell',
    module: require('vux-components/cell')
  },
  {
    name: 'alert',
    module: require('vux-components/alert')
  },
  {
    name: 'checklist',
    module: require('vux-components/checklist')
  },
  {
    name: 'datetime',
    module: require('vux-components/datetime')
  },
  {
    name: 'radio',
    module: require('vux-components/radio')
  },
  {
    name: 'selector',
    module: require('vux-components/selector')
  },
  {
    name: 'switch',
    module: require('vux-components/switch')
  },
  {
    name: 'x-button',
    module: require('vux-components/x-button')
  },
  {
    name: 'x-input',
    module: require('vux-components/x-input')
  },
  {
    name: 'x-textarea',
    module: require('vux-components/x-textarea')
  },
  {
    name: 'confirm',
    module: require('vux-components/confirm')
  },
  {
    name: 'dialog',
    module: require('vux-components/dialog')
  },
  {
    name: 'loading',
    module: require('vux-components/loading')
  },
  {
    name: 'toast',
    module: require('vux-components/toast')
  },
  {
    name: 'actionsheet',
    module: require('vux-components/actionsheet')
  },
  {
    name: 'flexbox',
    module: require('vux-components/flexbox')
  },
  {
    name: 'icon',
    module: require('vux-components/icon')
  },
  {
    name: 'panel',
    module: require('vux-components/panel')
  },
  {
    name: 'card',
    module: require('vux-components/card')
  },
  {
    name: 'spinner',
    module: require('vux-components/spinner')
  },
  {
    name: 'tab',
    module: require('vux-components/tab')
  },
  {
    name: 'x-img',
    module: require('vux-components/x-img')
  },
];

module.exports = {
  install: function (Vue, options) {
    var component;
    options = options || {};

    modules.forEach(function (spec) {
      var component = spec.module;

      component.mixins = component.mixins || [];

      component.mixins.push({
        data: function () {
          return Object.assign({}, options[spec.name] || options[Vue.util.camelize(spec.name)]);
        }
      });

      Vue.component(spec.name, component);
    });

  }
};

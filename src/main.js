// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import { Button, Select, Option, Table, TableColumn, Dialog, Input } from 'element-ui';

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Select);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Dialog);
Vue.use(Input);
Vue.use(Option);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// 引用element
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;

Vue.use(ElementUI);
/* eslint-disable no-new */
// tslint:disable-next-line:no-unused-expression
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});

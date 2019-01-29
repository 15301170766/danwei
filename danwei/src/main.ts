import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// 引用element
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// 引用font-awesome
import "font-awesome/css/font-awesome.min.css";
// 引入echarts
import echarts from "echarts";

// 引用vuex
import Vuex from "vuex";
import store from "./store/index";
// 引用axios
import axios from "axios";
Vue.prototype.$ajax = axios;


// 安装apollo
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import VueApollo from "vue-apollo";

const httpLink:any = new HttpLink({ // 配置请求路径
  // you should use an absolute URL here
  uri: "http://localhost:4000/graphql",
});

// create the apollo client 创建Apollo连接
const apolloClient:any = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

// install the vue plugin
Vue.use(VueApollo);

const apolloProvider:any = new VueApollo({
  defaultClient: apolloClient,
});






Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;

Vue.use(ElementUI);
/* eslint-disable no-new */
// tslint:disable-next-line:no-unused-expression
new Vue({
  el: "#app",
  router,
  provide: apolloProvider.provide(), // 在vue中引入
  store,
  render: h => h(App)
});

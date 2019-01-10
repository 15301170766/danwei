import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import Houtai from "@/components/houtai/main.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld,
      // children: [
      //   {
      //     path: "/HelloWorld",
      //     name: "Houtai",
      //     component: Houtai
      //   }
      // ]
    },
    {
      path: "/Houtai",
      name: "Houtai",
      component: Houtai
    }
  ]
});

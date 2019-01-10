import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import Houtai from "@/components/houtai/main.vue";
import GaojingGuanli from "@/components/houtai/GaojingGuanli.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld,
      // children: [
      //   {
      //     path: "/HelloWorld/GaojingGuanli",
      //     name: "GaojingGuanli",
      //     component: GaojingGuanli
      //   }
      // ]
    },
    {
      path: "/Houtai",
      name: "Houtai",
      component: Houtai,
      children: [
        {
          path: "/Houtai/GaojingGuanli",
          name: "GaojingGuanli",
          component: GaojingGuanli
        }
      ]
    },
    // {
    //   path: "/GaojingGuanli",
    //   name: "GaojingGuanli",
    //   component: GaojingGuanli
    // }
  ]
});

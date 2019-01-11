import Vue from "vue";
// 引用vuex
import Vuex from "vuex";
Vue.use(Vuex);

const state:any = {
    isShowPlayer: "99999", // 是否显示 player
    song: {}, // 歌的信息
    artist: "", // 歌的作者
    isPlay: false // 是否播放
};
export default new Vuex.Store({
    state
});

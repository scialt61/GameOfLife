import Vue from "vue";
import Vuex from "vuex";

import mixin from "./mixin.js";
import store from "./store.js";

import App from "./components/App.vue";

Vue.use(Vuex);
Vue.mixin(mixin);

// Initializes app
new Vue({
    el: "#_app",
    mixins: [mixin],
    store,

    render: h => h(App)
});
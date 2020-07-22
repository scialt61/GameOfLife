import Vue from "vue";
import Vuex from "vuex";

import store from "./store.js";

import App from "./components/App.vue";

Vue.use(Vuex);

// Initializes app
new Vue({
    el: "#_app",
    store,

    render: h => h(App)
});
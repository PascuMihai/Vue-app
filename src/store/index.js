import Vuex from 'vuex'
import Vue from 'vue'
import Application from "./modules/Application";

Vue.use(Vuex);

export default new Vuex.store({
    module: {
        Application
    }
});
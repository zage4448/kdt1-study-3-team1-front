import Vue from "vue"
import Vuex from 'vuex'

import mutations from "./mutations"
import actions from "./actions"
import state from "./states"

Vue.use(Vuex)

const ProductModule = {
    namespaced: true,
    state,
    actions,
    mutations
}

export default ProductModule
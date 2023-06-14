import Vue from 'vue'
import Vuex from 'vuex'

import productModule from './product/ProductModule'
import AccountModule from './account/AccountModule'
import OrderModule from './order/OrderModule'
import LoanModule from './loan/LoanModule'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    productModule: productModule,
    accountModule: AccountModule,
    orderModule: OrderModule,
    loanModule: LoanModule
  },
})

export default store
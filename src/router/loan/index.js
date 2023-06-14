import Vue from "vue";
import VueRouter from "vue-router";

import LoanRequestPage from "@/views/loan/LoanRequestPage.vue"

Vue.use(VueRouter);

const loanRoutes = [
    {
        path: "/loan-request-page",
        name: "LoanRequestPage",
        component: LoanRequestPage,
      },
]

export default loanRoutes
<template lang="">
    <div align="center">
       <h2>주문 목록</h2>
       <OrderListForm :orders="orders"/> 
    </div>
</template>
<script>
import OrderListForm from "@/components/order/OrderListForm.vue"
import { mapActions, mapState } from "vuex";

const orderModule = "orderModule"

export default {
    data () {
        return {
            userToken: localStorage.getItem('loginUserToken'),
            orders: [],
        }
    },
    components: {
        OrderListForm,
    },
    // computed: {
    //     ...mapState(orderModule, ['orders'])
    // },
    methods: {
        ...mapActions(orderModule, ['requestOrderListToSpring'])
    },
    async mounted() {
        this.orders = await this.requestOrderListToSpring(this.userToken)
    }
}
</script>
<style scoped>
    div {
      margin: 30px 30px;
      justify-content: center;
      align-items: center;
    }
</style>
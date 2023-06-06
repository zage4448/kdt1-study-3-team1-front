<template lang="">
    <div align="center">
        <h2> 상품 게시판 </h2>
        <div style="text-align: left; margin: 15px;">
            <v-btn @click="registerProduct">상품 등록</v-btn>
        </div>
        <product-list-form :products="products"/>
    </div>
</template>
<script>
import{ mapActions, mapState } from 'vuex';
import ProductListForm from '@/components/product/ProductListForm.vue';

const productModule = 'productModule';
const accountModule = 'accountModule';

export default {
    components: { ProductListForm },
    data () {
        return {
            products: [],
            userToken: '',
        }
    },
    async mounted () {
        this.products = await this.requestProductListToSpring()
        console.log(this.products)
    },
    methods: {
        ...mapActions(productModule, ['requestProductListToSpring']),
        ...mapActions(accountModule, ['requestCheckRoleToSpring']),
        
        async registerProduct() {
            this.userToken = localStorage.getItem('loginUserToken')
            if (await this.requestCheckRoleToSpring(this.userToken)) {
                this.$router.push({
                    name: "ProductRegisterPage"
                })
            } else {
                alert('사업자가 아닙니다')
            }
        }
    },
    // computed: {
    //     ...mapState(productModule, ['products'])
    // },

}
</script>
<style lang="">
    
</style>
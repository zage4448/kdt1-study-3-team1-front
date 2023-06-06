<template lang="">
    <div align="center">
        <h2>상품 정보</h2>
        <ProductReadForm v-if="product" :product="product"/>
        <p v-else>로딩중 .......</p>
        <div>
            <v-btn color="blue lighten-3" @click="modify">수정하기</v-btn> 
            <v-btn color="blue lighten-2" @click="onDelete">삭제하기</v-btn>
            <router-link :to="{ name: 'ProductListPage' }"> 
            <v-btn color="blue lighten-1">돌아가기</v-btn> 
            </router-link>
            <v-btn color="blue" @click="purchase">구매하기</v-btn>

        </div>
    </div>
</template>

<script>
import ProductReadForm from '@/components/product/ProductReadForm.vue'
import { mapActions, mapState } from 'vuex';

const productModule = 'productModule'
const accountModule = 'accountModule'


export default {
    data() {
        return {
            userToken: ''
        }
    },
    props: {
        productId: {
            type: Number,
            required: true,
        },
    },
    // computed: {
    //     ...mapState(productModule, ['product']),
    // },
    data() {
        return{
            product: {},  
        }
    },
    components: {
        ProductReadForm
    },
    methods: {
        ...mapActions( productModule, ['requestProductToSpring', 'requestDeleteProductToSpring']),
        ...mapActions( accountModule, ['requestCheckRoleToSpring']), 

        async onDelete() {
            this.userToken = localStorage.getItem('loginUserToken')
            if (await this.requestCheckRoleToSpring(this.userToken)) {
            await this.requestDeleteProductToSpring(this.productId)
            await this.$router.push({
                name: "ProductListPage"
            })
            } else {
                alert("사업자만 삭제할 수 있습니다")
            }
        },
        async modify() {
            this.userToken = localStorage.getItem('loginUserToken')
            if (await this.requestCheckRoleToSpring(this.userToken)) {
                this.$router.push({
                    name: "ProductModifyPage",
                    params: {productId: this.productId}
                })
            } else {
                alert("사업자가 아닙니다")
            }
        },
        async purchase() {
            this.userToken = localStorage.getItem('loginUserToken')
            if (!await this.requestCheckRoleToSpring(this.userToken)) {
                this.$router.push({
                    name: "OrderConfirmationPage",
                    params: {productId: this.productId}
                })
            } else {
                alert("일반 회원만 구매할 수 있습니다")
            }
        }
        
    },
    async created() {
        this.product = await this.requestProductToSpring(this.productId)
        console.log("아이디" + this.productId)
        console.log("이름:" + JSON.stringify(this.product))
    },

}
</script>
<style scoped>
    
</style>
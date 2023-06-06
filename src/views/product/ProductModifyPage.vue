<template lang="">
    <div align="center">
        <h2>상품 수정</h2>
        <product-modify-form v-if="product" :product="product" @submit="onSubmit"/>
        <p v-else>로딩중 .......</p>
    </div>
</template>


<script>
import ProductModifyForm from '@/components/product/ProductModifyForm.vue';
import { mapActions, mapState } from 'vuex'

const productModule = 'productModule'

export default {
    data() {
        return {
            product: {},
        }
    },
    components: {
        ProductModifyForm,
    },
    props: {
        productId: {
            type: Number,
            required: true,
        }
    },
    // computed: {
    //     ...mapState(productModule, ['product'])
    // },
    methods: {
        ...mapActions(
            productModule, ['requestProductToSpring', 'requestProductModifyToSpring']
        ),
        async onSubmit (payload) {
            const { productName, productPrice } = payload
            const productId = this.productId
            console.log("page: " + productId)
            await this.requestProductModifyToSpring({ productName, productPrice, productId })
            await this.$router.push({
                name: 'ProductReadPage',
                params: { productId: productId }
            })
        }
    },
    async created () {
        this.product = await this.requestProductToSpring(this.productId)
    }
}
</script>
<style lang="">
    
</style>
<template lang="">
    <div>
        <form @submit.prevent="onSubmit">
            <table>
                <tr>
                    <td>상품 번호</td>
                    <td>
                        <input type="text" :value="product.productId" disable/>
                    </td>
                </tr>
                <tr>
                    <td>상품명</td>
                    <td>
                        <input type="text" v-model="productName"/>
                    </td>
                </tr>
                <tr>
                    <td>상품 가격</td>
                    <td>
                        <input type="number" v-model="productPrice">
                    </td>
                </tr>
            </table>
            <div>
                <button type="submit">수정 완료</button>
                <router-link :to="({
                    name: 'ProductReadPage',
                    params: { productId: product.productId}})">
                수정 취소
                </router-link>
            </div>
        </form>
    </div>
</template>


<script>
export default {
    props: {
        product: {
            type: Object,
            required: true,
        }
    },
    data () {
        return {
            productName: "",
            productPrice: "",
        }
    },
    created () {
        this.productName = this.product.productName
        this.productPrice = this.product.productPrice
    },
    methods: {
        onSubmit () {
            const { productName, productPrice } = this
            this.$emit('submit', { productName, productPrice})
        }
    }
}
</script>
<style scoped>
    table{
    width: 75%;
    text-align : center;
    }
    table tr{
        padding : 12px;
        background-color: aliceblue;
           
    }
    table td{
        padding : 12px;
        border-bottom: 2px solid  darkgray;
        border-left: 2px solid  darkgray;
    }
    
</style>
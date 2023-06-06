<template lang="">
    <div align="center">
        <form @submit.prevent="onSubmit">
            <table>
                <tr>
                    <td>상품 번호</td>
                    <td>
                        {{ product.productId }}
                    </td>
                </tr>
                <tr>
                    <td>상품 명</td>
                    <td>
                        {{ product.productName }}
                    </td>
                </tr>
                <tr>
                    <td>상품 가격</td>
                    <td>
                        {{ product.productPrice }}
                    </td>
                </tr>
            </table>
            <v-btn type="submit">구매하기</v-btn>
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
    methods: {
        onSubmit () {
            const productId = this.product.productId
            const userToken = localStorage.getItem('loginUserToken')
            this.$emit('submit', { productId, userToken })
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
<template lang="">
    <div>
         <!-- 
            1. 사용자가 상품 정보를 입력해 상품을 등록할 수 있는 페이지를 출력합니다.
            2. 상품 등록 페이지를 누르면 사용자가 입력한 상품 정보가 backend로 보내집니다.
            3. 돌아가기 버튼을 만들어 상품 목록(상품 보기) 페이지로 돌아갈 수 있도록 합니다.
        -->
        <form @submit.prevent="onSubmit">
            <table>
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
                <button type="submit">등록</button>
                <router-link :to="{ name: 'ProductListPage' }">돌아가기</router-link>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            productName: '상품명을 입력하세요',
            productPrice: 0,
        }
    },
    methods: {
        onSubmit () {
            const { productName, productPrice} = this
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
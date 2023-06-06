import axiosInst from '@/utility/axiosInst'
import { REQUEST_ORDER_LIST_TO_SPRING } from './mutation-types'

export default {

    requestOrderToSpring ({}, payload) {
        const { productId, userToken } = payload
        return axiosInst.post('/order/order-product', { productId, userToken})
        .then((res) => {
            alert('상품 구매 성공!')
        })
        .catch(() => {
            alert('구매 실패')
        })
    },

    requestOrderListToSpring ({commit}, userToken) {
        return axiosInst.get(`/order/list/${userToken}`)
        .then((res) => {
            commit(REQUEST_ORDER_LIST_TO_SPRING, res.data)
            return res.data
        })
    }

}
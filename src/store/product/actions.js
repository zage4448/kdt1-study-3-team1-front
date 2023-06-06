import {
    REQUEST_PRODUCT_LIST_TO_SPRING,
    REQUEST_PRODUCT_TO_SPRING
} from './mutation-types'

import axiosInst from '@/utility/axiosInst'

export default {
    requestProductToSpring ({ commit }, productId) {
        return axiosInst.get(`/product/${productId}`)
        .then((resRead) => {
            console.log("action에서: " + resRead.data.productId)
            commit(REQUEST_PRODUCT_TO_SPRING, resRead.data)
            return resRead.data
        })
    },
    requestProductListToSpring({commit}) {
        return axiosInst.get('/product/list')
        .then((resList) => {
            commit(REQUEST_PRODUCT_LIST_TO_SPRING, resList.data)
            return resList.data
        })
    },
    requestRegisterProductToSpring ({}, payload) {

        const { productName, productPrice } = payload

        return axiosInst.post('/product/product-register', { productName, productPrice })
        .then((res) => {
            alert('상품 등록 성공!')
            return res
        })
        .catch(() => {
            alert('등록 실패')
        })
    },

    requestDeleteProductToSpring ({}, productId) {
        return axiosInst.delete(`/product/${productId}`)
            .then((res) => {
                if (res.data = true){
                    alert('삭제 성공!')
                }             
            })
            .catch(() => {
                alert('문제 발생!')
            })
    },
    requestProductModifyToSpring({}, payload) {
        const { productId, productName, productPrice } = payload
        console.log("actions: " + productId)
        return axiosInst.put('/product/product-update', { productId, productName, productPrice })
        .then ((res) => {
            alert('수정 성공!')
        })
        .catch (() => {
            alert('수정 실패!')
        })
    }
}
import axiosInstances from '@/utility/axiosInst'

export default {
  requestLoanInfoToFastApi ({}, payload) {
    const { income, private_loan_outstanding_amount, outstanding_amount} = payload
    return axiosInstances.fastApiAxiosInst.post('/request-loan-amount', {income, private_loan_outstanding_amount, outstanding_amount})
    .then((res) => {
      console.log(res.data)
      return res.data
    })
  }
};

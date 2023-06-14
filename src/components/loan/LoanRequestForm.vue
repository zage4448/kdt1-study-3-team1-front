<template>
    <div>
      <div class="asdf">
        <v-text-field
            v-model="income"
            label="수익 (연봉)"
            :disabled="false"
            type="number"
            required>
        </v-text-field>
        <v-text-field
            v-model="private_loan_outstanding_amount"
            label="개인 사채"
            :disabled="false"
            type="number"
            required>
        </v-text-field>
        <v-text-field
            v-model="outstanding_amount"
            label="은행 빛"
            :disabled="false"
            type="number"
            required>
        </v-text-field>
        <v-btn text large outlined style="font-size: 13px"
              class="mt-3 ml-5" color="primary lighten-1"
              @click="requestLoanInfo"
              :disabled="false">
              대출 가능 <br/> 금액 확인
      </v-btn>
      <v-text-field
            v-model="loanAmount"
            label="대출 가능한 금액"
            readonly
            >
        </v-text-field>
      </div>  
    </div>
</template>
<script>
import { mapActions } from 'vuex';

const loanModule = 'loanModule'

export default {
    data () {
        return {
            income: 0,
            private_loan_outstanding_amount: 0,
            outstanding_amount: 0,
            loanAmount: 0

        }
    },
    methods: {
        ...mapActions(loanModule, ['requestLoanInfoToFastApi']),

        async requestLoanInfo() {
            const { income, private_loan_outstanding_amount, outstanding_amount } = this
            this.loanAmount = await this.requestLoanInfoToFastApi({ income, private_loan_outstanding_amount, outstanding_amount })
            console.log(this.loanAmount)
        }
    }
}
</script>

<style scoped>
      .asdf {
      margin: 30px 200px;
      flex-direction: column;
    }
</style>
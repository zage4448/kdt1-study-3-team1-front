<template lang="">
  <div>
    <form @submit.prevent="createAccount">
      <div class="d-flex">
        <v-text-field
            v-model="email"
            label="이메일"
            :rules="email_rule"
            :disabled="false"
            required>
        </v-text-field>
        <v-btn text large outlined style="font-size: 13px"
                class="mt-3 ml-5" color="primary lighten-1"
                @click="checkDuplicateEmail"
                :disabled="false">
            이메일 <br/> 인증 하기
        </v-btn>
    </div>
    <div v-if="emailPass" class="d-flex">
      <v-text-field
          v-model="authenticationNumber"
          label="인증번호"
          :disabled="false"
          required>
      </v-text-field>
      <v-btn text large outlined style="font-size: 13px"
              class="mt-3 ml-5" color="primary lighten-1"
              @click="checkAuthentication"
              :disabled="false">
              인증 번호 <br/> 확인
      </v-btn>
    </div>
      <v-text-field
          v-model="password"
          label="비밀번호"
          :disabled="false"
          type="password"
          required>
      </v-text-field>
      <label>일반회원
        <input type="radio" name="roleType" @change="selectRoleType($event)" value="NORMAL"/> 
      </label><br/>
      <label>사업자
        <input type="radio" name="roleType" @change="selectRoleType($event)" value="BUSINESS"/>
      </label>
      <div align="center">
        <v-btn color="primary" type="submit" class="mt-6"
          :disabled="!isFormValid()">가입</v-btn>
        <v-btn class="mt-6">
          <router-link :to="{ name: 'home' }"> 취소 </router-link>
        </v-btn>
      </div>
    </form>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

const accountModule = 'accountModule'

export default {
  data() {
    return {
      email: "",
      password: "",
      authenticationNumber: '',
      roleType: "",
      authenticationCode: '',
      emailPass: false,
      emailAuthentify: false,
      email_rule: [
          v => !!v || '이메일을 입력해주세요!',
          v => {
              const replaceV = v.replace(/(\s*)/g, '')
              const pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/
              return pattern.test(replaceV) || '올바른 이메일 형식으로 입력해주세요!'
          }
      ]
    };
  },
  methods: {
    ...mapActions(accountModule, ['requestSpringToCheckEmailDuplication', 'requestAuthentifyEmailToFastApi']),
    createAccount() {
      const { email, roleType, password } = this;
      this.$emit("submit", { email, roleType, password });
    },
    selectRoleType(event) {
      this.roleType = event.target.value;
    },
    async checkDuplicateEmail () {
        const emailValid = this.email.match(
            /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
        this.emailPass = false

        if (emailValid) {
            const { email } = this
            this.emailPass = await this.requestSpringToCheckEmailDuplication({ email })
            if (this.emailPass) {
              this.authenticationCode = await this.requestAuthentifyEmailToFastApi({ email })
            }
        }
    },
    isFormValid () {
        return this.emailAuthentify && this.email_rule[1](this.email) === true
    },
    checkAuthentication () {
      if (this.authenticationNumber == this.authenticationCode) {
        this.emailAuthentify = true,
        alert('인증 완료')
      } else {
        alert('인증 번호를 확인하세요')
      }
    }
  },
};
</script>
<style></style>

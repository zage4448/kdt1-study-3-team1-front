<template lang="">
  <div>
    <router-link :to="{ name: 'SignUpPage' }">
      <v-btn v-if="!isLoggedIn" color="primary">회원 가입</v-btn>
    </router-link> <br>
    <LoginForm @click="login" />
    <router-link :to="{ name: 'ProductListPage' }">
      <v-btn v-if="isLoggedIn" color="primary">상품 보기</v-btn>
    </router-link> <br>
  </div>
</template>

<script>
import LoginForm from "@/components/account/LoginForm.vue";
import { mapActions } from "vuex";

const accountModule = "accountModule";

export default {
  data() {
    return {
      isLoggedIn: false,
    };
  },
  components: {
    LoginForm,
  },
  methods: {
    ...mapActions(accountModule, ["requestLoginToSpring"]),
    async login(payload) {
      await this.requestLoginToSpring(payload);
      location.reload();
    },
  },
  mounted() {
    if (localStorage.getItem("loginUserToken") == null) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
    }
  },
};
</script>

<style scoped>
      div {
      margin: 30px 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
</style>

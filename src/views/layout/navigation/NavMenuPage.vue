<template lang="">
    <nav>
      <v-app-bar color="blue darken-1">
        <v-app-bar-nav-icon @click="navigation_drawer = !navigation_drawer"/>
        <button @click="goToHome">
        </v-toolbar-title >
        <span style="color: white">
          <v-icon style="color: white">mdi-shopping</v-icon>
          <b>
            Study-3 Team-1
          </b>
        </span>
        </v-toolbar-title>
      </button>
        <v-spacer></v-spacer>
        <v-btn v-if="isLogin" @click="logout">
          <span >로그아웃</span>
          <v-icon>mdi-exit-to-app</v-icon>
        </v-btn>
      </v-app-bar>

      <v-navigation-drawer app v-model="navigation_drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">상품 문제</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-cart-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
            <router-link :to="{name: 'OrderListPage'}">
              주문 상품 조회하기
            </router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      </v-navigation-drawer>
    </nav>
  </template>
  <script>
  export default {
    data() {
      return {
        navigation_drawer: false,
        isLogin: false,
        userToken: '',
      };
    },
    methods: {
      logout() {
          this.isLogin = false
          localStorage.clear()
          this.$router.push({
              name: "home"
          })
          location.reload()
          .catch(() => {
              location.reload()
          })
      },
      goToHome() {
        this.$router.push({
            name: "home"
        })
      }
    },
    mounted () {
      this.userToken = localStorage.getItem("loginUserToken")
      if (this.userToken != null) {
          this.isLogin = true
      }
    }
  };
  </script>
  <style scoped>
nav {
  margin: 30px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
  
import axiosInstances from '@/utility/axiosInst'

export default {
  requestCreateAccountToSpring({}, payload) {
    const { email, roleType, password } = payload;
    return axiosInstances.springAxiosInst
      .post("/account/create-account", { email, roleType, password })
      .then((res) => {
        if (res.data) {
          alert("가입 성공!");
        } else {
          alert("동일한 계정이 이미 존재합니다");
        }
      });
  },
  requestLoginToSpring({}, payload) {
    const { email, password } = payload;
    return axiosInstances.springAxiosInst
      .post("/account/login", { email, password })
      .then((res) => {
        if (res.data != null) {
          alert("로그인 성공!");
          let userToken = res.data;
          localStorage.setItem("loginUserToken", userToken);
        } else {
          alert("로그인 실패!");
        }
      });
  },
  requestCheckRoleToSpring({}, userToken) {
    return axiosInstances.springAxiosInst
      .post("/account/check-role", { userToken })
      .then((res) => {
        return res.data 
      })
  },
  requestSpringToCheckEmailDuplication ({}, payload) {
    const { email } = payload

    return axiosInstances.springAxiosInst.get(`/account/check-email/${email}`)
      .then((res) => {
          if (res.data) {
              alert('사용 가능한 이메일입니다!')
                return true
          } else {
              alert('중복된 이메일입니다!')
              return false
          }
      })
      .catch((res) => {
          alert("문제 발생!")
      })
},
requestAuthentifyEmailToFastApi ({}, email) {
  return axiosInstances.fastApiAxiosInst.post('/email-authentication', email)
    .then((res) => {
      return res.data
    })
}
};

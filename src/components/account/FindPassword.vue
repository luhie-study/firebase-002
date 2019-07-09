<template>
  <div class="FindPassword container">
    <div class="card">
      <div class="card-body">
        <div class="form-group">
          <label>email</label>
          <input type="emaile" v-model="email" />
        </div>
        <div class="form-group">
          <button class="btn btn-primary" type="button" @click="findPassword">Find Password</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FindPassword',
  data() {
    return {
      email: '',
    }
  },
  methods: {
    findPassword() {
      this.$fireauth.sendPasswordResetEmail(this.email)
      .then(() => {
        alert(`${this.email} 으로 비밀번호 재설정 이메일이 발송되었습니다.`)
        this.$router.go('-1')
      })
      .catch(err => {
        console.log(err)
        switch(err.code) {
          case 'auth/user-not-found':
            alert('일치하는 이메일이 없습니다.')
            break
          case 'auth/invalid-email':
            alert('이메일 형식이 잘못 되었습니다.')
            break
        }
      })
    }
  }
}
</script>
<style>
</style>
/* 
code: "auth/user-not-found"
message: "There is no user record corresponding to this identifier. The user may have been deleted."
code: "auth/invalid-email"
message: "The email address is badly formatted."


*/
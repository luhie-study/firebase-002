<template>
  <div class="login container">
    <div class="card">
      <div class="card-body">
        <form @submit.prevent="login">
          <div class="form-group">
            <label>email</label>
            <input type="email" v-model="email"/>
          </div>
          <div class="form-group">
            <label>password</label>
            <input type="password" v-model="password" />
          </div>
          <div class="form-group">
            <button class="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      this.$fireauth.signInWithEmailAndPassword(this.email, this.password)
      .then(result => {
        if(result.operationType === 'signIn') this.$router.push('/')
      })
      .catch(function(error) {
        alert(error.message)
      })
    }
  }

}
</script>

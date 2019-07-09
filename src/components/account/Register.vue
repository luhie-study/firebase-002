<template>
  <div class="create container">
    <div class="card">
      <div class="card-body">
        <form @submit.prevent="addUser" >
          <div class="form-group">
            <label>email</label>
            <input type="email" v-model="user.email" />
          </div>
          <div class="form-group">
            <label>password</label>
            <input type="password" v-model="user.password"/>
          </div>
          <div class="form-group">
            <label>re-password</label>
            <input type="password" v-model="user.rePassword" />
          </div>
          <div class="form-group">
            <label>nickname</label>
            <input type="text" v-model="user.nickName" />
            <button type="button">중복확인</button>
          </div>
          <div class="form-group">
            <label>name</label>
            <input type="text" v-model="user.name" />
          </div>
          <div class="form-group">
            <label>birth</label>
            <input type="text" v-model="user.birth" />
          </div>
          <div class="form-group">
            <label>phone</label>
            <input type="text" v-model="user.phone" />
          </div>
          <div class="form-group">
            <label>address</label>
            <input type="text" v-model="user.address" />
          </div>
          <div class="form-group">
            <button class="btn btn-primary">Join</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import * as firestore from '@/lib/db.js'
export default {
  name: 'create',
  data() {
    return {
      user: {
        email: '',
        password: '',
        rePassword: '',
        nickName: '',
        name: '',
        birth: '',
        phone: '',
        address: ''
      },
    }
  },
  methods: {
    addUser() {
      this.$fireauth.createUserWithEmailAndPassword(this.user.email, this.user.password)
      .then(result=> {
        if(result.additionalUserInfo.isNewUser) {
          firestore.add({
            email: this.user.email,
            nickName: this.user.nickName,
            name: this.user.name,
            birth: this.user.birth,
            phone: this.user.phone,
            address: this.user.address
          })
          .then(result => { 
            if(result.id != '' || result.id != null) {
              this.$router.push('/') 
              alert('회원가입에 성공하셨습니다. ')
            }
          })
          .catch(err => { throw new Error })
        }
      })
      .catch(firestore.err)
    },
  },
}
</script>
<style lang="scss" scoped>
</style>

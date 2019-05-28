<template>
  <div class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/auth/create">Auth</router-link>
    <router-link to="/auth/login" v-if="!isLogin">Login</router-link>
    <a @click="logout" v-else>Logout</a>
  </div>
</template>
<script>
export default {
  name: 'navbar',
  data() {
    return {
      isLogin: false
    }
  },
  methods: {
    getUser() {
      this.$fireauth.onAuthStateChanged(user => {
        if(user) this.isLogin = true
        else { 
          // this.$router.push('/')
        }
      });
    },
    logout() {
      this.$fireauth.signOut().then(() => {
        console.log('success')
        this.isLogin = false
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  created() {
    this.getUser()
  }
}

</script>
<style lang="scss" scoped>
  $mobile-width: 600px;
  $mobile: "screen and (max-width: $mobile-width)";
  // $media_queries : (
    // 'mobile'    : "only screen and (max-width: 667px)",
    // 'tablet'    : "only screen and (min-width: 668px) and (max-width: $size__site_content_width)",
    // 'desktop'   : "only screen and (min-width: ($size__site_content_width + 1))",
    // 'retina2'   : "only screen and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi)",
    // 'retina3'   : "only screen and (-webkit-min-device-pixel-ratio: 3) and (min-resolution: 288dpi)",
    // 'landscape' : "screen and (orientation:landscape) ",    
    // 'portrait'  : "screen and (orientation:portrait) "
  // );

  .navbar {
    overflow: hidden;
    background-color: #333;
    a {
      float: left;
      display: block;
      color: #f2f2f2;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      font-size: 17px;
      font-weight: bold;
      &:hover {
        background-color: #dddddd;
        color: #2c3e50;
      }
      &.router-link-exact-active {
        color: #42b983;
      }
      @media #{$mobile} {
        &:not(:first-child) {
          display: none;
        }
        .icon {
          float: right;
          display: block;
        }
      }
    }
    .icon {
      display: none;
    }
    @media #{ $mobile } {
      .responsive {
        position: relative;
        .icon {
          position: absolute;
          right: 0;
          top: 0;
        }
        a {
          float: none;
          display: block;
          text-align: left;
        }
      }
    }
  }
//  https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_topnav 
</style>
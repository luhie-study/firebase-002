<template>
  <div class="auth">
    <h1>This is an auth page</h1>
    <Create v-if="type=='create'"></Create>
    <Login v-else-if="type=='login'"></Login>
    {{ type }}
  </div>
</template>
<script>
import Create from '@/components/account/Create.vue'
import Login from '@/components/account/Login.vue'

export default {
  name: 'auth',
  data() {
    return {
    }
  },
  components: {
    Create,
    Login
  },
  methods: {
  },
  created() {
    this.$store.state.authType = this.$route.params.type
  },
  computed: {
    type() {
      return this.$store.getters.authType
    }
  }
}
</script>
<template>
  <div v-if="user" class="container">
    <Nuxt />
  </div>
</template>
<script>
import { authUserMapper } from "~/store/user"
export default {
  computed: {
    ...authUserMapper.mapState(["user"]),
  },
  watch: {
    $route() {
      this.checkUserLogin()
    }
  },
  mounted() {
    this.checkUserLogin()
  },
  methods: {
    checkUserLogin() {
      const authUser = this.user
      if(!authUser) {
        alert("login failed!!")
        this.$router.push("/")
      }
    }
  }
}
</script>
<style>
.container {
  max-width: 640px;
}
</style>

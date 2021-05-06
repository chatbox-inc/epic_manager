<template>
  <div>
    <AppHeader :user="user" />
    <div v-if="user" class="container pt-5">
      <Nuxt />
    </div>
  </div>
</template>
<script>
import { authUserMapper } from "~/store/user"
import AppHeader from "~/components/layouts/AppHeader"
export default {
  components: {AppHeader},
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

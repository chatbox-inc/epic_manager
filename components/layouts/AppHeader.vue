<template>
  <nav class="navbar bg-secondary navbar-default navbar-fixed-top">
    <div class="container">
      <div class="w-100 navbar-header d-flex justify-content-between align-content-center">
        <a href="/">
          <h1 class="text-white">epic manager</h1>
        </a>
        <a v-if="user" href="#" @click.prevent="logout">
          <span class="btn btn-primary py-2 px-4 rounded">ログアウト</span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import { authUserMapper } from "~/store/user"
export default {
  props: {
    user: {
      type: Object | null,
      required: true
    }
  },
  methods: {
    ...authUserMapper.mapActions(["onLogout"]),
    async logout() {
      this.onLogout()
      await this.$router.push("/")
    }
  }
}
</script>

<style scoped>

</style>

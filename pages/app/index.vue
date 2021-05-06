<template>
  <div>
    login success
    <a href="#" @click.prevent="logout">
      <span class="btn btn-primary py-2 px-4 rounded">ログアウト</span>
    </a>
  </div>
</template>

<script>
import { authUserMapper } from "~/store/user"
export default {
  layout: "mypage",
  methods: {
    ...authUserMapper.mapActions(["onLogout"]),
    logout() {
      this.onLogout()
      this.$router.push("/")
    }
  }
}
</script>

<style scoped>

</style>

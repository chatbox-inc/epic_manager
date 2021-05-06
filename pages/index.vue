<template>
  <div>
    <a href="#" @click.prevent="login">
      <span class="btn btn-primary py-2 px-4 rounded">ログイン</span>
    </a>
  </div>
</template>

<script>
import { authUserMapper } from "~/store/user"
export default {
  layout: "guest",
  methods: {
    ...authUserMapper.mapActions(["onLogin"]),
    async login() {
      console.log("handle")
      const provider = new this.$fireModule.auth.GithubAuthProvider()
      const result = await this.$fireModule.auth().signInWithPopup(provider)
      if(result) {
        this.onLogin(result)
        this.$router.push("/app")
      }
    }
  }
}
</script>

<style>
</style>

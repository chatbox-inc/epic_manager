<template>
  <div>
    <div>
      <label for="private">
        <input v-model="withPrivate" class="border border-4 mr-2" type="checkbox" id="private" />
        Private リポジトリを含む
      </label>
    </div>
    <a href="#" @click.prevent="login">
      <span class="btn btn-primary py-2 px-4 rounded">ログイン</span>
    </a>
  </div>
</template>

<script>
import { authUserMapper } from "~/store/user"
export default {
  layout: "guest",
  data() {
    return {
      withPrivate: false,
    }
  },
  methods: {
    ...authUserMapper.mapActions(["onLogin"]),
    async login() {
      const provider = new this.$fireModule.auth.GithubAuthProvider()
      if(this.withPrivate) {
        provider.addScope("repo")
      }
      try {
        const result = await this.$fireModule.auth().signInWithPopup(provider)
        this.onLogin(result)
        this.$router.push("/app")
      }catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style>
</style>

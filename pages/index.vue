<template>
  <div>
    <div>
      <a href="https://github.com/apps/example-app-dev/installations/new" class="mr-2">
        リポジトリ連携
      </a>
    </div>
    <button class="btn btn-primary py-2 px-4 rounded" @click.prevent="login" :disabled="hasInstalledId">
      ログイン
    </button>
  </div>
</template>

<script>
import { authUserMapper } from "~/store/user"
export default {
  layout: "guest",
  data() {
    return {
      hasInstalledId: true,
    }
  },
  mounted() {
    this.hasInstalledId = !this.$route.query.code
  },
  methods: {
    ...authUserMapper.mapActions(["onLogin"]),
    async login() {
      const { code } = this.$route.query
      const result = await this.$axios.post("https://github.com/login/oauth/access_token",{
        code: code,
        client_id: this.$config.APP_CLIENT_ID,
        client_secret: this.$config.APP_CLIENT_SECRET,
      })
      console.log(result)
    }
  }
}
</script>

<style>
</style>

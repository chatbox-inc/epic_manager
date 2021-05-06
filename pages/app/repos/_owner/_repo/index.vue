<template>
  <AppSection :title="`プロジェクト管理`">
    <div class="input-group">
      <input v-model="form.title" type="text" class="form-control">
    </div>
    <a href="#" @click.prevent="createIssue" class="btn btn-primary py-2 px-4 rounded">
      issue作成
    </a>
  </AppSection>
</template>

<script>
import AppSection from "~/components/layouts/AppSection"
import { authUserMapper } from "~/store/user"
import { GithubService } from "~/service/github/GithubService"

export default {
  layout: "mypage",
  components: {AppSection},
  data() {
    return {
      form: {
        title: null
      }
    }
  },
  computed: {
    ...authUserMapper.mapState(["token"]),
    owner() {
      return this.$route.params.owner
    },
    repo() {
      return this.$route.params.repo
    }
  },
  methods: {
    async createIssue() {
      const params = { owner: this.owner, repo: this.repo, form: this.form.title }
      const service = new GithubService(this.token)
      await service.createIssue(params)
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <AppSection :title="`プロジェクト管理`">
    <p class="mb-0">issue作成</p>
    <div class="input-group mb-4">
      <input v-model="form.title" type="text" class="form-control">
    </div>
    <div class="text-right">
      <a href="#" @click.prevent="createIssue" class="btn btn-primary py-2 px-4 rounded">
        issue作成
      </a>
    </div>
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
      const params = { owner: this.owner, repo: this.repo, title: this.form.title }
      const service = new GithubService(this.token)
      await service.createIssue(params)
    }
  }
}
</script>

<style scoped>

</style>

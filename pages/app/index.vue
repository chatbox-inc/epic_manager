<template>
  <AppSection :title="`リポジトリの入力`">
    <div class="input-group mb-4">
      <input v-model="form.repos" type="text" placeholder="リポジトリを入力してください" class="form-control">
    </div>
    <div class="text-right">
      <a href="#" @click.prevent="linkToProjects" class="btn btn-primary py-2 px-4 rounded">
        プロジェクト管理ページへ
      </a>
    </div>
  </AppSection>
</template>

<script>
import AppSection from "~/components/layouts/AppSection"
export default {
  components: {AppSection},
  layout: "mypage",
  data() {
    return {
      form: {
        repos: "tamemoto/epic_manager"
      },
    }
  },
  methods: {
    linkToProjects() {
      if(!this.form.repos) {
        alert("リポジトリを選択してください")
        return
      }
      const [owner, repo] = this.form.repos.split("/")
      this.$router.push(`/app/repos/${owner}/${repo}`)
    }
  }
}
</script>

<style scoped>

</style>

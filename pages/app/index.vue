<template>
  <AppSection :title="`リポジトリ選択`">
    <select class="custom-select">
      <option :value="null" selected>選択してください</option>
      <option
        v-for="option in options"
        :key="option.val"
        :value="option.val"
      >
        {{ option.label }}
      </option>
    </select>
    <a href="#" @click.prevent="linkToProjects" class="btn btn-primary py-2 px-4 rounded">
      プロジェクト管理ページへ
    </a>
  </AppSection>
</template>

<script>
import AppSection from "~/components/layouts/AppSection"
export default {
  components: {AppSection},
  layout: "mypage",
  data() {
    return {
      selected: "tamemoto/epic_manager",
      options: [
        { label: "tamemoto/epic_manager", val: "tamemoto/epic_manager" }
      ]
    }
  },
  methods: {
    linkToProjects() {
      if(!this.selected) {
        alert("リポジトリを選択してください")
        return
      }
      const [owner, repo] = this.selected.split("/")
      this.$router.push(`/app/repos/${owner}/${repo}`)
    }
  }
}
</script>

<style scoped>

</style>

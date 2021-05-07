<template>
  <AppSection :title="`プロジェクト管理`">
    <div class="form-group">
      <label for="issue-title">タイトル</label>
      <input v-model="form.title" type="text" class="form-control" id="issue-title" placeholder="タイトルを記入してください">
    </div>
    <div class="form-group">
      <label for="issue-body">内容</label>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a href="#" @click.prevent="switchMode" class="nav-link" :class="{'active': !isPreview}">
            書き込みモード
          </a>
        </li>
        <li class="nav-item">
          <a href="#" @click.prevent="switchMode" class="nav-link" :class="{'active': isPreview}">
            プレビューモード
          </a>
        </li>
      </ul>
      <textarea v-show="!isPreview" v-model="form.body" class="form-control dispaly-preview" id="issue-body" placeholder="issueの内容を記述してください！markdownも対応しています"/>
      <div v-show="isPreview" v-html="$md.render(form.body)" class="form-control dispaly-preview"/>
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
      isPreview: false,
      form: {
        title: null,
        body: "",
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
    switchMode() {
      this.isPreview = !this.isPreview
    },
    async createIssue() {
      const params = { owner: this.owner, repo: this.repo, title: this.form.title, body: this.form.body }
      const service = new GithubService(this.token)
      await service.createIssue(params)
    }
  }
}
</script>

<style scoped>
.dispaly-preview {
  overflow: scroll;
  height: 250px;
}
</style>

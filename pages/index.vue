<template>
  <div>
    <a href="#" @click.prevent="login">
      <span class="btn btn-primary py-2 px-4 rounded">ログイン</span>
    </a>
  </div>
</template>

<script>
export default {
  layout: "guest",
  methods: {
    login() {
      console.log("hoge")
    }
  }
}
</script>

<style>
</style>

<template>
  <div>
    <AppHeader :user="null" />
    <div class="container pt-5">
      <Nuxt />
    </div>
  </div>
</template>
<script>
import AppHeader from "~/components/layouts/AppHeader"
export default {
  components: {AppHeader}
}
</script>
<style>
.container {
  max-width: 640px;
}
</style>

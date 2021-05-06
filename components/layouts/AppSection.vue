<template>
  <section>
    <h2 class="mb-3">{{ title }}</h2>
    <slot />
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped>
</style>

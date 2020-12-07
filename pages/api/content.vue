<template>
  <div>
    {{ articles }}
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const query = await $content('articles' || 'index').only(['title', 'path']).sortBy('date', 'desc')
    const articles = await query.fetch()
    return {articles}
  }
}
</script>

<style>

</style>
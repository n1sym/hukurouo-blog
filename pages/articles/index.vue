<template>
  <div class="container">
    <ArticleList :articles="articles"/>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const query = await $content('articles' || 'index').sortBy('date', 'desc')
    const articles = await query.fetch()
    return { articles }
  }
}
</script>

<style>
</style>
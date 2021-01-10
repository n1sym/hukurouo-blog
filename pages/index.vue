<template>
  <div class="container">
    <ArticleList :articles="articles"/>
    <nuxt-link :to="'/page/2'">
      <span class="linkedit">next page</span>
    </nuxt-link>
    <br><br><br><br>
  </div>

</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const query = await $content('articles' || 'index').sortBy('date', 'desc').limit(20)
    const articles = await query.fetch()
    return { articles }
  }
}
</script>

<style>
</style>
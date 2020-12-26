<template>
  <div class="container">
    <ArticleList :articles="articles"/>
    <br><br>
  </div>
  
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    //console.log(params)
    const query = await $content('articles' || 'index').where({ tags: { $contains: params.tag }}).sortBy('date', 'desc')
    const articles = await query.fetch()
    return { articles }
  },
}
</script>

<style>
</style>
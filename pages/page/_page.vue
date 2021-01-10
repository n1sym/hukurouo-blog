<template>
  <div class="container">
    <ArticleList :articles="articles"/>
    <br>
    <nuxt-link :to="`/page/${prevPage}`" v-if="prevPage!=0">
      <span class="linkedit">prev page</span>
    </nuxt-link>
    <span class="blank" v-if="prevPage!=0"></span>
    <nuxt-link :to="`/page/${nextPage}`" v-if="nextPage!=20">
      <span class="linkedit">next page</span>
    </nuxt-link>
    <br><br>
  </div>

</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const query = await $content('articles' || 'index').sortBy('date', 'desc').skip((params.page-1) * 20).limit(20)
    const articles = await query.fetch()
    const prevPage = Number(params.page) - 1
    const nextPage = Number(params.page) + 1
    return { articles, nextPage, prevPage }
  }
}
</script>

<style>
.blank{
  margin: 10px;
}
</style>
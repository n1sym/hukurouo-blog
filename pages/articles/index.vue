<template>
  <div class="container">
    <NuxtLink :to="'/articles'"> <a id="font_black"> すべて</a>  </NuxtLink>
    ｜
    <NuxtLink :to="'/articles/kansoubun'"> <a id="font_black"> 感想文</a>  </NuxtLink>
    ｜
    <NuxtLink :to="'/articles/gizyutu'"> <a id="font_black"> プログラミング</a>  </NuxtLink>
    ｜
    <NuxtLink :to="'/articles/nikki'"> <a id="font_black"> 日記</a>  </NuxtLink>
    <br><br>
    <ArticleList :articles="articles"/>
    <br><br>
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
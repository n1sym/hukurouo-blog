<template>
  <div class="container">
    <p> ■ 最近の記事 </p>

    <ArticleList :articles="articles"/>
   
    <br><br>
    <p>■ portal</p> 
    <div class="linkedit">
      <a href="https://twitter.com/hukurouo" target="_blank">https://twitter.com/hukurouo</a>
    </div>

    <div class="linkedit">
      <a href="https://github.com/hukurouo" target="_blank">https://github.com/hukurouo</a>
    </div>

    <div class="linkedit">
      <a href="https://note.com/hukurouo" target="_blank">https://note.com/hukurouo</a>
    </div>

    <div class="linkedit">
      <a href="https://hukurouo.tumblr.com/" target="_blank">https://hukurouo.tumblr.com/</a>
    </div>
    <br>
    <br>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const query = await $content('articles' || 'index').sortBy('date', 'desc').limit(5)
    const articles = await query.fetch()
    return { articles }
  }
}
</script>

<style>

</style>
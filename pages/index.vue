<template>
  <div class="container">
    <br>
    <p> ■ このサイトについて </p>
     <p>日記、技術記事、感想文などを書きます</p>
     <br>
    <p> ■ 最近の記事 </p>

    <ArticleList :articles="articles"/>
   
    <br>
    <p>■ 各リンク</p> 
    <div class="linkedit">
      <a href="https://twitter.com/hukurouo" target="_blank">https://twitter.com/hukurouo</a>
    </div>
    
    <p id="padding_top_5">たまに呟きます</p> 
    

    <div class="linkedit">
      <a href="https://github.com/hukurouo" target="_blank">https://github.com/hukurouo</a>
    </div>

    <p  id="padding_top_5">プログラミングで作ったもの</p>

    <div class="linkedit">
      <a href="https://note.com/hukurouo" target="_blank">https://note.com/hukurouo</a>
    </div>
    <p  id="padding_top_5">月1でよかった作品を紹介しています</p>
    <div class="linkedit">
      <a href="https://hukurouo.tumblr.com/" target="_blank">https://hukurouo.tumblr.com/</a>
    </div>
    <p  id="padding_top_5">描いた絵の置き場</p>
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
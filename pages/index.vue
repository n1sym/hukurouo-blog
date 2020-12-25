<template>
  <div class="container">
     <p>日記、技術記事、感想文などを書きます</p>
     <br>
   
    <p>■ 各リンク</p> 

    <p id="padding_top_5">たまに呟きます: <a href="https://twitter.com/hukurouo" target="_blank">twitter.com/hukurouo</a> </p> 
    
    <p  id="padding_top_5">プログラミングで作ったもの: <a href="https://github.com/hukurouo" target="_blank">github.com/hukurouo</a></p>

    <p  id="padding_top_5">月1でよかった作品紹介: <a href="https://note.com/hukurouo" target="_blank">note.com/hukurouo</a></p>

    <p  id="padding_top_5">描いた絵: <a href="https://hukurouo.tumblr.com/" target="_blank">hukurouo.tumblr.com</a></p>

    <p  id="padding_top_5">ボクセルアート: <a href="https://voxel.hukurouo.com/" target="_blank">voxel.hukurouo.com</a></p>
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
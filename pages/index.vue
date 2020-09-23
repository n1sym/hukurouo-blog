<template>
  <div class="container">
    <p> ■ 最近の記事 </p>
   
    <div v-for="n in articles" :key="n.slug">
      <div class="display_flex">
      {{n.date | moment}} : <div id="blank_10"> </div> <nuxt-link :to="'/articles/'+ n.slug"> <div class="linkedit"> {{n.title}} </div> </nuxt-link> 
      </div>
    </div>
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
import moment from 'moment';
export default {
  filters: {
        moment: function (date) {
            return moment(date).format('YYYY/MM/DD');
        }
  },
  async asyncData ({ $content, params }) {
    const query = await $content('articles' || 'index').sortBy('date', 'desc').limit(5)
    const articles = await query.fetch()
    return { articles }
  }
}
</script>

<style>
.container {
  padding: 20px;
}
@media screen and (min-width: 768px) {
.container {
  padding: 20px;
  width: 900px;
}
}


</style>
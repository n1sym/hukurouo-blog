<template>
  <div class="container">
    <div v-for="n in articles" :key="n.slug">
      <div class="display_flex">
      {{n.date | moment}} : <div id="blank_10"> </div> <nuxt-link :to="'/articles/'+ n.slug"> <div class="linkedit"> {{n.title}} </div> </nuxt-link> 
      </div>
    </div>
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
    const query = await $content('articles' || 'index').sortBy('createdAt', 'desc')
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
<template>
<div class="container">
  <article>
    <div class="timestamp">
    {{articles.date | moment }}
    </div>
    <h1>{{articles.title}}</h1>
    
    <div class="tag">
      <div v-for="tag in articles.tags" :key="tag"> <div class="tag_padding">#{{tag}}</div> </div>
    </div>
    <br>
    
    <nuxt-content :document="articles" />
    <br>
    <div class="display_flex">
    <NuxtLink v-if="prev" :to="'/articles/'+ prev.slug">
    <div class="linkedit"> {{ prev.title }} </div> 
    </NuxtLink>
    <div id="blank"> </div>
      | 
    <div id="blank"> </div>
    <NuxtLink v-if="next" :to="'/articles/'+ next.slug">
     <div class="linkedit"> {{ next.title }} </div> 
    </NuxtLink>
    </div>
  </article>
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
    const articles = await $content('articles', params.slug || 'index').fetch()
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
    return { articles, prev, next }
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
.tag{
  display: flex;
}

@media screen and (max-width: 768px) {
img {
  width: 100%;
  height: auto;
}
}

.tag_padding{
  padding-right: 8px;
}

.timestamp {
  color:rgb(105, 104, 104);
  font-size: 14px;
}

</style>
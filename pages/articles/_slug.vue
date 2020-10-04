<template>
<div class="container">
  <article>
    <div class="timestamp">
    {{articles.date | moment }}
    </div>
    <h3>{{articles.title}}</h3>
    
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
    <br><br>
  </article>
</div>
</template>

<script>
import moment from 'moment';
import Meta from '~/assets/mixins/meta'
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
  },
  mixins: [Meta],
}
</script>

<style>

.tag{
  display: flex;
}

img {
  padding: 10px;
  margin-bottom: 20px;

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

.nuxt-content code {
    color: #1a202c;
    font-weight: 400;
    font-size: .875em;
    background-color: #f7fafc;
    padding: .25rem;
    border-width: 1px;
    border-color: #edf2f7;
    border-radius: .25rem;
}

.nuxt-content pre code {
    background-color: transparent;
    border-width: 0;
    border-radius: 0;
    padding: 0;
    font-weight: 400;
    color: inherit;
    font-size: inherit;
    font-family: DM Mono;
    line-height: inherit;
}

</style>
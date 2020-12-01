<template>
<div class="container">
  <article>
    <div class="timestamp">
    {{articles.date | moment }}
    </div>
    <h3>{{articles.title}}</h3>
    
    <div class="tag">
      <div v-for="tag in articles.tags" :key="tag"> <nuxt-link :to="'/articles/tags/'+ tag">
          <b-badge variant="light">{{ tag }}</b-badge></nuxt-link> </div>
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
      .sortBy('date', 'asc')
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

.keyword{
  color: rgb(26, 27, 27);
}

img {
  padding: 10px;
  margin-bottom: 20px;
  max-width: 600px;

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
    background-color: #f1f4f7;
    padding: .25rem;
    border-width: 1px;
    border-color: #edf2f7;
    border-radius: .25rem;
}

.nuxt-content pre code {
    background-color: transparent;
    border-width: 0;
    border-radius: 0;
    font-weight: 400;
    color: inherit;
    font-size: inherit;
    white-space: pre;
    word-wrap: normal;
    line-height: inherit;
}

h1, .h1 {
    padding-top: 1em;
    padding-bottom: .2em;
    margin-bottom: 1.1rem;
    font-weight: bold; 
    font-size: 1.5em;
    position: relative;
    border-bottom: 1px solid rgba(92,147,187,.17);
}

h3, .h3 {
    padding-top: .2em;
    font-weight: bold; 
    font-size: 1.5em;
    position: relative;
}

pre[class*="language-"] {
	padding: 1em;
	margin: 0.5em 0em 1.5em 0;
	overflow: auto;
	border: 1px solid #dddddd;
  font-family: "Fira Code", Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: #999988;
	font-style: normal;
}

blockquote {
    position: relative;
    padding: 30px 15px 8px 15px;
    box-sizing: border-box;
    font-style: italic;
    background: #efefef;
    color: #555;
}

blockquote:before{
    display: inline-block;
    position: absolute;
    top: 13px;
    left: 15px;
    content: "“";
    font-family: FontAwesome;
    color: #cfcfcf;
    font-size: 28px;
    line-height: 1;
    font-weight: 900;
}

blockquote p {
    padding: 0;
    margin: 10px 0;
    line-height: 1.7;
}

blockquote cite {
    display: block;
    text-align: right;
    color: #888888;
    font-size: 0.9em;
}

ul {
  padding-left: 20px;
  margin-bottom: 30px;
}

li {
    padding-top: 5px;
}

</style>
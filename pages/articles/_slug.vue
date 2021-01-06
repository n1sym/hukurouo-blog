<template>
<div class="container">
  <article>
    <div class="timestamp">
      <Date :date="articles.date" />
    </div>
    <h4>{{articles.title}}</h4>

    <div class="tag">
      <div v-for="tag in articles.tags" :key="tag">
        <nuxt-link :to="'/articles/tag/'+ tag"><div class="tagsize">{{ tag }}</div></nuxt-link>
      </div>
    </div>
    <br>
    <div v-if="articles.toc_flg">
      
      目次
      <ul>
        <li class="mokuzi"
          v-for="link of articles.toc"
          :key="link.id"
          :class="{ 'toc2': link.depth === 2, 'toc3': link.depth === 3 }"
        >
        <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
      <br>
    </div>
    
    <nuxt-content :document="articles" />
    <div class="">
      <br><br>
        > next: <NuxtLink v-if="next" :to="'/articles/'+ next.slug">
      {{ next.title }}  
    </NuxtLink>

    <br><br>
       prev: <NuxtLink v-if="prev" :to="'/articles/'+ prev.slug">
     {{ prev.title }} 
    </NuxtLink>

    </div>
    <br><br>
  </article>
</div>
</template>

<script>
import Meta from '~/assets/mixins/meta'
export default {
  async asyncData ({ $content, params }) {
    const articles = await $content('articles', params.slug || 'index').fetch()
    //console.log(articles)
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
  margin-top:5px;
  display: flex;
}

.keyword{
  color: rgb(26, 27, 27);
}

img {
  padding: 10px;
  margin-bottom: 10px;
  max-width: 660px;
  max-height: 500px;

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

.footer_org{
  display: flex;
  margin: auto;
  justify-content: center;
}
figure{
  text-align:center;
  margin: 0px;
}
figcaption{color:grey;font:14px arial;margin-bottom:30px;}

h1, .h1 {
    padding-top: 1em;
    padding-bottom: .2em;
    margin-bottom: 1.1rem;
    font-weight: bold; 
    font-size: 1.5em;
    position: relative;
    border-bottom: 1px solid rgba(92,147,187,.17);
}

h2, .h2, h3, .h3 {
    padding-top: 1em;
    padding-bottom: .2em;
    margin-bottom: 1.1rem;
    font-weight: bold; 
    font-size: 1.5em;
    position: relative;
    border-bottom: 1px solid rgba(92,147,187,.17);
}

h4, .h4 {
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

img {
  border: 1px solid #f1f0f0;
}

pre {
    display: block;
    font-size: 87.5%;
    color: #212529;
}

.nuxt-content code {
    color: #1a202c;
    font-weight: 400;
    font-size: .875em;
    background-color: #f1f4f7;
    border-width: 1px;
    border-color: #edf2f7;
    border-radius: .25rem;
    padding: 3px 5px;
    margin: 0px 3px;
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
    padding: 0px;
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
    padding: 1px 15px;
    box-sizing: border-box;
    color: #777777;
    background-color: rgb(245, 245, 245);
    border-left: 3px solid #abacad;
}

ul {
  padding-left: 20px;
  line-height: 1.7;
}

li {
    margin: 7px 0px;
}



.mokuzi{
  margin: 4px 0px;
}
.toc3 {
  margin-left: 20px;
}

.bcard-wrapper{
    display: block;
    max-width: 500px;
    margin: 20px 0px;
    border-radius: 5px;
    padding: 0px;
    border: 1px solid #e0e0e0;
}
.bcard-site,.bcard-url{
    font-size: 12px;
    line-height: 1.3;
    overflow: hidden;
    max-height: 15px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
}
.bcard-header {
    position: relative;
    height: 30px;
    margin-bottom: 5px;
    display: block;
}
.withgfav{padding-left: 23px;}
.bcard-favicon {position: absolute;
    top: 0px; left:0px; width:16px; height:16px;}
.bcard-main{
    overflow: hidden;
    position: relative;
    display: block;
}
.withogimg{
    padding-right: 120px;
    
}
 .bcard-img {
width: 120px;
height: 100%; 
border-radius: 0 5px 5px 0;
position: absolute;
    top: 0;
    right: 0;
    background-size:cover;
    background-position:center center;
}
 .bcard-title{
    font-size: 17px;
    margin: 17px 15px 0 15px;
    line-height: 1.4;
    max-height: 47px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    font-weight: bold;
}
 .bcard-description {
    line-height: 1.5;
    font-size: 12px;
    color:#857f7f;
    margin: 7px 15px 17px 15px;
    max-height: 72px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
}
.bcard-wrapper a{color:#424242;}
.bcard-wrapper a:hover,.bcard-url a:hover,.bcard-site a:hover{text-decoration:none;}

</style>
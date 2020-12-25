<template>
  <div>
    <div v-for="n in articles" :key="n.slug" id="padding_bottom_10">
      <nuxt-link :to="'/articles/'+ n.slug"> <span class="linkedit"> {{n.title}} </span> </nuxt-link> 
      <br>
      
      <div class="display_flex">
        <div class="date_2"> 
          <Date :date="n.date"/>
        </div>
        <div v-for="tag in n.tags" :key="tag">
          
          <nuxt-link :to="'/articles/tag/'+ tag"><div class="tagsize">
          {{ tag }}</div></nuxt-link> 
          </div>
        
       
      </div>
      <div class="description_slug" v-if="n.description">{{n.description}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    articles: {
    },
  },
}
</script>

<style>
.date_2{
  color:rgb(92, 85, 85);
  font-size: 0.9rem;
  padding-top: 2px;
  white-space: nowrap;
}
.description_slug{
  color:rgb(92, 85, 85);
  font-size: 0.9rem;
  padding-top: 10px;
  padding-bottom: 10px;
}


</style>
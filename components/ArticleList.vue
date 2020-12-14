<template>
  <div>
    <div v-for="n in articles" :key="n.slug" id="padding_bottom_10">
      <nuxt-link :to="'/articles/'+ n.slug"> <a class="linkedit"> {{n.title}} </a> </nuxt-link> 
      <br>
      <div class="display_flex">
        <div class="date_2"> 
          <Date :date="n.date"/>
        </div>
        <div v-for="tag in n.tags" :key="tag">
          
          <nuxt-link :to="'/articles/tag/'+ tag"><div class="tagsize">
          <b-badge variant="light">{{ tag }}</b-badge></div></nuxt-link> 
          </div>
        
       
      </div>
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
}


</style>
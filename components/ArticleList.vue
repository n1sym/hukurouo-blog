<template>
  <div>
    <div v-for="n in articles" :key="n.slug" id="padding_bottom_10">
      <nuxt-link :to="'/articles/'+ n.slug"> <a class="linkedit"> {{n.title}} </a> </nuxt-link> 
      <br>
      <div class="display_flex">
        <div class="date_2"> 
          {{n.date | moment}} :
        </div>  <a id="blank_5"></a>
        <div v-for="tag in n.tags" :key="tag">
          <b-badge variant="light">{{ tag }}</b-badge><a id="blank_5"></a>
        </div>
       
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
  color:rgb(39, 39, 39);
  font-size: 1rem;
}

</style>
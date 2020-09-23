<template>
  <div>
    <div v-for="n in articles" :key="n.slug">
      {{n.date | moment}} :<a id="blank_5"> </a> <nuxt-link :to="'/articles/'+ n.slug"> <a class="linkedit"> {{n.title}} </a> </nuxt-link> 
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
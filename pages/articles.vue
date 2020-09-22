<template>
  <div class="container">
    <div v-for="(item) in contents" :key="item.id" >
      <div class="display_flex">
      {{ item.date }} :<div id="blank_10"> </div>
      <nuxt-link :to="`blog/${item.id}`"> <div class="linkedit">{{ item.title }}</div> </nuxt-link>  
      </div>
    </div>
    <br>

  </div>
</template>

<script>
import firebase from "@/plugins/firebase"
export default {
  data(){
    return {
      contents: [
      ],
    }
  },
  created() {
    var db = firebase.firestore();
      db.collection("contents").orderBy("created_at", "desc").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            this.contents.push({id: doc.id, title: doc.data().title, text: doc.data().text, date: doc.data().date})
        });
      });
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
.linkedit{
  text-decoration:underline;
}


</style>
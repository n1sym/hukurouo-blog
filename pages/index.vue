<template>
  <div class="container">
    ■ portal <br><br>
    <div>
      <a href="https://twitter.com/hukurouo" target="_blank">https://twitter.com/hukurouo</a>
    </div>

    <div>
      <a href="https://github.com/hukurouo" target="_blank">https://github.com/hukurouo</a>
    </div>

    <div>
      <a href="https://note.com/hukurouo" target="_blank">https://note.com/hukurouo</a>
    </div>

    <div>
      <a href="https://hukurouo.tumblr.com/" target="_blank">https://hukurouo.tumblr.com/</a>
    </div>


    <hr>

    <p>■ articles</p>

   

    <div v-for="(item) in contents" :key="item.id" >
      <nuxt-link :to="`blog/${item.id}`"> {{ item.title }} </nuxt-link>  
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
      db.collection("tests").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            console.log(`${doc.id} => ${doc.data().text}`);
            //this.text = doc.data().text
            this.contents.push({id: doc.id, title: doc.data().title, text: doc.data().text})
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
</style>
<template>
  <div class="container">
    <div v-for="(item) in contents" :key="item.id" >
     <div class="timestamp">{{ item.date }}</div>
    
    <h3> {{ item.title }} </h3>

    <div class="tag">
    <div v-for="(item) in item.tag" :key="item.id" >
      <div class="tag_padding">#{{item}}</div>
    </div>
    </div>
    <br>

    <div v-html="item.text_html"></div>
    <br>
    <br>
    </div>
    

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
      db.collection("contents").orderBy("created_at", "desc").limit(10).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            this.contents.push({id: doc.id, 
      tag: doc.data().tag,
      title: doc.data().title, 
      date: doc.data().date,
      created_at: doc.data().created_at.toDate(),
      text_html: doc.data().text_html})
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
.tag{
  display: flex;
}

.tag_padding{
  padding-right: 8px;
}



</style>
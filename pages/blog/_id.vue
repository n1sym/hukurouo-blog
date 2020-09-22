<template>
  <div class="container">
    <div class="timestamp">{{ created_at }}</div>
    
    <h3> {{ contents.title }} </h3>

    <div class="tag">
    <div v-for="(item) in contents.tag" :key="item.id" >
      <div class="tag_padding">#{{item}}</div>
    </div>
    </div>
    <br>



    <div v-html="contents.text_html"></div>
    
  </div>
  
</template>

<script>
import firebase from "@/plugins/firebase"
export default {
  data(){
    return {
      contents: {},
    }
  },
  computed: {
    created_at(){
      if (this.contents.created_at == null){return}
      var date = new Date(this.contents.created_at)
      var valid_date = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2)
      return valid_date
    }
  },

  
  created() {
    var db = firebase.firestore();
    var data = db.collection("contents").doc(this.$route.params.id).get().then(docSnapshot => { 
      var doc = docSnapshot
      this.contents = ({id: doc.id, 
      tag: doc.data().tag,
      title: doc.data().title, 
      created_at: doc.data().created_at.toDate(),
      text_html: doc.data().text_html})
    });
  }
}
</script>

<style>
.timestamp {
  color:rgb(105, 104, 104);
  font-size: 14px;
}
@media screen and (max-width: 768px) {
img {
  width: 100%;
  height: auto;
}
}

.tag{
  display: flex;
}

.tag_padding{
  padding-right: 8px;
}

</style>


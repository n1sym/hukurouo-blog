<template>
  <div class="container">
    <br>
    <h3> {{ contents.title }} </h3>
    <p>
      {{contents.text}}
    </p>
    
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
  
  created() {
    var db = firebase.firestore();
    var data = db.collection("tests").doc(this.$route.params.id).get().then(docSnapshot => { 
      var doc = docSnapshot
      this.contents = ({id: doc.id, title: doc.data().title, text: doc.data().text})
      });
  }
}
</script>

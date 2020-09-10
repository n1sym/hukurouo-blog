<template>
  <div class="container">
      hello
      <b-form-textarea 
      v-model="text" 
      rows="3"
      ></b-form-textarea>
  </div>
</template>

<script>
import firebase from "@/plugins/firebase"
export default {
  data(){
    return {
      text: ""
    }
  },
  
  created() {
    var db = firebase.firestore();
      db.collection("tests").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            console.log(`${doc.id} => ${doc.data().text}`);
            this.text = doc.data().text
        });
      });
  }
}
</script>

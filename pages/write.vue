<template>
  <div class="container">
      <b-form-input v-model="title" placeholder="title"></b-form-input><br>
      <b-form-input v-model="tag" placeholder="Enter tag"></b-form-input><br>

      <b-form-textarea 
      v-model="text" 
      rows="3"
      ></b-form-textarea>

      <br>
       <b-button variant="outline-primary" v-on:click="conv">Prev </b-button>
        <b-button variant="outline-primary" v-on:click="writeStore">store </b-button>

      <br>
      <br>
      title: {{ title }} tag: {{ tag }}
      <div v-html="result"></div>

  </div>

</template>

<script>
import firebase from "@/plugins/firebase"
export default {
  data(){
    return {
      text: "",
      result: "",
      title:"",
      tag:"",
    }
  },
  methods: {
   conv: function(){
     this.result = this.toHtml(this.text.split(/\n/g))
   },
   toHtml: function(arr){
     var tohtml = ""
     arr.forEach(element => {
       if (element.includes("https://firebasestorage")){
         tohtml += "<p><img src=\"" + element + "\" alt=\"\"></p>"
       }
       else if (element != ""){
         tohtml += "<p>" + element + "</p>"
       }
     });
     return tohtml
   },
   writeStore: function(){
    var db = firebase.firestore();
    var time = new Date
    var valid_date = time.getFullYear() + "-" + ("0" + (time.getMonth() + 1)).slice(-2) + "-" + ("0" + time.getDate()).slice(-2)
    db.collection("contents").add({
        title: this.title,
        text: this.text,
        text_html: this.result,
        tag: this.tag.split(","),
        created_at: time,
        updated_at: time,
        date: valid_date
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
   },
  },
}
</script>

<style>

@media screen and (max-width: 768px) {
img {
  width: 100%;
  height: auto;
}
}
</style>

import Vue from 'vue'
import firebase from "@/plugins/firebase"

Vue.mixin({
  methods: {
    read_data: function(){
      var db = firebase.firestore();
      db.collection("tests").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
    });
    },


    
  }
})
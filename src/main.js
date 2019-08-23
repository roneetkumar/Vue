import Vue from 'vue'
import firebase from "firebase/app";
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

let app = '';

const config = {
  apiKey: "AIzaSyD5xMdV3u8HMl-Ky6-dBHadwsliFXycY4A",
  authDomain: "vuejs-9e4f5.firebaseapp.com",
  databaseURL: "https://vuejs-9e4f5.firebaseio.com",
  projectId: "vuejs-9e4f5",
  storageBucket: "",
  messagingSenderId: "296064934086",
  appId: "1:296064934086:web:c734a76a76d28105"
};



firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      render: h => h(App),
      router,
      store
    }).$mount('#app')
  }
});



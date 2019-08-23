import Vue from 'vue'
import firebase from "firebase/app";
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

let app = '';

const config = {
  apiKey: "AIzaSyCaz2oF2wLxARhmBsw9XQh1OGZT3sUwVLI",
  authDomain: "myomnivox.firebaseapp.com",
  databaseURL: "https://myomnivox.firebaseio.com",
  projectId: "myomnivox",
  storageBucket: "",
  messagingSenderId: "535661388551",
  appId: "1:535661388551:web:b8416dead5e5b9ea"
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



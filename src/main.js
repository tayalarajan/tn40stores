import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from 'vuelidate';
import './assets/css/animate.css'
import './assets/css/bootstrap.min.css'
import './assets/css/font-awesome.min.css'
import './assets/css/main.css'
import './assets/css/prettyPhoto.css'
import './assets/css/price-range.css'
import './assets/css/responsive.css'
import firebase from "firebase/app";

Vue.use(Vuelidate)

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyB5lVPa5l-47qPCG0T69sQoJEINE_cMJmk",
  authDomain: "sdrstores-62f8f.firebaseapp.com",
  databaseURL: "https://sdrstores-62f8f.firebaseio.com",
  projectId: "sdrstores-62f8f",
  storageBucket: "sdrstores-62f8f.appspot.com",
  messagingSenderId: "491471820867",
  appId: "1:491471820867:web:33df7b158b0eb0f6e1dcf6",
  measurementId: "G-J63HSKD9TM"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

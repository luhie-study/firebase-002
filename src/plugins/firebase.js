import Vue from 'vue'
import * as firebase from 'firebase'
import * as firebaseui from 'firebaseui'
import firebaseConfig from '@/config/firebase.json'

firebase.initializeApp(firebaseConfig)

Vue.prototype.$firebase = firebase
Vue.prototype.$firebaseUI = firebaseui
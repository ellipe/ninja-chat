import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/firestore'

//web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBEpSFvqZiXQlR0f73vI-1gBxafLo23kyQ',
  authDomain: 'ninja-chat-179b5.firebaseapp.com',
  databaseURL: 'https://ninja-chat-179b5.firebaseio.com',
  projectId: 'ninja-chat-179b5',
  storageBucket: 'ninja-chat-179b5.appspot.com',
  messagingSenderId: '848167804846',
  appId: '1:848167804846:web:10fda049446dcc83d5b23f',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()

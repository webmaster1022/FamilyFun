import * as firebase from 'firebase';

const prodConfig = {
    apiKey: "AIzaSyAWwafZ7E9DwZAgngvKQ6v_pmVTc7Jujok",
    authDomain: "shopify0808.firebaseapp.com",
    databaseURL: "https://shopify0808.firebaseio.com",
    projectId: "shopify0808",
    storageBucket: "shopify0808.appspot.com",
    messagingSenderId: "245423717453"
  }



  const devConfig = {
    apiKey: "AIzaSyAWwafZ7E9DwZAgngvKQ6v_pmVTc7Jujok",
    authDomain: "shopify0808.firebaseapp.com",
    databaseURL: "https://shopify0808.firebaseio.com",
    projectId: "shopify0808",
    storageBucket: "shopify0808.appspot.com",
    messagingSenderId: "245423717453"
  }

  const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  
  const auth = firebase.auth();
  
  export {
    auth,
  };
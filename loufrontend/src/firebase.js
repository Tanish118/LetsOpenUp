import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyCamIdPXJ5caOzhVLBDldbJMYA9_SuUpJM",
    authDomain: "hang0ut.firebaseapp.com",
    projectId: "hang0ut",
    storageBucket: "hang0ut.appspot.com",
    messagingSenderId: "15812824835",
    appId: "1:15812824835:web:61c779c5e07f10787d6336"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  const storage=firebaseApp.storage();
  
  export {firebaseApp,auth,provider,storage};
  export default db;
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';


const firebaseApp = initializeApp({
  apiKey: "AIzaSyAnoUayhOQOSsn5DGroLmShYQkchLH5qw0",
  authDomain: "tiktok-clone-fd870.firebaseapp.com",
  projectId: "tiktok-clone-fd870",
  storageBucket: "tiktok-clone-fd870.appspot.com",
  messagingSenderId: "790015462535",
  appId: "1:790015462535:web:e04f90e70e79aca4887c22",
});


const db = getFirestore(firebaseApp);


export default db;

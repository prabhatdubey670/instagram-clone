// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: "AIzaSyAnoUayhOQOSsn5DGroLmShYQkchLH5qw0",
  authDomain: "tiktok-clone-fd870.firebaseapp.com",
  projectId: "tiktok-clone-fd870",
  storageBucket: "tiktok-clone-fd870.appspot.com",
  messagingSenderId: "790015462535",
  appId: "1:790015462535:web:e04f90e70e79aca4887c22",
  measurementId: "G-XZLR3RYB86"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
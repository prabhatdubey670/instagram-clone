import {initializeApp} from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAnoUayhOQOSsn5DGroLmShYQkchLH5qw0",
  authDomain: "tiktok-clone-fd870.firebaseapp.com",
  projectId: "tiktok-clone-fd870",
  storageBucket: "tiktok-clone-fd870.appspot.com",
  messagingSenderId: "790015462535",
  appId: "1:790015462535:web:e04f90e70e79aca4887c22",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const storage = getStorage(app);
export default {db, storage};


// export default db;

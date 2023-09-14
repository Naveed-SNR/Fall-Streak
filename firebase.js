// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import "firebase/auth";
import "firebase/firestore";
import { collection, getDocs, getFirestore, doc, onSnapshot} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };


const app = initializeApp(firebaseConfig);

const db = getFirestore()
const colRef = collection(db, 'Packages')

export {db, colRef}
// getDocs(colRef)
//   .then((snapshot) => {
//     let packages = []
//     snapshot.docs.forEach((doc) => {
//       packages.push({...doc.data(), id: doc.id})
//     })
//     console.log(packages)
//   })
//   .catch(err => {
//     console.error('Error getting documents', err);
//   })

  // onSnapshot(colRef, (snapshot)) => {
    
  // }


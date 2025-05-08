import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCNdydbXC9OQGQ_4O6VfRCaBCpiL7jqAoc",
  authDomain: "anime-tracker-6a427.firebaseapp.com",
  projectId: "anime-tracker-6a427",
  storageBucket: "anime-tracker-6a427.firebasestorage.app",
  messagingSenderId: "418515259728",
  appId: "1:418515259728:web:987cd479cf61d8eaec5c55"
};
 
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth } 
import { initializeApp } from "firebase/app";

const firebaseConfig = {
//   apiKey:import.meta.env.VITE_apiKey,
//   authDomain:import.meta.env.VITE_authDomain,
//   projectId:import.meta.env.VITE_projectId,
//   storageBucket:import.meta.env.VITE_storageBucket,
//   messagingSenderId:import.meta.env.VITE_messagingSenderId,
//   appId:import.meta.env.VITE_appId,

apiKey: "AIzaSyBOdEkuUnm7mjq-B6vMkUnQgH2BXoyhPBU",
  authDomain: "furniture-ecommerce-a923d.firebaseapp.com",
  projectId: "furniture-ecommerce-a923d",
  storageBucket: "furniture-ecommerce-a923d.appspot.com",
  messagingSenderId: "158902068912",
  appId: "1:158902068912:web:df691f452aa69aa3433d75"
};

// Initialize Firebase
export const authApp = initializeApp(firebaseConfig);
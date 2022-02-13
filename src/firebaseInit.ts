import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfigProd = {
  apiKey: 'AIzaSyDejuFGuGRiJxuaWbEGCtW4q-5q607qrsU',
  authDomain: 'find-different-color-prod.firebaseapp.com',
  projectId: 'find-different-color-prod',
  storageBucket: 'find-different-color-prod.appspot.com',
  messagingSenderId: '70454444568',
  appId: '1:70454444568:web:af2cac811620b43841b96d',
  measurementId: 'G-V0SQGCSYCL',
};

const firebaseConfigDev = {
  apiKey: 'AIzaSyCLRmh9ltvRkom5KhdiqdDA476OQJD3jXQ',
  authDomain: 'find-different-color-dev-a4990.firebaseapp.com',
  projectId: 'find-different-color-dev-a4990',
  storageBucket: 'find-different-color-dev-a4990.appspot.com',
  messagingSenderId: '873766327160',
  appId: '1:873766327160:web:4d26bb65de18f8ba50ae8d',
};

const config = process.env.NODE_ENV !== 'development' ? firebaseConfigDev : firebaseConfigProd;

initializeApp(config);
const firestore = getFirestore();

export default firestore;

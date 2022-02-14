/* eslint-disable @typescript-eslint/no-unused-vars */
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfigProd = {
  apiKey: process.env.REACT_APP_PROD_API_KEY,
  authDomain: process.env.REACT_APP_PROD_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROD_PROJECT_ID,
  storageBucket: process.env.REACT_APP_PROD_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_PROD_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_PROD_APP_ID,
  measurementId: process.env.REACT_APP_PROD_MEASUREMENT_ID,
};

const firebaseConfigDev = {
  apiKey: process.env.REACT_APP_DEV_API_KEY,
  authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_DEV_PROJECT_ID,
  storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_DEV_APP_ID,
};

const firebaseConfigTemp = {
  apiKey: process.env.REACT_APP_TEMP_API_KEY,
  authDomain: process.env.REACT_APP_TEMP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_TEMP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_TEMP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_TEMP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_TEMP_APP_ID,
};

// const config = process.env.NODE_ENV === 'development' ? firebaseConfigDev : firebaseConfigProd;
const config = firebaseConfigTemp;

// initializeApp(config);
initializeApp(config);
const firestore = getFirestore();

export default firestore;

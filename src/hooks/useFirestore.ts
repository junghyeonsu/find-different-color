import { useCallback } from 'react';
import { collection, addDoc } from 'firebase/firestore';

import firestore from '../firebaseInit';
import store from '../utils/store';
import { USERS_COLLECTION, USER_NAME } from '../constants';

export interface FirestoreHookProps {
  addRecordInStore: (stage: number, point: number) => void;
}

function useFirestore(): FirestoreHookProps {
  const addRecordInStore = useCallback(async (stage: number, point: number) => {
    try {
      await addDoc(collection(firestore, USERS_COLLECTION), {
        userName: store.getSessionStorage(USER_NAME),
        stage,
        point,
      });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('Error adding document: ', e);
    }
  }, []);

  return { addRecordInStore };
}

export default useFirestore;

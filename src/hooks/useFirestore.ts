import { useCallback } from 'react';
import { collection, addDoc } from 'firebase/firestore';

import firestore from '../firebaseInit';
import store from '../utils/store';

export interface FirestoreHookProps {
  addRecordInStore: (stage: number, point: number) => void;
}

function useFirestore(): FirestoreHookProps {
  const addRecordInStore = useCallback(async (stage: number, point: number) => {
    try {
      await addDoc(collection(firestore, 'users'), {
        userName: store.getSessionStorage('userName'),
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

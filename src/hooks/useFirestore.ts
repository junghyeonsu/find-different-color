import { useCallback } from 'react';
import {
  query,
  orderBy,
  getDocs,
  collection,
  limit,
  addDoc,
  DocumentData,
} from 'firebase/firestore';

import firestore from '../firebaseInit';
import store from '../utils/store';
import { USERS_COLLECTION, USER_NAME } from '../constants';

export interface UsersRecordProps {
  userName: string;
  stage: number;
  point: number;
  time: Date;
}

export interface FirestoreHookProps {
  addRecordInStore: (stage: number, point: number) => void;
  getRecordsInStore: () => Promise<UsersRecordProps[] | DocumentData[]>;
}

function useFirestore(): FirestoreHookProps {
  const addRecordInStore = async (stage: number, point: number) => {
    try {
      await addDoc(collection(firestore, USERS_COLLECTION), {
        userName: store.getSessionStorage(USER_NAME),
        stage,
        point,
        time: new Date(),
      });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('Error adding document: ', e);
    }
  };

  const getRecordsInStore = async (): Promise<UsersRecordProps[] | DocumentData[]> => {
    const querySnapshot = await getDocs(
      query(
        collection(firestore, USERS_COLLECTION),
        orderBy('stage', 'desc'),
        orderBy('point', 'desc'),
        limit(100),
      ),
    );

    return querySnapshot.docs.map(doc => doc.data());
  };

  return { addRecordInStore, getRecordsInStore };
}

export default useFirestore;

import { useCallback } from 'react';
import {
  query,
  orderBy,
  getDocs,
  collection,
  limit,
  addDoc,
  QuerySnapshot,
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
  getRecordsInStore: () => Promise<QuerySnapshot<DocumentData>>;
}

function useFirestore(): FirestoreHookProps {
  const usersRef = collection(firestore, USERS_COLLECTION);

  const addRecordInStore = useCallback(
    async (stage: number, point: number) => {
      try {
        await addDoc(usersRef, {
          userName: store.getSessionStorage(USER_NAME),
          stage,
          point,
          time: new Date(),
        });
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('Error adding document: ', e);
      }
    },
    [usersRef],
  );

  const getRecordsInStore = useCallback(async (): Promise<QuerySnapshot<DocumentData>> => {
    const querySnapshot = query(
      usersRef,
      orderBy('stage', 'desc'),
      orderBy('point', 'desc'),
      limit(100),
    );
    const documentSnapshots = await getDocs(querySnapshot);
    return documentSnapshots;
  }, [usersRef]);

  return { addRecordInStore, getRecordsInStore };
}

export default useFirestore;

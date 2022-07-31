import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signInWithPopup, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
    NextOrObserver,
    User 
} from 'firebase/auth';

import { getFirestore, 
    doc, 
    getDoc, 
    setDoc, 
    collection, 
    writeBatch, 
    query, 
    getDocs,
    QueryDocumentSnapshot
} from 'firebase/firestore';

import { Category } from '../../store/categories/category.types';

const firebaseConfig = {
    apiKey: "AIzaSyAxby0grEUPvvizxTp5xoY6_wZKyFnK_Nc",
    authDomain: "crwn-clothing-db-f6d4a.firebaseapp.com",
    projectId: "crwn-clothing-db-f6d4a",
    storageBucket: "crwn-clothing-db-f6d4a.appspot.com",
    messagingSenderId: "685635779595",
    appId: "1:685635779595:web:4a79d9885b2aa07f575b0e"
};
  
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {return signInWithPopup(auth, provider);}

export const db = getFirestore();

export type ObjectToAdd = {
    title: string;
}

export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
    collectionKey: string,
    objectsToAdd: T[],
    ): Promise<void> => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log('DONE');
};



export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(
        (docSnapshot) => docSnapshot.data() as Category
    );
};

export type AdditionalInformation = {
    displayName?: string;
}

export type UserData = {
    createdAt: Date;
    displayName: string;
    email: string;
}

export const createUserDocumentFromAuth = async (
        userAuth: User, 
        additionalInformation = {} as AdditionalInformation
    ): Promise<void | QueryDocumentSnapshot<UserData>> => {
        if (!userAuth) return;

        const userDocRef = doc(db, 'users', userAuth.uid)


        const userSnapshot = await getDoc(userDocRef);

        if (!userSnapshot.exists()) {
            const { displayName, email } = userAuth;
            const createdAt = new Date();

            try {
                await setDoc(userDocRef, {
                    displayName,
                    email,
                    createdAt,
                    ...additionalInformation
                });
            } catch (error) {
                console.log('error creating the user', error);
            }
        }

        return userSnapshot as QueryDocumentSnapshot<UserData>;
};

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => onAuthStateChanged(auth, callback);

export const getCurrentUser = (): Promise<User | null> => {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
            auth, 
            (userAuth) => {
                unsubscribe();
                resolve(userAuth);
            },
            reject
        )
    })
}

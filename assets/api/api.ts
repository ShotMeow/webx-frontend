import { initializeApp } from "@firebase/app";
import { collection, getDocs, getFirestore } from "@firebase/firestore";
import { ITest } from "../types/api.types";

initializeApp({
    apiKey: "AIzaSyAPvRMauejBnIZH2nfompU_jArlw8FP3Mg",
    authDomain: "webx-2be51.firebaseapp.com",
    projectId: "webx-2be51",
    storageBucket: "webx-2be51.appspot.com",
    messagingSenderId: "242431155157",
    appId: "1:242431155157:web:2f64900161bac96f357b5c",
    measurementId: "G-N1H1P2T9FR",
});

export const getTestsCollections = async (): Promise<ITest[]> => {
    const db = getFirestore();

    const tests: ITest[] = [];

    try {
        const querySnapshot = await getDocs(collection(db, "tests"));

        querySnapshot.forEach((doc) => {
            const data = doc.data() as Omit<ITest, "id">;

            tests.push({
                id: doc.id,
                ...data,
            });
        });
    } catch (error) {
        return Promise.reject(error);
    }

    return tests;
};

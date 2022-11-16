import { initializeApp } from "firebase/app";
import {
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore,
} from "@firebase/firestore";
import { IQuestion, ITest } from "../types/api.types";

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

export const getTestCollectionById = async (id: string): Promise<ITest> => {
    const db = getFirestore();

    let test: ITest | null = null;

    try {
        const docRef = doc(db, "tests", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data() as Omit<ITest, "id">;
            test = {
                id: docSnap.id,
                ...data,
            };
        } else {
            return Promise.reject("Тест не найден");
        }
    } catch (error) {
        return Promise.reject(error);
    }

    return test;
};

export const getQuestionCollectionsFromTestCollection = async (
    id: string
): Promise<IQuestion[]> => {
    const db = getFirestore();

    const questions: IQuestion[] = [];

    try {
        const querySnapshot = await getDocs(
            collection(doc(db, "tests", id), "questions")
        );

        querySnapshot.forEach((doc) => {
            const data = doc.data() as Omit<IQuestion, "id">;

            questions.push({
                id: doc.id,
                ...data,
            });
        });
    } catch (error) {
        return Promise.reject(error);
    }

    return questions;
};

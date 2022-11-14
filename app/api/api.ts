import { initializeApp } from "firebase/app";
import {
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore,
} from "@firebase/firestore";
import {ICourse, ITest} from "../types/api.types";

initializeApp({
    apiKey: "AIzaSyAPvRMauejBnIZH2nfompU_jArlw8FP3Mg",
    authDomain: "webx-2be51.firebaseapp.com",
    projectId: "webx-2be51",
    storageBucket: "webx-2be51.appspot.com",
    messagingSenderId: "242431155157",
    appId: "1:242431155157:web:2f64900161bac96f357b5c",
    measurementId: "G-N1H1P2T9FR",
});

export const getTests = async (): Promise<ITest[]> => {
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

export const getTestById = async (id: string): Promise<ITest> => {
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

export const getCourses = async (): Promise<ICourse[]> => {
    const db = getFirestore();

    const courses: ICourse[] = [];

    try {
        const querySnapshot = await getDocs(collection(db, "courses"));

        querySnapshot.forEach((doc) => {
            const data = doc.data() as Omit<ICourse, "id">;

            courses.push({
                id: doc.id,
                ...data,
            });
        });
    } catch (error) {
        return Promise.reject(error);
    }

    return courses;
};

export const getCourseById = async (id: string): Promise<ICourse> => {
    const db = getFirestore();

    let course: ICourse | null = null;

    try {
        const docRef = doc(db, "courses", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data() as Omit<ICourse, "id">;
            course = {
                id: docSnap.id,
                ...data,
            };
        } else {
            return Promise.reject("Курс не найден");
        }
    } catch (error) {
        return Promise.reject(error);
    }

    return course;
};
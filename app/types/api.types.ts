export interface ITest {
    id: string;
    title: string;
    image: string;
    description: string;
    author: string;
    difficulty: string;
    category: string;
}
<<<<<<< HEAD
=======

export interface IQuestion {
    id: string;
    question: string;
    option: string[];
    correct_index: number;
}

export interface ICourse {
    id: string;
    title: string;
    image: string;
    description: string;
    developer: string;
    difficulty: string;
    rating: number;
    category: string;
    info: {
        about: string;
        content: string[];
        require: string;
    }
}
>>>>>>> a58668ef10c8025c9a506bcad0b7a011075a1f94

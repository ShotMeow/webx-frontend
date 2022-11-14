export interface ITest {
    id: string;
    title: string;
    image: string;
    description: string;
    developer: string;
    difficulty: string;
    rating: number;
    category: string;
}

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
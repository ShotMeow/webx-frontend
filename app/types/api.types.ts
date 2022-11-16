export interface ITest {
    id: string;
    title: string;
    image: string;
    description: string;
    author: string;
    difficulty: string;
    category: string;
}

export interface IQuestion {
    id: string;
    name: string;
    variants: string[];
    current: number;
}

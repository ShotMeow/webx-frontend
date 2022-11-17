import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { IQuestion, ITest } from "../../../../app/types/api.types";
import { getIdHelper } from "../../../../app/helpers/getIdHelper";
import {
    getQuestionCollectionsFromTestCollection,
    getTestCollectionById,
} from "../../../../app/api/api";
import Head from "next/head";
import Solution from "../../../../app/pages/Solution/Solution";
import { arrayShuffleHelper } from "../../../../app/helpers/arrayShuffleHelper";

const SolutionPage: NextPage = () => {
    const [questions, setQuestions] = useState<IQuestion[]>([]);
    const [test, setTest] = useState<ITest | null>(null);

    useEffect(() => {
        const id = getIdHelper();

        getQuestionCollectionsFromTestCollection(id).then(setQuestions);
        getTestCollectionById(id).then(setTest);
    }, []);

    return (
        <>
            {questions && test && (
                <>
                    <Head>
                        <title>WebX - {test.title}</title>
                    </Head>
                    <Solution
                        title={test.title}
                        questions={arrayShuffleHelper(questions).slice(0, 5)}
                    />
                </>
            )}
        </>
    );
};

export default SolutionPage;

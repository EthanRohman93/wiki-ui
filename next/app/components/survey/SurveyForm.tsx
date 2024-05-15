'use client'
import React, { useState, FormEvent } from 'react';
import Question from './Question';
import SurveySubmit from './SurveySubmit';
import { useRouter } from 'next/navigation';

interface QuestionData {
  questionText: string;
  name: string;
}

const SurveyForm = () => {
const router = useRouter();
    const questions: QuestionData[] = [
        { questionText: "What are your thoughts on the color scheme of the website?", name: "color_scheme" },
        { questionText: "How do you find the layout and organization of the website?", name: "layout_organization" },
        { questionText: "How would you rate the execution and performance of the website?", name: "execution_performance" },
        { questionText: "What is your experience with the interactivity of the website?", name: "website_interactivity" },
        { questionText: "Did you experience any confusion while navigating our website?", name: "navigation_confusion" },
    ];
    
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());

        fetch('http://18.220.173.252/submit_form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then(data => {
            console.log('Success:', data);
            router.push('/thankyou');
            setIsSubmitting(false);
        }).catch((error: any) => {
            console.error('Error:', error);
            setError(error.message);
            setIsSubmitting(false);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            {questions.map((question, index) => (
                <Question
                    key={index}
                    questionText={question.questionText}
                    name={question.name}
                />
            ))}
            <SurveySubmit />
            {isSubmitting && <p>Submitting...</p>}
            {error && <p>Error: {error}</p>}
        </form>
    );
};

export default SurveyForm;

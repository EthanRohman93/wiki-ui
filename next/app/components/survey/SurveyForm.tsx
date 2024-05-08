'use client'
import React, { useRef,useState, FormEvent } from 'react';
import Question from './Question';
import SurveySubmit from './SurveySubmit';
import { useRouter } from 'next/navigation';

const SurveyForm = () => {
    const router = useRouter()
    const questions = [
        { questionText: "What are your thoughts on the color scheme of our website?", name: "color_scheme" },
        { questionText: "How do you find the layout and organization of our website?", name: "layout_organization" },
        { questionText: "How would you rate the execution and performance of our website?", name: "execution_performance" },
        { questionText: "What is your experience with the interactivity of our website?", name: "website_interactivity" },
        { questionText: "Did you experience any confusion while navigating our website?", name: "navigation_confusion" },
        { questionText: "How likely are you to recommend our website to others based on its usability?", name: "usability_recommendation" }
    ];
    
    const refs = questions.map(() => useRef<HTMLSelectElement>(null));

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(event.currentTarget); // Use currentTarget to ensure you're working with the form element
        const data = Object.fromEntries(formData.entries());

        fetch('/api/submit_form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => {
            if (!response.ok) {
                router.push('/thankyou')
                throw new Error('Network response was not ok');
            }
            router.push('/thankyou')
            return response.json();
        }).then(data => {
            console.log('Success:', data);
            router.push('/thankyou')
            setIsSubmitting(false);
        }).catch((error) => {
            console.error('Error:', error);
            router.push('/thankyou')
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
                    refProp={refs[index]}
                />
            ))}

            <SurveySubmit /> {/* Ensure this button component handles form submission correctly */}
            {isSubmitting && <p>Submitting...</p>}
            {error && <p>Error: {error}</p>}
        </form>
    );
};

export default SurveyForm;

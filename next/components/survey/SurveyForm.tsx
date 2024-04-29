'use client'
import React, { useState, FormEvent } from 'react';
import Question from './Question';
import SurveyButton from './SurveyButton';

const SurveyForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        
        fetch('/api/submit_form', {
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
            setIsSubmitting(false);
            // Optionally reset form or redirect user
        }).catch((error) => {
            console.error('Error:', error);
            setError(error.message);
            setIsSubmitting(false);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Question 
                questionText=''
                name=''
            />
            <Question 
                questionText=''
                name=''
            />
            <Question 
                questionText=''
                name=''
            />
            <Question 
                questionText=''
                name=''
            />
            <Question 
                questionText=''
                name=''
            />
            <Question 
                questionText=''
                name=''
            />
            <Question 
                questionText=''
                name=''
            />
            <Question 
                questionText=''
                name=''
            />
            <Question 
                questionText=''
                name=''
            />
            <Question 
                questionText=''
                name=''
            />

            <SurveyButton />
            {isSubmitting && <p>Submitting...</p>}
            {error && <p>Error: {error}</p>}
        </form>
    );
};

export default SurveyForm;


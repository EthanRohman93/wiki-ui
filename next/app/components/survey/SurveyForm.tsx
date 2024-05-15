'use client'
import React, { useState, FormEvent, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { MyGlobalStateContext } from '../GlobalState';


interface QuestionData {
  questionText: string;
  name: string;
}

interface FormDataMap {
  [key: string]: number;
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

  const [formData, setFormData] = useState<FormDataMap>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { username } = useContext(MyGlobalStateContext);

  const handleRadioChange = (name: string, value: string) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: parseInt(value)
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    // Check if all questions have been answered
    if (Object.keys(formData).length !== questions.length) {
      setError("Please answer all questions.");
      setIsSubmitting(false);
      return;
    }

    console.log('Form Data:', formData); // Log form data to ensure it's being populated correctly
    const dataToSubmit = { ...formData, username };
    fetch('http://18.220.173.252/submit-form/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSubmit),
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
        <div key={index} className='flex flex-col px-2 py-4'>
          <label className='text-lg'>{question.questionText}</label>
          <div className='flex flex-row justify-center'>
            {[1, 2, 3, 4].map(value => (
              <div key={value} className='flex flex-col px-10 py-2 items-center'>
                <input
                  type="radio"
                  id={`${question.name}-${value}`}
                  name={question.name}
                  value={String(value)}
                  className='h-5 w-5'
                  onChange={(e) => handleRadioChange(question.name, e.target.value)}
                />
                <label htmlFor={`${question.name}-${value}`}>{value === 1 ? 'Poor' : value === 2 ? 'Fair' : value === 3 ? 'Good' : 'Excellent'}</label>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button type="submit" className='border-2 p-2 rounded-xl hover:font-extrabold'>Submit Feedback</button>
      {isSubmitting && <p>Submitting...</p>}
      {error && <p>Error: {error}</p>}
    </form>
  );
};
export default SurveyForm;


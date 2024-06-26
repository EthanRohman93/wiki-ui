'use client'
import React from 'react';
import SurveyForm from '../components/survey/SurveyForm';

const SurveyPage = () => {
  return (
        <div className="home-color-scheme min-h-screen flex flex-col items-center p-4">
            <div className="max-w-4xl home-border-style w-full flex flex-col items-center rounded-xl">
                <h1 className="text-2xl font-bold mb-4 text-center home-border-style rounded-xl m-10">User Experience Survey</h1>
                <SurveyForm />
            </div>
        </div>
  );
};

export default SurveyPage;


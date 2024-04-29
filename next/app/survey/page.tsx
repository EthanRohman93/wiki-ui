'use client'
import React from 'react';
import SurveyForm from '@/components/survey/SurveyForm';

const SurveyPage = () => {
  return (
      <div className="safe-top rounded-border p-4">
        <h1 className="mb-4">Survey Page</h1>
        <SurveyForm />
      </div>
  );
};

export default SurveyPage;


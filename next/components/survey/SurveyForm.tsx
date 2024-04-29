'use client'
import React from 'react';
import Question from './Question';
import SurveyButton from './SurveyButton';

const SurveyForm = () => {
    return (
        <div>
            <Question />
            <Question />
            <SurveyButton />
        </div>
    );
};

export default SurveyForm;

'use client'
import React from 'react';

interface Props {
    questionText: string;
    name: string;
}

const Question = ({ questionText, name }: Props) => {
    return (
        <div>
            <label>{questionText}</label>
            <select name={name}>
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Good</option>
                <option value="4">4 - Excellent</option>
            </select>
        </div>
    );
};

export default Question;


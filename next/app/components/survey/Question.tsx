'use client'
import React from 'react';

interface Props {
    questionText: string;
    name: string;
}

const Question = ({ questionText, name }: Props) => {
    return (
        <div className='flex flex-col px-2 py-4'>
            <label className='text-lg'>{questionText}</label>
            <div className='flex flex-row justify-center'>
                <div className='flex flex-col px-10 py-2 items-center'>
                    <input type="radio" id={`${name}-1`} name={name} value="1" className='h-5 w-5'/>
                    <label htmlFor={`${name}-1`}>Poor</label>
                </div>

                <div className='flex flex-col px-10 py-2 items-center'>
                    <input type="radio" id={`${name}-2`} name={name} value="2" className='h-5 w-5'/>
                    <label htmlFor={`${name}-2`}>Fair</label>
                </div>

                <div className='flex flex-col px-10 py-2 items-center'>
                    <input type="radio" id={`${name}-3`} name={name} value="3" className='h-5 w-5'/>
                    <label htmlFor={`${name}-3`}>Good</label>
                </div>
                
                <div className='flex flex-col px-10 py-2 items-center'>
                    <input type="radio" id={`${name}-4`} name={name} value="4" className='h-5 w-5'/>
                    <label htmlFor={`${name}-4`}>Excellent</label>
                </div>
            </div>
        </div>
    );
};

export default Question;


'use client'
import React from 'react';
import EnhancedOutput from './EnhancedOutput';

interface Props {
    results: string[];
}

const EnhancedResults = ({ results }: Props) => {
    return (
        <div className='flex-1'>
            <div className=''>
                {results && results.map((result, index) => (
                    <EnhancedOutput key={index} result={result} />
                ))}
            </div>
        </div>
    );
};

export default EnhancedResults;

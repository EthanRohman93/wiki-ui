import React from 'react';
import SurveyButton from '../enhanced/SurveyButton';
import Link from 'next/link';

const ClassicFooter = async () => {
    return (
        <div className="justify-center text-center p-4">
            <Link href={'/topics'} className='
                hover:font-extrabold font-medium 
                rounded-xl p-2 m-2 border-2'
            > Go to Topics</Link>
            <SurveyButton />
        </div>
    );
};

export default ClassicFooter;

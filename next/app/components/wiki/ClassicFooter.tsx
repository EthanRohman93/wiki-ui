import React from 'react';
import SurveyButton from '../enhanced/SurveyButton';
import Link from 'next/link';

const ClassicFooter = async () => {
    return (
        <div className="wiki-color-scheme justify-center border-t text-center p-4 flex w-full">
            <Link href={'/wiki'} className='
                hover:font-extrabold font-medium 
                rounded-xl p-2 m-2 border-2'
            > Go to Topics</Link>
            <SurveyButton />
        </div>
    );
};

export default ClassicFooter;

'use client'
import React from 'react';
import Link from 'next/link';

const SurveyButton = () => {
  return (
    <Link href="/survey" passHref className='hover:font-extrabold font-medium 
            rounded-xl p-2 m-2 border-2'>
      <button type="button" >Go to Survey</button>
    </Link>
  );
};

export default SurveyButton;

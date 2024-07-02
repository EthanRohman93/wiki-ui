'use client'
import React from 'react';
import Link from 'next/link';

const EnhancedHome = () => {
  return (
      <div className="home-color-scheme min-h-screen max-h-screen flex flex-col">
        <h1 className="mb-4 home-title m-2 p-2 border-2 rounded-xl w-fit"> Enhanced Wiki Landing Page</h1>
        <Link href={'/enhanced-wiki/jordan/'}
          className='text-lg home-heading m-2 p-2 border-2 rounded-xl w-fit hover:font-bold'
        >Michael Jordan Wiki</Link>
        <Link href={'/enhanced-wiki/amazon/'}
          className='text-lg home-heading m-2 p-2 border-2 rounded-xl w-fit hover:font-bold'
        >Amazon Rain Forrest Wiki</Link>
        <Link href={'/enhanced-wiki/curie/'}
          className='text-lg home-heading m-2 p-2 border-2 rounded-xl w-fit hover:font-bold'
        >Marie Curie Wiki</Link>
        <Link href={'/enhanced-wiki/egypt/'}
          className='text-lg home-heading m-2 p-2 border-2 rounded-xl w-fit hover:font-bold'
        >Ancient Egypt Wiki</Link>
        <Link href={'/enhanced-wiki/internet/'}
          className='text-lg home-heading m-2 p-2 border-2 rounded-xl w-fit hover:font-bold'
        >Internet Wiki</Link>
        <Link href={'/enhanced-wiki/shakespeare/'}
          className='text-lg home-heading m-2 p-2 border-2 rounded-xl w-fit hover:font-bold'
        >William Shakespeare Wiki</Link>
        <Link href={'/enhanced-wiki/socrates/'}
          className='text-lg home-heading m-2 p-2 border-2 rounded-xl w-fit hover:font-bold'
        >Socrates Wiki</Link>
        <Link href={'/enhanced-wiki/swift/'}
          className='text-lg home-heading m-2 p-2 border-2 rounded-xl w-fit hover:font-bold'
        >Taylor Swift Wiki</Link>
        <Link href={'/enhanced-wiki/tubman/'}
          className='text-lg home-heading m-2 p-2 border-2 rounded-xl w-fit hover:font-bold'
        >Hariet Tubman Wiki</Link>
        <Link href={'/enhanced-wiki/youyou/'}
          className='text-lg home-heading m-2 p-2 border-2 rounded-xl w-fit hover:font-bold'
        >Tu Youyou Wiki</Link>
      </div>
  );
};

export default EnhancedHome;

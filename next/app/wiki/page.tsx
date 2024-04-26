import React from 'react';
import Link from 'next/link';
import GlobalStateLogger from '@/components/GlobalStateLogger';


const WikiPage = () => {
  return (
    <div className='wiki-color-scheme'>
      <GlobalStateLogger />
      <div className="p-4">
        <h1 className="mb-4">Wiki Landing Page</h1>
        <Link href={'/wiki/michael/'}>Michael Jordan Wiki</Link>
      </div>
    </div>
  );
};

export default WikiPage;

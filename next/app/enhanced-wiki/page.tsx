'use client'
import React from 'react';
import Link from 'next/link';

const EnhancedHome = () => {
  return (
      <div className="enhanced-color-scheme">
        <h1 className="mb-4"> Enhanced Wiki Landing Page</h1>
        <Link href={'/enhanced-wiki/michael/'}>Michael Jordan Wiki</Link>
      </div>
  );
};

export default EnhancedHome;

'use client'
import React from 'react';
import Link from 'next/link';

const EnhancedHome = () => {
  return (
      <div className="safe-top rounded-border p-4">
        <h1 className="mb-4"> Enhanced Wiki Landing Page</h1>
        <Link href={'/enhanced-wiki/michael/'}>Michael Jordan Wiki</Link>
      </div>
  );
};

export default EnhancedHome;

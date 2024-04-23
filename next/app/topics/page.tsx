'use client'
import React from 'react';
import Link from 'next/link';

const TopicsPage = () => {
  return (
      <div className="safe-top rounded-border p-4">
        <h1 className="mb-4">Topics Page</h1>
        <ol>
            <li>
                <Link className="hover:font-bold hover:text-current" href='/wiki/'>
                Basic Wiki
                </Link>
            </li>
            <li>
                <Link className="hover:font-bold hover:text-current" href='/enhanced-wiki/'>
                    Enhanced Wiki
                </Link>
            </li>
        </ol>
      </div>
  );
};

export default TopicsPage;


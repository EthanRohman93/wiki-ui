import React from 'react';
import Link from 'next/link';
import GlobalStateLogger from '@/components/GlobalStateLogger';
import InteractionTracker from '@/components/InteractionTracker';

const TopicsPage = () => {
  return (
    <div className='home-color-scheme'>
        <GlobalStateLogger />
        <InteractionTracker />
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


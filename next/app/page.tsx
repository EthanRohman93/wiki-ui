import React from 'react';
import Layout from './layout';
import Link from 'next/link';

const MainPage = () => {
  return (
    <Layout>
      <div className="safe-top rounded-border p-4">
        <h1 className="mb-4">Main Page</h1>
        <Link className="hover:font-bold hover:text-current" href='/topics/'>
            Topics
        </Link>
      </div>
    </Layout>
  );
};

export default MainPage;


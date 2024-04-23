import React from 'react';
import Layout from './layout';
import Link from 'next/link';

const MainPage = () => {
  return (
    <Layout>
      <div className="safe-top rounded-border p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to Our User Experience Research</h1>
        <p className="mb-4">
          Thank you for visiting! We are excited to have you participate in our study,
          which aims to explore different layouts and styles to enhance user experience,
          functionality, and the effective transfer of information.
        </p>
        <p className="mb-4">
          By entering a username below, you will be randomly assigned to one of our
          experimental layouts. You can exit the experience at any time. Once completed,
          we kindly ask you to fill out a short survey, taking less than a minute, to
          gather your impressions. Your feedback is invaluable, and afterward,
          you will have the opportunity to explore other designs.
        </p>
        <p className="mb-4">
          Please note that your interactions with the site will be anonymously recorded
          to help improve future user experiences. Rest assured, no personal data
          beyond your site usage will be collected.
        </p>
        <div className="mb-4">
          <Link className="hover:font-bold hover:text-current" href="/username-entry">
            Enter Username
          </Link>
        </div>
        <div className="mb-4">
          <Link className="hover:font-bold hover:text-current" href="/topics/">
            Explore Topics
          </Link>
        </div>
        <p className="mb-4">
          For more details on the infrastructure and design principles of this research,
          please visit my portfolio http://ethanrohman.com.
        </p>
      </div>
    </Layout>
  );
};

export default MainPage;


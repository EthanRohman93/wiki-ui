import React from 'react';
import RootLayout from './layout';
import Link from 'next/link';
import InputField from '@/components/login/InputField';

/*
 * TODO
 *   add username creation and suggestion
 *   track username somehow
 *   forward to random wiki or enhanced home pages
 *   make home page that allows for people to choose an experience and or topic
 *   make nav bar with jump and normal links (search for content too)
 *   right side pannel that has abbreviated version with section headings
 *   headings style 
 * */

const MainPage = () => {
  return (
    <RootLayout>
      <div className="home-color-scheme flex items-center justify-center h-screen">
        <div className='flex flex-col items-center justify-center w-full max-w-4xl p-4 home-border-style'>
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
            <div className="home-border-style">
              <InputField id='login' label='This is the dog' placeholder='ExamplePassword' type='beast'/>
            </div>
            <p className="mb-4 text-center">
              For more details on the infrastructure and design principles of this research,
              please visit my portfolio http://ethanrohman.com.
            </p>
        </div>
      </div>
    </RootLayout>
  );
};

export default MainPage;


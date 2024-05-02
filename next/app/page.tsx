'use client'
import React from 'react';
import ClientUsernameInput from '@/components/ClientUsernameInput';

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
      <div className="home-color-scheme flex items-center justify-center h-full">
        <div className='flex flex-col items-center justify-center w-full
                    max-w-4xl p-4 home-border-style rounded-xl'>
            <h1 className="text-2xl font-bold mb-4">Welcome</h1>
          <p className="mb-4">
            Hi. Thank you for joining our study! We are eager to see how different designs can improve the way information is presented and experienced.
          </p>
          <p className="mb-4">
            To participate, simply enter a username below. You will then be taken to a page with various topics to explore. Feel free to switch between topics at any time. You can exit the study whenever you like and complete a brief survey to share your thoughts.
          </p>
          <p className="mb-4">
            Please be aware that while your interactions with the site are recorded anonymously to enhance future user experiences, no personal information beyond your site usage is collected.
          </p>
            <ClientUsernameInput />
        </div>
      </div>
  );
};

export default MainPage;


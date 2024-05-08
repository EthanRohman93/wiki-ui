'use client'
import React from 'react';
import TopicSelect from '../components/topics/TopicSelect';

const TopicsPage = () => {
  return (
    <div className="home-color-scheme lg:h-full min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-4xl home-border-style w-full flex flex-col items-center rounded-xl">
          <h1 className="text-2xl font-bold mb-4 text-center m-10">Topic Selection</h1>
          <p className="mb-4 text-center">Please select the topic that you would like to read about:</p>
          <TopicSelect />
      </div>
    </div>
  );
};

export default TopicsPage;


'use client'
import React from 'react';
import Link from 'next/link';
import topics from '@/topics_sections.json';

interface Section {
  id: string;
  heading: string;
}

interface Topic {
  title: string;
  file_name: string;
  sections: Section[];
}

interface PropsType {
  ename: string;
}

const SectionLinks = ({ ename }: PropsType) => {
    const topic = topics.topics.find((topic: Topic) => topic.file_name === ename);

    return (
        <div className="grid grid-cols-2 px-4">
          {topic ? (
            topic.sections.map((section, index) => (
              <div key={index} className="flex justify-center items-center mx-1">
                <Link href={`#${section.id}`} passHref
                        className='font-medium text-sm hover:font-extrabold'>
                  {section.heading}
                </Link>
              </div>
            ))
          ) : (
            <p>No sections found for this topic.</p>
          )}
        </div>
    );
};

export default SectionLinks;

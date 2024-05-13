import React from 'react';
import Link from 'next/link';

const pages = [
  { wname: 'jordan', title: 'Michael Jordan' },
  { wname: 'curie', title: 'Marie Curie' },
  { wname: 'egypt', title: 'Ancient Egypt' },
  { wname: 'internet', title: 'History of the Internet' },
  { wname: 'amazon', title: 'Amazon Rainforest' },
  { wname: 'shakespeare', title: 'William Shakespeare' },
  { wname: 'socrates', title: 'Socrates' },
  { wname: 'swift', title: 'Taylor Swift' },
  { wname: 'tubman', title: 'Harriet Tubman' },
  { wname: 'youyou', title: 'Tu Youyou' }
];

const WikiPage = () => {
  return (
    <div className='wiki-color-scheme min-h-screen'>
      <div className="p-2 flex flex-col max-w-3xl justify-center items-center">
        <h1 className="mb-4 text-bold text-2xl">Wiki Landing Page</h1>
        <ul>
          {pages.map(({ wname, title }) => (
            <li key={wname} className='p-2 text-lg'>
              <Link href={`/wiki/${wname}/`} className='hover:underline'>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WikiPage;

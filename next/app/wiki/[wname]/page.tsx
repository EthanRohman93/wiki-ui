import React from 'react';
import ClassicContent from '@/components/wiki/ClassicContent';
import ClassicHeader from '@/components/wiki/ClassicHeader';

type ParamsType = {
    params: {
        wname: string;
    }
};

export function generateStaticParams() {
  return [{ wname: 'jordan' },
        { wname: 'curie' },
        { wname: 'egypt' },
        { wname: 'internet' },
        { wname: 'amazon' },
        { wname: 'shakespeare' },
        { wname: 'socrates' },
        { wname: 'swift' },
        { wname: 'tubman' },
        { wname: 'youyou' },
    ]
};


const WikiPage = ({ params }: ParamsType) => {
    return (
        <div className='wiki-color-scheme'>
            <ClassicHeader wname={params.wname} />
            <ClassicContent wname={params.wname} />
        </div>
    );
};
export default WikiPage;

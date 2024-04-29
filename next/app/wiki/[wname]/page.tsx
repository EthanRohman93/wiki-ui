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
        <div className='wiki-color-scheme flex flex-col h-full items-center'>
            <div className='justify-center max-w-4xl border-l border-r h-full'>
                <div className='flex-1'>
                    <ClassicHeader wname={params.wname} />
                </div>
                <div className='flex-1 border-t'>
                    <ClassicContent wname={params.wname} />
                </div>
            </div>
        </div>
    );
};
export default WikiPage;

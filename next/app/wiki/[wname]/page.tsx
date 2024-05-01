import React from 'react';
import ClassicContent from '@/components/wiki/ClassicContent';
import ClassicHeader from '@/components/wiki/ClassicHeader';
import ClassicImage from '@/components/wiki/ClassicImage';
import QuickFacts from '@/components/wiki/QuickFacts';
import ClassicFooter from '@/components/wiki/ClassicFooter';

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
        <div className='wiki-color-scheme flex flex-col h-full items-center w-full'>
            <div className='justify-center max-w-4xl border-l border-r h-full w-full'>
                <div className='flex flex-1 justify-between w-full'>
                    <div className='flex flex-col justify-start items-start'>
                        <ClassicHeader wname={params.wname} />
                    </div>
                    <div className='flex flex-row justify-end items-end'>
                        <QuickFacts wname={params.wname} />
                        <ClassicImage wname={params.wname} />
                    </div>
                </div>
                <div className='flex flex-col flex-1 w-full'>
                    <div className='flex-1 border-t'>
                        <ClassicContent wname={params.wname} />
                    </div>
                    <div className='border-t w-full'>
                        <ClassicFooter wname={params.wname} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default WikiPage;

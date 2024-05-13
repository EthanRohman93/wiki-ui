import React from 'react';
import ClassicContent from '../../components/wiki/ClassicContent';
import ClassicHeader from '../../components/wiki/ClassicHeader';
import ClassicImage from '../../components/wiki/ClassicImage';
import QuickFacts from '../../components/wiki/QuickFacts';

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
        <div className='wiki-color-scheme flex justify-center items-center min-h-screen'>
            <div className='flex flex-col items-center max-w-3xl mx-auto border-l border-r'>
                <div className='wiki-color-scheme bg-inherit'>
                    <div className='flex flex-1 justify-between'>
                        <ClassicHeader wname={params.wname} />
                        <div className='flex flex-row justify-end items-end align-top'>
                            <QuickFacts wname={params.wname} />
                            <ClassicImage wname={params.wname} />
                        </div>
                    </div>
                    <div className='flex-1 min-h-screen border-t'>
                        <ClassicContent wname={params.wname} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default WikiPage;

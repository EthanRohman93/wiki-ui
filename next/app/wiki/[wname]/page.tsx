import React from 'react';
import ClassicContent from '../../components/wiki/ClassicContent';
import ClassicHeader from '../../components/wiki/ClassicHeader';
import ClassicImage from '../../components/wiki/ClassicImage';
import QuickFacts from '../../components/wiki/QuickFacts';
import ClassicFooter from '../../components/wiki/ClassicFooter';

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
        <div className='wiki-color-scheme flex flex-col h-max items-center'>
            <div className='bg-inherit justify-center border-l border-r'>
                <div className='max-w-4xl'>
                    <div className='flex flex-1 justify-between'>
                        <ClassicHeader wname={params.wname} />
                        <div className='flex flex-row justify-end items-end align-top'>
                            <QuickFacts wname={params.wname} />
                            <ClassicImage wname={params.wname} />
                        </div>
                    </div>
                    <div className='flex-1 border-t'>
                        <ClassicContent wname={params.wname} />
                    </div>
                    <div className='border-t'>
                        <ClassicFooter />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default WikiPage;

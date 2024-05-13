import EnhancedContent from '../../components/enhanced/EnhancedContent';
import React from 'react';

type ParamsType = {
    params: {
        ename: string;
    }
};

export function generateStaticParams() {
  return [{ ename: 'jordan' },
        { ename: 'curie' },
        { ename: 'egypt' },
        { ename: 'internet' },
        { ename: 'amazon' },
        { ename: 'shakespeare' },
        { ename: 'socrates' },
        { ename: 'swift' },
        { ename: 'tubman' },
        { ename: 'youyou' },
    ]
};

const EnhancedPage = ({ params }: ParamsType) => {
    const colorScheme = `${params.ename}-color-scheme`
    return ( 
        <div className={`${colorScheme} flex justify-center items-center`}>
            <div className="flex flex-col items-center max-w-4xl mx-auto">
                <div className='fex flex-row'>
                    <EnhancedContent ename={params.ename} />
                </div>
            </div>
        </div>
    );
};
export default EnhancedPage;

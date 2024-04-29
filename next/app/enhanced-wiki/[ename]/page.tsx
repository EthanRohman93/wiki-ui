import React from 'react';
import EnhancedContent from '@/components/enhanced/EnhancedContent';

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
        <div className={colorScheme}>
            <EnhancedContent ename={params.ename} />
        </div>
    );
};
export default EnhancedPage;

import React from 'react';

type ParamsType = {
    params: {
        ename: string;
    }
};

export function generateStaticParams() {
  return [{ ename: 'michael' }]
};


const EnhancedPage = ({ params }: ParamsType) => {
    const colorScheme = `${params.ename}-color-scheme`
    return ( 
        <div className={colorScheme}>
            {params.ename}
        </div>
    );
};
export default EnhancedPage;

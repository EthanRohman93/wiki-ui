import React from 'react';

type ParamsType = {
    params: {
        ename: string;
    }
};

export function generateStaticParams() {
  return [{ wname: 'michael' }]
};


const EnhancedPage = ({ params }: ParamsType) => {
    return ( 
        <div>
            {params.ename}
        </div>
    );
};
export default EnhancedPage;

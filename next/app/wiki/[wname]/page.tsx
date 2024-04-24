import React from 'react';

type ParamsType = {
    params: {
        wname: string;
    }
};

export function generateStaticParams() {
  return [{ wname: 'michael' }]
};


const WikiPage = ({ params }: ParamsType) => {
    return (
        <div className='wiki-color-scheme'>
            {params.wname}
        </div>
    );
};
export default WikiPage;

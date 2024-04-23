import React from 'react';
import WikiLayout from '../layout';

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
        <WikiLayout>
            <div>
                {params.wname}
            </div>
        </WikiLayout>
    );
};
export default WikiPage;

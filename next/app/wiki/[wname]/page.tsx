import React from 'react';

type ParamsType = {
    params: {
        wname: string;
    }
}

export function generateStaticParams() {
  return [{ wname: 'michael' }]
}


const ProjectDetails = ({ params }: ParamsType) => {
    return ( 
        <div>
            {params.wname}
        </div>
    )
}
export default ProjectDetails;

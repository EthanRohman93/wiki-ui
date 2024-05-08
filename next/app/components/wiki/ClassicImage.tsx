import Image from 'next/image';
import React from 'react';

type PropsType = {
    wname: string;
};

const ClassicImage = async ({ wname }: PropsType) => {

    return (
        <div className='h-auto p-2 m-2'>
            <Image
                src={`/images/${wname}.jpg`}
                width={300}
                height={300}
                alt={`${wname} Image`}
            />
        </div>
    );
};

export default ClassicImage;

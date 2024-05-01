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
                width={100}
                height={100}
                alt={`${wname} Image`}
            />
        </div>
    );
};

export default ClassicImage;

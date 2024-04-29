import Image from 'next/image';
import React from 'react';

type PropsType = {
    wname: string;
};

const ClassicImage = async ({ wname }: PropsType) => {

    return (
        <div className='flex-1 p-2 max-w-xs'>
            <Image
                src={`/images/${wname}.jpg`}
                style={{
                    width: '100%',
                    height: 'auto',
                }}
                width={300}
                height={500}
                alt={`${wname} Image`}
                className='border-l'
            />
        </div>
    );
};

export default ClassicImage;

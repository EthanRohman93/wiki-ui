import Image from 'next/image';
import React from 'react';

type PropsType = {
    wname: string;
};

const ClassicImage = ({ wname }: PropsType) => {
    const imagePath = `/images/${wname}.jpg`;

    return (
        <div>
            <Image
                src={imagePath}
                width={500}
                height={300}
                alt={`${wname} Image`}
            />
        </div>
    );
};

export default ClassicImage;

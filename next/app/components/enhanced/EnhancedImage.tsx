import Image from 'next/image';
import React from 'react';

type PropsType = {
    ename: string;
};

const EnhancedImage = ({ ename }: PropsType) => {
    const imagePath = `/images/${ename}.jpg`;

    return (
        <div>
            <Image
                src={imagePath}
                width={500}  // Set a fixed width or dynamic based on your design requirements
                height={300} // Set a fixed height or dynamic based on your design requirements
                alt={`${ename} Image`}
                className='rounded-xl border-2'
            />
        </div>
    );
};

export default EnhancedImage;

import Image from 'next/image';
import React from 'react';

type PropsType = {
    wname: string;
};

const EnhancedImage = ({ wname }: PropsType) => {
    const imagePath = `/images/${wname}.jpg`;

    return (
        <div>
            <Image
                src={imagePath}
                width={500}  // Set a fixed width or dynamic based on your design requirements
                height={300} // Set a fixed height or dynamic based on your design requirements
                alt={`${wname} Image`}
            />
        </div>
    );
};

export default EnhancedImage;

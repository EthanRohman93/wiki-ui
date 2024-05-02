import React from 'react';
import ClassicImage from './ClassicImage';

type PropsType = {
    wname: string;
};

const ClassicCard = ({ wname }: PropsType) => {
    return (
        <div className='flex flex-row'>
            <ClassicImage wname={wname} />
        </div>
    );
};

export default ClassicCard;

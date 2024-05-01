import React from 'react';
import ClassicImage from './ClassicImage';
import ClassicDescription from './ClassicDescription';

type PropsType = {
    wname: string;
};

const ClassicCard = ({ wname }: PropsType) => {
    return (
        <div className='flex flex-row'>
            <ClassicImage wname={wname} />
            <ClassicDescription wname={wname} />
        </div>
    );
};

export default ClassicCard;

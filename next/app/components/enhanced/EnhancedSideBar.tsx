import React from 'react';
import EnhancedImage from './EnhancedImage';
import EnhancedFacts from './EnhancedFacts';

type PropsType = {
    ename: string;
};

const EnhancedSideBar = ({ ename }: PropsType) => {
    return (
        <div className='sticky top-0 h-screen p-2'>
            <EnhancedImage ename={ename} />
            <EnhancedFacts ename={ename} />
        </div>
    );
};

export default EnhancedSideBar;

'use client'
import React from 'react';
import EnhancedSearch from './EnhancedSearch';
import SectionLinks from './SectionLinks';
import SurveyButton from './SurveyButton';

type PropsType = {
    ename: string;
};

const EnhancedNavFooter = ({ ename }: PropsType) => {
    return (
        <div className={`${ename}-color-scheme border-t flex flex-row justify-center items-center`}>
            <div className='p-4'>
                <EnhancedSearch />
            </div>
            <div>
                <SectionLinks ename={ename} />
            </div>
            <div className='p-4'>
                <SurveyButton />
            </div>
        </div>
    );
};

export default EnhancedNavFooter;

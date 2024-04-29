import React from 'react';

type PropsType = {
    wname: string;
};

const nameMap: { [key: string]: string } = {
    jordan: 'Michael Jordan',
    curie: 'Marie Curie',
    egypt: 'Ancient Egypt',
    internet: 'The Internet',
    amazon: 'Amazon Rainforest',
    shakespeare: 'William Shakespeare',
    socrates: 'Socrates',
    swift: 'Taylor Swift',
    tubman: 'Harriet Tubman',
    youyou: 'Tu Youyou'
};

const ClassicHeader = ({ wname }: PropsType) => {
    const headerText = nameMap[wname] || wname; // Fallback to wname if no match in map

    return (
        <div className='text-4xl p-4 m-4'>
            {headerText}
        </div>
    );
};

export default ClassicHeader;

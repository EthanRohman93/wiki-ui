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
    const headerText = nameMap[wname] || wname;
    return (
        <div className='text-5xl p-6 m-6'>
            {headerText}
        </div>
    );
};

export default ClassicHeader;

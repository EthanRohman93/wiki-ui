import React from 'react';
import { promises as fs } from 'fs';
import path from 'path';

type PropsType = {
    wname: string;
}

type SectionType = {
    h: string;
    p: string;
}

const ClassicContent = async ({ wname }: PropsType) => {
    const filePath = path.join(process.cwd(), 'public', 'content', `${wname}.json`);
    const content = await fs.readFile(filePath, 'utf8');
    const parsedContent = JSON.parse(content).content
    
    return (
        <div>
            {parsedContent.map((section:SectionType, index:number) => (
                <div key={index}>
                    <h1 className='text-xl p-2 m-2'>{section.h}</h1>
                    <p className='p-2 m-2'>{section.p}</p>
                </div>
            ))}
        </div>
    );
};

export default ClassicContent;

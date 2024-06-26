import React from 'react';
import { promises as fs } from 'fs';
import path from 'path';
import ClassicFooter from './ClassicFooter';

type PropsType = {
    wname: string;
}

type SectionType = {
    heading: string;
    content: string[];
    id?: string;
}


const ClassicContent = async ({ wname }: PropsType) => {
    const filePath = path.join(process.cwd(), 'public', 'content', `${wname}.json`);
    const content = await fs.readFile(filePath, 'utf8');
    const parsedContent = JSON.parse(content).sections
    
    return (
        <div className='wiki-color-scheme flex flex-col items-center max-w-3xl mx-auto'>
            <div className='overflow-hidden flex-1 w-full'>
                {parsedContent && parsedContent.map((section: SectionType, index: number) => (
                    <div key={index} className=''>
                        <h1 className='font-medium text-xl p-2 m-2' id={section.id}>{section.heading}</h1>
                        {section.content.map((paragraph: string, pIndex: number) => (
                            <p key={pIndex} className='p-2 m-2'>{paragraph}</p>
                        ))}
                    </div>
                ))}
            </div>
            <div className='w-full max-w-3xl'>
                <ClassicFooter />
            </div>
        </div>
    );
};

export default ClassicContent;

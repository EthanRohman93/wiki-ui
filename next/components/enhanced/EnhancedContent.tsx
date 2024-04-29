import React from 'react';
import { promises as fs } from 'fs';
import path from 'path';

type PropsType = {
    ename: string;
}

type SectionType = {
    h: string;
    p: string;
}

const EnhancedContent = async ({ ename }: PropsType) => {
    const filePath = path.join(process.cwd(), 'public', 'content', `${ename}.json`);
    const content = await fs.readFile(filePath, 'utf8');
    const parsedContent = JSON.parse(content).content
    
    return (
        <div>
            {parsedContent.map((section:SectionType, index:number) => (
                <div key={index}>
                    <h1>{section.h}</h1>
                    <p>{section.p}</p>
                </div>
            ))}
        </div>
    );
};

export default EnhancedContent;

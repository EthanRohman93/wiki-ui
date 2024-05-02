import React from 'react';
import { promises as fs } from 'fs';
import path from 'path';

type PropsType = {
    ename: string;
}


const EnhancedFacts = async ({ ename }: PropsType) => {
    const filePath = path.join(process.cwd(), 'public', 'content', `${ename}.json`);
    const content = await fs.readFile(filePath, 'utf8');
    const quickFacts = JSON.parse(content).quickFacts;

    return (
        <div className="justify-center text-center p-2 m-2">
            <h2 className="text-md font-bold">Quick Facts</h2>
            {quickFacts.map((fact: string, index: number) => (
                <p key={index} className="text-sm border-2 rounded-xl my-2 p-1">{fact}</p>
            ))}
        </div>
    );
};

export default EnhancedFacts;

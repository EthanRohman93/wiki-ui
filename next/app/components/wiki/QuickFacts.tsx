import React from 'react';
import { promises as fs } from 'fs';
import path from 'path';

type PropsType = {
    wname: string;
}


const QuickFacts = async ({ wname }: PropsType) => {
    const filePath = path.join(process.cwd(), 'public', 'content', `${wname}.json`);
    const content = await fs.readFile(filePath, 'utf8');
    const quickFacts = JSON.parse(content).quickFacts;

    return (
        <div className="justify-center text-center p-2 m-2">
            <h2 className="text-md">Quick Facts</h2>
            {quickFacts.map((fact: string, index: number) => (
                <p key={index} className="text-sm">{fact}</p>
            ))}
        </div>
    );
};

export default QuickFacts;

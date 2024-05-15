import React from 'react';
import { promises as fs } from 'fs';
import path from 'path';
import EnhancedNavFooter from './EnhancedNav';
import EnhancedSideBar from './EnhancedSideBar';

type PropsType = {
    ename: string;
}

type SectionType = {
    heading: string;
    content: string[];
    id?: string;
}

const EnhancedContent = async ({ ename }: PropsType) => {
    const filePath = path.join(process.cwd(), 'public', 'content', `${ename}.json`);
    const content = await fs.readFile(filePath, 'utf8');
    const parsedContent = JSON.parse(content).sections
    const title = JSON.parse(content).title
    const titleStyle = `${ename}-title text-4xl font-bold p-2`
    const headingStyle = `${ename}-heading text-xl font-medium p-2 m-2 w-fit border rounded-xl`
    const paragraphStyle = `${ename}-content p-2`

    return (
        <div className={`${ename}-color-scheme flex flex-col`}>
            <div className='flex flex-row overflow-hidden pb-16'>
                <div className='border-r min-h-screen'>
                    <h1 className={titleStyle}>{title}</h1>
                    {parsedContent && parsedContent.map((section: SectionType, index: number) => (
                        <div key={index}>
                            <h1 className={headingStyle} id={section.id}>{section.heading}</h1>
                            {section.content.map((paragraph: string, pIndex: number) => (
                                <p key={pIndex} className={paragraphStyle}>{paragraph}</p>
                            ))}
                        </div>
                    ))}
                </div>
                <div className='w-fit min-w-[200px]'>
                    <EnhancedSideBar ename={ename} />
                </div>
            </div>
            <div className='fixed bottom-0 w-full max-w-5xl'>
                <EnhancedNavFooter ename={ename}/>
            </div>
        </div>
    );
};

export default EnhancedContent;

import React from 'react';
import Link from 'next/link';


interface Props {
    result: string;
}

const EnhancedOutput = ({ result }: Props) => {
    return (
        <Link href={`/enhanced-wiki/${result}`} className="block px-1 py-2 my-1 w-full text-left hover:font-bold rounded-xl border-2">
            <div className='flex justify-between items-center w-full'>
                <div className='flex-1'>
                    {result}
                </div>
            </div>
        </Link>
    );
};

export default EnhancedOutput;

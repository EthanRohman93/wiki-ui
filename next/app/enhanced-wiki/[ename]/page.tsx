import EnhancedContent from '../../components/enhanced/EnhancedContent';
import EnhancedNavFooter from '../../components/enhanced/EnhancedNav';
import EnhancedSideBar from '../../components/enhanced/EnhancedSideBar';
import React from 'react';

type ParamsType = {
    params: {
        ename: string;
    }
};

export function generateStaticParams() {
  return [{ ename: 'jordan' },
        { ename: 'curie' },
        { ename: 'egypt' },
        { ename: 'internet' },
        { ename: 'amazon' },
        { ename: 'shakespeare' },
        { ename: 'socrates' },
        { ename: 'swift' },
        { ename: 'tubman' },
        { ename: 'youyou' },
    ]
};

const EnhancedPage = ({ params }: ParamsType) => {
    const colorScheme = `${params.ename}-color-scheme h-full w-full flex flex-col`
    return ( 
        <div className={colorScheme}>
            <div className='flex flex-1 h-full'>
                <div className="flex flex-1 bg-inherit">
                    <div className="flex-1 no-scrollbar overflow-clip p-4 bg-inherit">
                        <EnhancedContent ename={params.ename} />
                    </div>
                    <div className="flex-1 h-full p-4 max-w-64 border-l">
                        <EnhancedSideBar ename={params.ename} />
                    </div>

                </div>

            </div>
            <div className="bg-inherit p-4 border-t fixed bottom-0 w-full">
                <EnhancedNavFooter ename={params.ename} />
            </div>
        </div>
    );
};
export default EnhancedPage;

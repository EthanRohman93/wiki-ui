'use client'
import React from 'react';
import Link from 'next/link';


type PropsType = {
    href: string;
    text: string;
};

const JumpLink = ({ href, text }: PropsType ) => {

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const section = document.querySelector(href);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Link className="hover:font-bold hover:text-current underline"
            href={href}
            onClick={handleClick}
        >
            {text}
        </Link>
    );
};

export default JumpLink;

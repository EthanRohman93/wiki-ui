'use client'
import React from "react";
import Link from "next/link";


type ABLinkProps = {
    text: string;
    href1: string;
    href2: string;
    className?: string;
    chanceA?: number;
};

const ABLink = ({ text, href1, href2, className, chanceA = 0.5 }: ABLinkProps) => {
    const isVariantA = Math.random() < chanceA;
    const targetHref = isVariantA ? href1 : href2;

    return (
        <Link href={targetHref} className={className}>
            {text}
        </Link>
    );
};

export default ABLink;

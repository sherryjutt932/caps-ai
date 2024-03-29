import { Footer, Navbar } from '@/components';
import React from 'react'

export default function MarketingLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
};

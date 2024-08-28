'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

const MobileNavigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [messages, setMessages] = useState({});
    const pathname = usePathname();
    const locale = pathname.split('/')[1] || 'ru';

    useEffect(() => {
        setLoading(true);
        fetch(`/locales/${locale}.json`)
            .then(res => res.json())
            .then(data => {
                setMessages(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error loading translations:', error);
                setLoading(false);
            });
    }, [locale]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    if (loading) {
        return <div>...</div>;
    }

    return (
        <NextIntlClientProvider messages={messages} locale={locale}>
            <div className="relative">

                <button
                    onClick={toggleMenu}
                    className="focus:outline-none p-1 rounded-md z-20 relative"
                    aria-expanded={isOpen}
                >
                    {isOpen ? <span className="text-white">✕</span> : '☰'}
                </button>

                {isOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-80 z-10 flex items-center justify-center">
                        <ul className="text-center space-y-6 text-white text-2xl">
                            <li>
                                <Link href="/articles" className="block py-2 px-4" onClick={toggleMenu}>
                                    {(messages as any).nav?.articles || 'Articles'}
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="block py-2 px-4" onClick={toggleMenu}>
                                    {(messages as any).nav?.gallery || 'Gallery'}
                                </Link>
                            </li>
                            <li>
                                <Link href="/templates" className="block py-2 px-4" onClick={toggleMenu}>
                                    {(messages as any).nav?.templates || 'Templates'}
                                </Link>
                            </li>
                            <li>
                                <Link href="/agreement" className="block py-2 px-4" onClick={toggleMenu}>
                                    {(messages as any).nav?.agreement || 'Agreement'}
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </NextIntlClientProvider>
    );
};

export default MobileNavigation;

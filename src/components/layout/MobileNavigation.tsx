'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

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
        return <div>Loading...</div>;
    }

    return (
        <NextIntlClientProvider messages={messages} locale={locale}>
            <div className="relative">
                <button
                    onClick={toggleMenu}
                    className="focus:outline-none focus:ring focus:ring-gray-300 hover:ring hover:ring-gray-300 p-2 rounded-md"
                    aria-expanded={isOpen}
                >
                    ☰
                </button>

                {isOpen && (
                    <ul className="absolute right-0 top-full mt-2 p-4 bg-white shadow-lg rounded-2xl z-1">
                        <li>
                            <Link href="/articles" className="block py-2 px-4 hover:bg-gray-100 rounded-md" onClick={toggleMenu}>
                                {messages.nav?.articles || 'Articles'}
                            </Link>
                        </li>
                        <li>
                            <Link href="/gallery" className="block py-2 px-4 hover:bg-gray-100 rounded-md" onClick={toggleMenu}>
                                {messages.nav?.gallery || 'Gallery'}
                            </Link>
                        </li>
                        <li>
                            <Link href="/templates" className="block py-2 px-4 hover:bg-gray-100 rounded-md" onClick={toggleMenu}>
                                {messages.nav?.templates || 'Templates'}
                            </Link>
                        </li>
                        <li>
                            <Link href="/agreement" className="block py-2 px-4 hover:bg-gray-100 rounded-md" onClick={toggleMenu}>
                                {messages.nav?.agreement || 'Agreement'}
                            </Link>
                        </li>
                        <li className='block py-2 px-2'>
                            <LanguageSwitcher />
                        </li>
                    </ul>
                )}
            </div>
        </NextIntlClientProvider>
    );
};

export default MobileNavigation;
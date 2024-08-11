import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from "next-intl";

const Navigation = () => {
    const t = useTranslations("Index");
    return (
        <nav className="flex h-24">
            <div className="max-w-5xl container mx-auto flex justify-between items-center">
                <div className="flex gap-3 text-xl">
                    <Image src="/brush.png" alt='drawideally' width={500} height={500} className='size-7'/>
                    {t("nav.brand")}
                </div>
                <ul className="flex gap-8">
                    <li>
                        <Link href="/articles">
                            {t("nav.articles")}
                        </Link>
                    </li>
                    <li>
                        <Link href="/gallery">
                            {t("nav.gallery")}
                        </Link>
                    </li>
                    <li>
                        <Link href="/templates">
                            {t("nav.templates")}
                        </Link>
                    </li>
                    <li>
                        <Link href="/agreement">
                            {t("nav.agreement")}
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
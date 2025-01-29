import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import MobileNavigation from "@/components/layout/MobileNavigation";

const Navigation = () => {
    const t = useTranslations("Index");
    const locale = useLocale();

    return (
        <nav className="flex h-24">
            <div className="max-w-5xl container mx-auto flex justify-between items-center">
                <div className='flex gap-5'>
                    <Link href="/">
                        <div className="flex gap-3 text-xl ml-4">
                            <Image src="/brush.png" alt='drawideally' width={500} height={500} className='w-7 h-7' />
                            {t("nav.brand")}
                        </div>
                    </Link>
                    <LanguageSwitcher />
                </div>

                <ul className="hidden md:flex gap-8 px-6 text-lg">
                    <li>
                        <Link href={`/${locale}/generate`}>
                            {t("nav.ideas")}
                        </Link>
                    </li>
                    <li>
                        <Link href={`/${locale}/gallery`}>
                            {t("nav.gallery")}
                        </Link>
                    </li>
                    <li>
                        <Link href={`/${locale}/agreement`}>
                            {t("nav.agreement")}
                        </Link>
                    </li>
                </ul>

                <div className="md:hidden">
                    <MobileNavigation />
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
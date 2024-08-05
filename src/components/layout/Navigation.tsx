import React from 'react';
import Link from 'next/link';
import { useTranslations } from "next-intl";

const Navigation = () => {
    const t = useTranslations("Index");
    return (
        <nav className="flex h-24">
            <div className="max-w-5xl container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">
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
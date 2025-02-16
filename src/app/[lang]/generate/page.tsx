'use client';

import React, { useEffect, useState } from "react";
import styles from './styles.module.css';
import CategoryContainer from "@/components/generation/CategoryContainer";
import GlowingButton from "@/components/layout/GlowingButton";
import useIdeaStore from '../../../store/IdeaStore';
import { NextIntlClientProvider } from 'next-intl';
import { usePathname } from 'next/navigation';
import useLocaleStore from "@/store/LocaleStore";

type Messages = {
    Index: {
      generate: {
        title: string;
        slogan: string;
      };
    };
};

const GeneratePage = () => {
    const pathname = usePathname();
    const [messages, setMessages] = useState(null);
    const [loading, setLoading] = useState(true);
    const locale = pathname.split('/')[1] || 'ru';

    useEffect(() => {
        setLoading(true);
        fetch(`/locales/${locale}.json`)
          .then(res => res.json())
          .then(data => {
            setMessages(data);
            setLoading(false);
            useLocaleStore.setState({ locale });
          })
          .catch(error => {
            console.error('Error loading translations:', error);
            setLoading(false);
          });
      }, [locale]);

    const generatedIdea = useIdeaStore((state) => state.generatedIdea);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.container}>
            {messages ? (
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <h3 className={styles.title}>{(messages as any).Index.generate.title}</h3>
                    <h1 className={styles.slogan}>{(messages as any).Index.generate.slogan}</h1>
                    {generatedIdea ? (
                        <div className={styles.movingContainer}>
                            <h2 className={styles.idea}>{generatedIdea}</h2>
                        </div>
                    ) : (
                        <div className={styles.description}>
                            <h2>{(messages as any).Index.generate.descriptionOne}</h2>
                            <h2>{(messages as any).Index.generate.descriptionTwo}</h2>
                        </div>
                    )}
                    <GlowingButton text={(messages as any).Index.generate.buttonRandom} />
                    <CategoryContainer />
                </NextIntlClientProvider>
            ) : (
                <div>Translation data error</div>
            )}
        </div>
    );
};

export default GeneratePage;

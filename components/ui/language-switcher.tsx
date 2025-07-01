'use client';

import React from 'react';
import { useLanguage, Language } from '../../hooks/useLanguage';
import { Globe } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    const handleLanguageChange = (newLanguage: Language) => {
        setLanguage(newLanguage);
    };

    return (
        <div className='relative group'>
            <button
                className='flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-200/80 hover:bg-gray-300/80 dark:bg-white/10 dark:hover:bg-white/20 backdrop-blur-sm transition-all duration-200 text-gray-700 dark:text-white'
                aria-label='언어 변경'
            >
                <Globe className='h-4 w-4' />
                <span className='text-sm font-medium'>{language === 'ko' ? '한국어' : 'English'}</span>
            </button>

            {/* 드롭다운 메뉴 */}
            <div className='absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50'>
                <div className='py-2'>
                    <button
                        onClick={() => handleLanguageChange('en')}
                        className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                            language === 'en'
                                ? 'bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 font-medium'
                                : 'text-gray-700 dark:text-gray-300'
                        }`}
                    >
                        <div className='flex items-center space-x-3'>
                            <span className='text-lg'>🇺🇸</span>
                            <span>English</span>
                        </div>
                    </button>
                    <button
                        onClick={() => handleLanguageChange('ko')}
                        className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                            language === 'ko'
                                ? 'bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 font-medium'
                                : 'text-gray-700 dark:text-gray-300'
                        }`}
                    >
                        <div className='flex items-center space-x-3'>
                            <span className='text-lg'>🇰🇷</span>
                            <span>한국어</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

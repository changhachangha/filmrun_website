'use client';

import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className='flex items-center justify-center w-10 h-10 rounded-lg bg-gray-200/80 hover:bg-gray-300/80 dark:bg-gray-800/50 dark:hover:bg-gray-700/50 transition-all duration-200 text-gray-700 dark:text-white'
            aria-label={theme === 'light' ? '다크모드로 전환' : '라이트모드로 전환'}
        >
            {theme === 'light' ? (
                <Moon className='h-5 w-5 transition-transform duration-200 hover:scale-110' />
            ) : (
                <Sun className='h-5 w-5 transition-transform duration-200 hover:scale-110' />
            )}
        </button>
    );
};

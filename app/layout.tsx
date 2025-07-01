import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '../hooks/useLanguage';
import { ThemeProvider } from '../hooks/useTheme';

export const metadata: Metadata = {
    title: 'Film Run - Production Company',
    description: 'Film Run seeks to produce diverse and distinctive feature films within the Korean film industry.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body>
                <ThemeProvider>
                    <LanguageProvider>{children}</LanguageProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}

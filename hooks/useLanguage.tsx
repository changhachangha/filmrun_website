'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// 번역 데이터 타입 정의
export interface TranslationData {
    nav: {
        home: string;
        filmography: string;
        vision: string;
        about: string;
        team: string;
        contact: string;
    };
    hero: {
        title: string;
        subtitle: string;
    };
    filmography: {
        title: string;
        watchTrailer: string;
    };
    about: {
        companyVision: {
            title: string;
            diverse: {
                title: string;
                description: string;
            };
            harmonizing: {
                title: string;
                description: string;
            };
            original: {
                title: string;
                description: string;
            };
        };
        companyOverview: {
            title: string;
            earlyBeginnings: {
                title: string;
                description: string;
            };
            firstFeatureFilm: {
                title: string;
                description: string;
            };
            awardWinning: {
                title: string;
                description: string;
            };
        };
    };
    team: {
        title: string;
    };
    contact: {
        title: string;
        subtitle: string;
        address: string;
        phone: string;
        email: string;
    };
    footer: {
        copyright: string;
    };
}

// 한국어 번역 데이터
const koTranslations: TranslationData = {
    nav: {
        home: '홈',
        filmography: '필모그래피',
        vision: '비전',
        about: '회사소개',
        team: '팀',
        contact: '연락처',
    },
    hero: {
        title: 'FILM RUN',
        subtitle: '필모그래피',
    },
    filmography: {
        title: '필모그래피',
        watchTrailer: '예고편 보기',
    },
    about: {
        companyVision: {
            title: '회사 비전',
            diverse: {
                title: '다양성과 독창성',
                description: '영화사 달리기는 한국 영화 산업 내에서 다양하고 독창적인 장편 영화를 제작하고자 합니다.',
            },
            harmonizing: {
                title: '조화로운 요구사항',
                description: '영화 제작자와 관객의 요구를 조화시키며, 중저예산 장르 프로젝트를 전문으로 합니다.',
            },
            original: {
                title: '독창적인 이야기',
                description:
                    '세상을 향한 진실하고 겸손한 관점으로, 관객에게 본질적인 독창적 이야기를 경험할 기회를 제공합니다.',
            },
        },
        companyOverview: {
            title: '회사 개요',
            earlyBeginnings: {
                title: '초기 시작',
                description:
                    '2013년 후반기에 영화 잡지 <anno.>를 발행했습니다. 총 3호로 구성되며 1호 몽타주, 2호 사운드, 3호 미장센을 포함합니다.',
            },
            firstFeatureFilm: {
                title: '첫 번째 장편 영화',
                description:
                    '<메리 크리스마스 미스터 모> (2017)는 제53회 칼로비바리 국제영화제에 초청되었고 제21회 부산국제영화제에서 넷팩상을 수상했습니다.',
            },
            awardWinning: {
                title: '수상작 프로젝트',
                description: '<윤희에게> (2019)는 제41회 청룡영화상에서 감독상과 각본상을 수상했습니다.',
            },
        },
    },
    team: {
        title: '팀 소개',
    },
    contact: {
        title: '연락처',
        subtitle: '영화 비전을 현실로 만들 준비가 되셨나요? 다음 프로젝트에 대해 논의하기 위해 저희 팀에 연락하세요.',
        address: '주소',
        phone: '전화',
        email: '이메일',
    },
    footer: {
        copyright: '© 2025 영화사 달리기. All rights reserved.',
    },
};

// 영어 번역 데이터
const enTranslations: TranslationData = {
    nav: {
        home: 'Home',
        filmography: 'Filmography',
        vision: 'Vision',
        about: 'About',
        team: 'Team',
        contact: 'Contact',
    },
    hero: {
        title: 'FILM RUN',
        subtitle: 'Filmography',
    },
    filmography: {
        title: 'Filmography',
        watchTrailer: 'Watch Trailer',
    },
    about: {
        companyVision: {
            title: 'Company Vision',
            diverse: {
                title: 'Diverse & Distinctive',
                description:
                    'Film Run seeks to produce diverse and distinctive feature films within the Korean film industry.',
            },
            harmonizing: {
                title: 'Harmonizing Needs',
                description:
                    "Harmonizing the filmmaker and audience's needs, specializing in low to mid-budget genre projects.",
            },
            original: {
                title: 'Original Stories',
                description:
                    'A truthful and humble point of view toward the world, giving audiences quintessential original stories.',
            },
        },
        companyOverview: {
            title: 'Company Overview',
            earlyBeginnings: {
                title: 'Early Beginnings',
                description:
                    'Published the film magazine <anno.>, a total of 3 issues including No. 1 Montage, No. 2 Sound, and No. 3 Mise-en-scène.',
            },
            firstFeatureFilm: {
                title: 'First Feature Film',
                description:
                    '<Merry Christmas Mr. Mo> (2017) was invited to the 53rd Karlovy Vary International Film Festival and won the Netpac Award at the 21st Busan International Film Festival.',
            },
            awardWinning: {
                title: 'Award-Winning Project',
                description:
                    '<Moonlit Winter> (2019) won Best Director & Screenplay at the 41st Blue Dragon Film Award.',
            },
        },
    },
    team: {
        title: 'Meet the Team',
    },
    contact: {
        title: 'Contact Us',
        subtitle: 'Ready to bring your film vision to life? Get in touch with our team to discuss your next project.',
        address: 'Office Address',
        phone: 'Phone',
        email: 'Email',
    },
    footer: {
        copyright: '© 2025 Film Run. All rights reserved.',
    },
};

// 언어 타입
export type Language = 'ko' | 'en';

// 컨텍스트 타입
interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: TranslationData;
}

// 컨텍스트 생성
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 프로바이더 컴포넌트
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('en');

    // 로컬 스토리지에서 언어 설정 불러오기
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') as Language;
        if (savedLanguage && (savedLanguage === 'ko' || savedLanguage === 'en')) {
            setLanguage(savedLanguage);
        }
    }, []);

    // 언어 변경 시 로컬 스토리지에 저장
    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };

    // 현재 언어에 따른 번역 데이터
    const translations = language === 'ko' ? koTranslations : enTranslations;

    const value = {
        language,
        setLanguage: handleSetLanguage,
        t: translations,
    };

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

// 커스텀 훅
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

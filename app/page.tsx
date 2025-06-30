'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Play, Calendar, Award, Users, Film, Star, ExternalLink, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const portfolioData = {
  "company": {
    "name": "영화사 달리기",
    "name_english": "Film Run Co., Ltd.",
    "established": "2018-10-22",
    "years_in_business": 8,
    "ceo": "박두희",
    "business_registration": "290-88-00***",
    "business_type": "일반 영화 및 비디오물 제작업",
    "address": "서울 중구 청계천로 40, 1404호 (다동, 한국관광공사 서울센터)",
    "phone": "070-8152-1213",
    "email": "pdh@filmrun.co.kr",
    "facebook": "http://www.facebook.com/runfilmrun",
    "employees": 4,
    "revenue_2023": "1억 5,365만원",
    "vision": "좋은 영화, 좋은 감독을 발굴하는 영화사",
    "philosophy": "시린 겨울, 꽁꽁 언 가슴을 녹여줄 따뜻한 차 한잔 같은 영화 제작"
  },
  "ceo_profile": {
    "name": "박두희",
    "name_english": "Park Doo-hee",
    "birth_date": "1989-05-04",
    "age": 36,
    "education": "한양대학교 연극영화학과",
    "position": "영화 프로듀서, 영화사 달리기 대표",
    "debut": "2016년 <메리 크리스마스 미스터 모> 제작",
    "career_highlights": [
      "2010년 영화 '써니' 현장에서 시작",
      "CJ ENM 기획, 투자, 배급 실무 경험",
      "리틀빅픽쳐스 실무 경험",
      "2013년경 임대형 감독과 영화적 파트너십 시작",
      "2015년경 영화사 달리기 설립 준비",
      "2024년 부산영상위원회 드라마 제작지원 사업 심사위원"
    ],
    "work_style": [
      "하루 평균 30-50통의 업무 전화 처리",
      "블루투스 이어폰을 항상 착용하여 효율적 업무 진행",
      "배급 전문가로서 창작자 대상 강의 활동"
    ]
  },
  "filmography": [
    {
      "id": 1,
      "title": "메리 크리스마스 미스터 모",
      "title_english": "Merry Christmas Mr. Mo",
      "year": 2017,
      "director": "임대형",
      "genre": [
        "블랙코미디",
        "드라마"
      ],
      "runtime": "100분 26초",
      "rating": "12세 이상 관람가",
      "color": "흑백",
      "release_date": "2017-12-14",
      "distributor": "㈜인디스토리",
      "cast": [
        {
          "name": "기주봉",
          "role": "모금산"
        },
        {
          "name": "오정환",
          "role": "스데반"
        },
        {
          "name": "고원희",
          "role": "예원"
        },
        {
          "name": "전여빈",
          "role": "자영"
        },
        {
          "name": "김학선",
          "role": "용호"
        },
        {
          "name": "유재명",
          "role": "만제",
          "note": "우정출연"
        }
      ],
      "crew": {
        "producer": "박두희",
        "screenplay": "임대형",
        "cinematography": "문명환",
        "editing": "박세영",
        "music": "하헌진",
        "art_direction": "신우정"
      },
      "synopsis": "어느 날 예고 없이 암 선고를 받게 된 미스터 모. 생의 마지막 카운트다운이 시작되자, 일생일대의 계획을 세운다. 영문도 모른 채 미스터 모에게 소환된 영화감독 아들 스데반과 아들의 여자친구 예원. 미스터 모는 그들에게 자작 시나리오 [사제 폭탄을 삼킨 남자]를 던진다.",
      "awards": [
        "2016 제21회 부산국제영화제 뉴 커런츠 부문, 넷팩상",
        "2016 서울독립영화제 열혈스태프상-음악감독 하헌진"
      ],
      "keywords": [
        "#블랙코미디",
        "#드라마",
        "#가족",
        "#영화",
        "#찰리채플린",
        "#흑백영화"
      ]
    },
    {
      "id": 2,
      "title": "윤희에게",
      "title_english": "Moonlit Winter",
      "year": 2019,
      "director": "임대형",
      "genre": [
        "가족",
        "사랑/연애/로맨스",
        "여성"
      ],
      "runtime": "106분",
      "rating": "12세 이상 관람가",
      "color": "컬러",
      "release_date": "2019-11-14",
      "screens": 317,
      "audience": "약 120,000명",
      "distributor": "CJ ENM",
      "cast": [
        {
          "name": "김희애",
          "role": "윤희"
        },
        {
          "name": "나카무라 유코",
          "role": "준"
        },
        {
          "name": "김소혜",
          "role": "새봄"
        },
        {
          "name": "성유빈",
          "role": "경수"
        },
        {
          "name": "키노 하나",
          "role": "마사코"
        }
      ],
      "crew": {
        "producer": "박두희",
        "line_producer": "고경란",
        "screenplay": "임대형",
        "cinematography": "문명환",
        "editing": "박세영",
        "music": "김해원",
        "art_direction": [
          "김진영",
          "후쿠시마 나오카"
        ]
      },
      "synopsis": "겨울, 모녀는 단둘이 산다. 고등학생 딸(김소혜)은 우연히 엄마(김희애)에게 온 편지를 읽고 그녀가 한평생 숨겨온 비밀을 알아챈다. 딸은 엄마의 마음을 지금이라도 어루만져 주고 싶어 한다. 그렇게 엄마와 딸의 아름다운 여행이 시작된다.",
      "special_notes": [
        "제24회 부산국제영화제 폐막작",
        "2018 부산국제영화제 장편 극영화 제작지원펀드 선정작",
        "일본 오타루 촬영"
      ],
      "awards": [
        "2020 제40회 한국영화평론가협회상 감독상",
        "2020 제40회 한국영화평론가협회상 각본상",
        "2020 제40회 한국영화평론가협회상 음악상",
        "2020 제40회 한국영화평론가협회상 영평 10선",
        "2021 제41회 청룡영화상 감독상",
        "2021 제41회 청룡영화상 각본상"
      ]
    }
  ],
  "additional_projects": [
    {
      "name": "아노(anno) 영화잡지",
      "type": "출판",
      "role": "홍보 및 마케팅 담당",
      "description": "시대를 막론하고 주목받을 가치가 있는 영화들에 대한 주석(annotation)으로서의 비평을 담는 독립 영화잡지",
      "concept": "매 호 하나의 영화 속 요소를 선정하여 해당 주제에 대한 담론 형성을 도모"
    }
  ],
  "achievements": [
    {
      "year": 2017,
      "title": "영화진흥위원회 독립장편/저예산영화제작지원 사업 선정",
      "amount": "2억원 지원"
    },
    {
      "year": 2023,
      "title": "부산영상위원회 (웹)드라마 제작지원 사업 심사위원"
    },
    {
      "year": 2024,
      "title": "인디그라운드 창작자 배급 특강 강사",
      "topic": "배급 계약서 살펴보기"
    }
  ],
  "media_coverage": [
    {
      "date": "2019-11-18",
      "outlet": "씨네21",
      "title": "<윤희에게> 제작한 박두희 영화사 달리기 대표 - 영화적 동지와 신뢰를 쌓고 싶다",
      "type": "인터뷰"
    },
    {
      "date": "2015-04-15",
      "outlet": "뉴스H",
      "title": "영화사 '달리기' 프로듀서 박두희 씨 - 관객에게 닿을 수 있도록, '달리기'",
      "type": "인터뷰"
    },
    {
      "date": "2023-08-03",
      "outlet": "맡김레터",
      "title": "각본집, 영화사 대표에게 물어봤달리기! - 영화 제작사 '달리기' 박두희 대표님 인터뷰",
      "type": "인터뷰"
    }
  ],
  "business_philosophy": {
    "mission": "양극화가 심한 한국영화계의 허리를 받쳐주는 중간급 규모의 영화 제작",
    "vision": "합작 프로젝트를 통한 아시아 독립예술영화 시장의 활로 개척",
    "goals": [
      "다양성영화의 벽을 낮추고 관객이 쉽게 다가갈 수 있는 새로운 포지션의 영화 제작",
      "전세계를 공급처로 삼는 미국 인디필름을 모델링",
      "영화적 동지와의 신뢰 관계 구축"
    ]
  },
  "services": [
    {
      "name": "영화 제작",
      "description": "독립영화부터 상업영화까지 다양한 장르의 영화 제작"
    },
    {
      "name": "배급 서비스",
      "description": "영화 배급 및 마케팅 전문 서비스"
    },
    {
      "name": "컨설팅",
      "description": "영화 제작 및 배급 관련 전문 컨설팅"
    },
    {
      "name": "교육",
      "description": "영화 제작 및 배급 관련 강의 및 워크샵"
    }
  ],
  "website_sections": {
    "hero": {
      "title": "영화사 달리기",
      "subtitle": "좋은 영화, 좋은 감독을 발굴하는 영화사",
      "cta": "작품 보러가기"
    },
    "about": {
      "company_intro": "2018년 설립된 영화사 달리기는 박두희 프로듀서가 이끄는 독립 영화 제작사입니다.",
      "mission": "시린 겨울, 꽁꽁 언 가슴을 녹여줄 따뜻한 차 한잔 같은 영화를 만듭니다."
    },
    "portfolio": {
      "featured_works": [
        "윤희에게",
        "메리 크리스마스 미스터 모"
      ]
    },
    "contact": {
      "address": "서울 중구 청계천로 40, 1404호",
      "phone": "070-8152-1213",
      "email": "pdh@filmrun.co.kr"
    }
  }
};


export default function FilmRunHomepage() {
    const generateLocalBusinessSchema = () => {
        return {
            "@context": "https://schema.org/",
            "@type": "LocalBusiness",
            "name": portfolioData.company.name,
            "url": "https://www.filmrun.co.kr", // Assuming this is the canonical URL
            "image": "https://static.wixstatic.com/media/9e6baf_454568438fd6453a9deabc0920557744~mv2.png", // Placeholder, replace with actual logo URL if available
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "KR",
                "addressLocality": portfolioData.company.address.split(',')[0].trim(), // Extract city/locality
                "postalCode": "140-201", // This was hardcoded in HOME.html, verify if dynamic
                "streetAddress": portfolioData.company.address.split(',')[1].trim() // Extract street address
            },
            "telephone": portfolioData.company.phone
        };
    };

    const generateWebSiteSchema = () => {
        return {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": portfolioData.company.name,
            "url": "https://www.filmrun.co.kr" // Assuming this is the canonical URL
        };
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const featuredFilms = portfolioData.filmography.map(film => ({
        id: film.id,
        title: film.title_english || film.title,
        year: film.year.toString(),
        genre: film.genre.join(', '),
        poster: film.title_english === 'Merry Christmas Mr. Mo' ? '/images/Merry_Christmas_Mr_Mo.jpg' : `/images/${film.title_english.replace(/ /g, '_')}.jpg`, // Corrected path for Merry Christmas Mr. Mo
        description: film.synopsis,
        trailer: film.title_english === 'Moonlit Winter' ? 'https://www.youtube.com/embed/jMRNnTQ_P8g' : 'https://www.youtube.com/embed/OuduUPJwqN8',
        awards: film.awards,
    }));

    const teamMembers = [
        {
            name: 'PARK Doo-Hee',
            role: 'CEO/Producer Profile',
            image: '/images/park-doo-hee.jpg',
            bio: 'PARK Doo-Hee is a film producer and the founder/CEO of the Korean production company Film Run. PARK was formerly a studio executive at CJ E&M and Little Big Pictures, working in the independent film departments at both companies. A 10-plus-year veteran of the Korean film industry, PARK has extensive experience working in film financing, distribution, and marketing.',
        },
        {
            name: 'CHOI Chan',
            role: 'Producer',
            image: '/images/CHOI_Chan.jpg',
            bio: 'Producer CHOI Chan was born in Seoul and graduated from the Korea National University of Arts with a degree in film. Prior to joining the company, CHOI had worked extensively in film and production before leaving the current position to join Film Run. Growing up watching VHS versions of favourite films until the tape stretched out, she looks inward every day during meditation to find an evergrowing love for cinema and hopes to put that into work.',
        },
    ];

    return (
        <div className="min-h-screen bg-white text-black font-helvetica">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <Link href="/" className="text-2xl font-bold text-black">
                                <Image src="/images/logo.png" alt="Film Run Logo" width={100} height={40} />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                <Link href="#home" className="text-black hover:text-red-500 transition-colors">
                                    Home
                                </Link>
                                <Link
                                    href="#filmography"
                                    className="text-gray-500 hover:text-red-500 transition-colors"
                                >
                                    Filmography
                                </Link>
                                <Link href="#about" className="text-gray-500 hover:text-red-500 transition-colors">
                                    About
                                </Link>
                                <Link href="#team" className="text-gray-500 hover:text-red-500 transition-colors">
                                    Team
                                </Link>
                                <Link href="#contact" className="text-gray-500 hover:text-red-500 transition-colors">
                                    Contact
                                </Link>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-black hover:text-red-500"
                            >
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white/95 backdrop-blur-md">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link
                                href="#home"
                                className="block px-3 py-2 text-black hover:text-red-500 transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                href="#filmography"
                                className="block px-3 py-2 text-gray-500 hover:text-red-500 transition-colors"
                            >
                                Filmography
                            </Link>
                            <Link
                                href="#about"
                                className="block px-3 py-2 text-gray-500 hover:text-red-500 transition-colors"
                            >
                                About
                            </Link>
                            <Link
                                href="#team"
                                className="block px-3 py-2 text-gray-500 hover:text-red-500 transition-colors"
                            >
                                Team
                            </Link>
                            <Link
                                href="#contact"
                                className="block px-3 py-2 text-gray-500 hover:text-red-500 transition-colors"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </nav>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema()) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateWebSiteSchema()) }}
            />

            {/* Hero Section */}
            <section id="home" className="relative h-screen flex items-center justify-center bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between w-full">
                    {/* Left Column - Text */}
                    <div className="flex flex-col items-center space-y-4 md:w-1/2">
                        <h1 className="text-8xl font-bold text-red-600">FILM RUN</h1>
                        <p className="text-2xl text-red-600">Filmography</p>
                    </div>

                    {/* Right Column - Images */}
                    <div className="flex flex-col items-center md:w-1/2 space-y-4">
                        <div className="relative w-full h-[600px]">
                            <Image
                                src="/images/Moonlit_Winter_Main.jpg"
                                alt="Moonlit Winter Main"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="relative w-full h-[600px]">
                            <Image
                                src="/images/Merry_Christmas_Mr_Mo_Main.jpg"
                                alt="Merry Christmas Mr. Mo Main"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Filmography Section */}
            <section id="filmography" className="py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-din font-bold mb-4">Filmography</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {featuredFilms.map((film) => (
                            <Card
                                key={film.id}
                                className="bg-white border-gray-200 overflow-hidden group hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20"
                            >
                                <div className="relative">
                                    <Image
                                        src={film.poster || '/placeholder.svg'}
                                        alt={film.title}
                                        width={300}
                                        height={400}
                                        className="w-full h-80 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                                                    <Play className="mr-2 h-5 w-5" />
                                                    Watch Trailer
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent className="max-w-4xl bg-black border-gray-700">
                                                <div className="aspect-video">
                                                    <iframe
                                                        src={film.trailer}
                                                        className="w-full h-full"
                                                        allowFullScreen
                                                        title={`${film.title} Trailer`}
                                                    />
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                </div>
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-black">{film.title}</h3>
                                        <Badge variant="secondary" className="bg-red-600 text-white">
                                            {film.year}
                                        </Badge>
                                    </div>
                                    <p className="text-gray-500 mb-3">{film.genre}</p>
                                    <p className="text-gray-600 mb-4 text-sm">{film.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {film.awards.map((award, index) => (
                                            <Badge
                                                key={index}
                                                variant="outline"
                                                className="border-yellow-500 text-yellow-500"
                                            >
                                                <Award className="mr-1 h-3 w-3" />
                                                {award}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-din font-bold mb-4">Company Vision</h2>
                    </div>
                    <div className="text-center max-w-2xl mx-auto">
                        <p className="font_8 wixui-rich-text__text" style={{ fontSize: '18px' }}>
                            Film Run seeks to produce diverse and distinctive feature films within the Korean film
                            industry. Harmonizing the filmmaker and audience’s needs,
                        </p>
                        <p className="font_8 wixui-rich-text__text" style={{ fontSize: '18px' }}>
                            the company specializes in low to mid-budget genre projects.&nbsp; &nbsp;
                        </p>
                        <p className="font_8 wixui-rich-text__text" style={{ fontSize: '18px' }}>
                            &nbsp;
                        </p>
                        <p className="font_8 wixui-rich-text__text" style={{ lineHeight: '1.75em', fontSize: '18px' }}>
                            A truthful and humble point of view toward the world,
                        </p>
                        <p className="font_8 wixui-rich-text__text" style={{ lineHeight: '1.75em', fontSize: '18px' }}>
                            Film Run hopes to give the audience an opportunity to experience
                        </p>
                        <p className="font_8 wixui-rich-text__text" style={{ lineHeight: '1.75em', fontSize: '18px' }}>
                            quintessential original stories with their creatives.
                        </p>
                    </div>

                    <div className="text-center mt-16">
                        <h2 className="text-4xl md:text-5xl font-din font-bold mb-4">Company Overview</h2>
                        <div className="text-left max-w-2xl mx-auto">
                            <p
                                className="font_8 wixui-rich-text__text"
                                style={{ fontSize: '16px', lineHeight: '1.5em' }}
                            >
                                <span style={{ fontSize: '16px' }} className="wixui-rich-text__text">
                                    In the later period of 2013, the company published the film magazine &lt;anno.&gt;,
                                    a total of 3 issues that includes No. 1 Montage / No. 2 Sound / No. 3
                                    Mise-en-scène.&nbsp;
                                </span>
                            </p>
                            <p
                                className="font_8 wixui-rich-text__text"
                                style={{ fontSize: '16px', lineHeight: '1.5em' }}
                            >
                                &nbsp;
                            </p>
                            <p
                                className="font_8 wixui-rich-text__text"
                                style={{ fontSize: '16px', lineHeight: '1.5em' }}
                            >
                                <span style={{ letterSpacing: 'normal' }} className="wixui-rich-text__text">
                                    <span className="color_15 wixui-rich-text__text">
                                        <span style={{ fontSize: '16px' }} className="wixui-rich-text__text">
                                            The company and Director LIM’s first feature length&nbsp;{' '}
                                        </span>
                                    </span>
                                </span>
                                <span style={{ letterSpacing: 'normal' }} className="wixui-rich-text__text">
                                    <span className="color_15 wixui-rich-text__text">
                                        <span style={{ fontSize: '16px' }} className="wixui-rich-text__text">
                                            film{' '}
                                        </span>
                                    </span>
                                </span>
                            </p>
                            <p
                                className="font_8 wixui-rich-text__text"
                                style={{ fontSize: '16px', lineHeight: '1.5em' }}
                            >
                                <span style={{ letterSpacing: 'normal' }} className="wixui-rich-text__text">
                                    <span className="color_15 wixui-rich-text__text">
                                        <span style={{ fontSize: '16px' }} className="wixui-rich-text__text">
                                            &lt;Merry Christmas Mr. Mo&gt; (2017) was invited to the 53rd Karlovy Vary
                                            International Film Festival and won the Netpac Award at the 21st Busan
                                            International Film Festival.{' '}
                                        </span>
                                    </span>
                                </span>
                            </p>
                            <p
                                className="font_8 wixui-rich-text__text"
                                style={{ fontSize: '16px', lineHeight: '1.5em' }}
                            >
                                &nbsp;
                            </p>
                            <p
                                className="font_8 wixui-rich-text__text"
                                style={{ fontSize: '16px', lineHeight: '1.5em' }}
                            >
                                <span style={{ letterSpacing: 'normal' }} className="wixui-rich-text__text">
                                    <span className="color_15 wixui-rich-text__text">
                                        <span style={{ fontSize: '16px' }} className="wixui-rich-text__text">
                                            The second project together &lt;Moonlit Winter&gt; (2019) won Best Director
                                            &amp; Screenplay at the 41st Blue Dragon Film Award.
                                        </span>
                                    </span>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-din font-bold mb-4">Meet the Team</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <Card
                                key={index}
                                className="bg-white border-gray-200 overflow-hidden group hover:scale-105 transition-all duration-300 hover:shadow-xl"
                            >
                                <div className="relative">
                                    <Image
                                        src={member.image || '/placeholder.svg'}
                                        alt={member.name}
                                        width={300}
                                        height={300}
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-black mb-1">{member.name}</h3>
                                    <p className="text-red-500 font-medium mb-3">{member.role}</p>
                                    <p className="text-gray-500 text-sm">{member.bio}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-din font-bold mb-4">Contact Us</h2>
                    </div>
                    <div className="text-center max-w-2xl mx-auto">
                        <p className="text-lg text-gray-600">
                            <span className="font-bold">Address:</span> {portfolioData.company.address}
                        </p>
                        <p className="text-lg text-gray-600">
                            <span className="font-bold">Tel:</span> {portfolioData.company.phone}
                        </p>
                        <p className="text-lg text-gray-600">
                            <span className="font-bold">Email:</span> {portfolioData.company.email}
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p>&copy; 2025 Film Run. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

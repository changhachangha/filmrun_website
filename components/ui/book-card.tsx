'use client';

import Image from 'next/image';
import './book-card.css';

import { cn } from '@/lib/utils';

interface BookCardProps {
    imageSrc: string;
    title: string;
    className?: string;
}

const BookCard: React.FC<BookCardProps> = ({ imageSrc, title, className }) => {
    return (
        <div className={cn('book-card', className)}>
            <div className='book-card-cover'>
                <Image src={imageSrc} alt={title} fill style={{ objectFit: 'contain' }} />
            </div>
            <div className='book-card-spine'></div>
            <div className='book-card-top'></div>
            <div className='book-card-bottom'></div>
            <div className='book-card-pages'></div>
        </div>
    );
};

export default BookCard;

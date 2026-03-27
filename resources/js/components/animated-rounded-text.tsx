import { animated, useTransition } from '@react-spring/web';
import { useEffect, useState } from 'react';

interface RotatingItem {
    text: string;
    bgColor: string;
}
interface RotatingTextProps {
    texts: RotatingItem[]; // Daftar teks yang akan dirotasi
    intervalTime?: number; // Opsional: Waktu jeda antar perubahan teks dalam milidetik (default 2000ms)
    className?: string; // Opsional: Kelas Tailwind tambahan untuk div pembungkus
    textClassName?: string;
}

export default function RotatingText({ texts, intervalTime = 2000, className = '', textClassName = '' }: RotatingTextProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(
                (prevIndex) => (prevIndex + 1) % texts.length, // Loop kembali ke awal setelah teks terakhir
            );
        }, intervalTime);

        return () => clearInterval(intervalId);
    }, [texts, intervalTime]); // Dependency array: efek akan di-re-run jika texts atau intervalTime berubah

    const currentItem = texts[currentIndex];
    const textAnimation = useTransition(texts[currentIndex],{
        key: currentItem ? currentItem.text : 'empty-placeholder',
        from: { opacity: 1, y: 100},
        enter: {y: 0},
        leave: { opacity: 1, y: -100},
        config: { mass: 1, tension: 300, friction: 100 },
    });
    return (
        <div className={`${currentItem.bgColor} ${className} relative overflow-hidden transition-colors duration-3000 ease-in-out`}>
        {textAnimation((style, text)=> <animated.h1
                key={text.text}
                className={` ${textClassName} absolute inset-0 flex items-center justify-center transition-all`}
                style={style}
            >
                {text.text}
            </animated.h1>)} 
        </div>
    );
}

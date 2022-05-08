import { useMemo } from 'react';
import coffee1 from '../../assets/coffee/coffee-1.jpeg';
import coffee2 from '../../assets/coffee/coffee-2.jpeg';
import coffee3 from '../../assets/coffee/coffee-3.jpeg';
import coffee4 from '../../assets/coffee/coffee-4.jpeg';
import coffee5 from '../../assets/coffee/coffee-5.jpeg';
import coffee6 from '../../assets/coffee/coffee-6.jpeg';
import coffee7 from '../../assets/coffee/coffee-7.jpeg';
import coffee8 from '../../assets/coffee/coffee-8.jpeg';
import coffee9 from '../../assets/coffee/coffee-9.jpeg';
import coffee10 from '../../assets/coffee/coffee-10.jpeg';

interface ICard {
    src: string;
    alt: string;
}

export default function Digitalmediagrid() {
    const cards = useMemo<Array<ICard>>(() => [
      { src: coffee1, alt: 'coffee1' },
      { src: coffee2, alt: 'coffee2' },
      { src: coffee3, alt: 'coffee3' },
      { src: coffee4, alt: 'coffee4' },
      { src: coffee5, alt: 'coffee5' },
      { src: coffee6, alt: 'coffee6' },
      { src: coffee7, alt: 'coffee7' },
      { src: coffee8, alt: 'coffee8' },
      { src: coffee9, alt: 'coffee9' },
      { src: coffee10, alt: 'coffee10' },
    ], []);

    return (
        <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
            <div className="relative sm:pb-16 sm:pt-8">
                {cards.map((img) => (
                    <img
                        alt={img.alt}
                        src={img.src}
                        key={img.alt}
                        className="flex h-16 w-32 justify-center p-1 grayscale transition hover:grayscale-0 focus:grayscale-0"
                    />
                ))}
            </div>
        </main>
    );
}
import { useMemo } from 'react';

interface ICard {
    src: string;
    alt: string;
    href: string;
}

export default function DigitalMediaGrid() {
    const cards = useMemo<Array<ICard>>(() => [], []);

    return (
        <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
            <div className="relative sm:pb-16 sm:pt-8">
                {cards.map((img) => (
                    <a
                        key={img.href}
                        href={img.href}
                        className="flex h-16 w-32 justify-center p-1 grayscale transition hover:grayscale-0 focus:grayscale-0"
                    >
                        <img alt={img.alt} src={img.src} />
                    </a>
                ))}
            </div>
        </main>
    );
}

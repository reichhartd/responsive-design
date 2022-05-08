import React from 'react';

export interface ICard {
    src: string;
    alt: string;
}

export const Card: React.FC<ICard> = ({ src, alt }) => (
    <div className="h-64 w-64 rounded-2xl bg-white drop-shadow-2xl grayscale transition hover:grayscale-0 focus:grayscale-0">
        <img alt={alt} src={src} className="m-auto h-32 w-64 rounded-t-2xl" />
        <p>{alt}</p>
    </div>
);

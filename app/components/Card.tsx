import React from 'react';

export interface ICard {
    name: string;
    description: string;
    address: string;
    stars: number;
    imageSrc: string;
    imageAlt: string;
}

export const Card: React.FC<ICard> = ({ name, description, address, stars, imageSrc, imageAlt }) => (
    <figure className="rounded-xl bg-slate-100 p-8 dark:bg-slate-800 md:flex md:p-0">
        <img
            className="mx-auto h-24 w-24 rounded-full md:h-auto md:w-48 md:rounded-none"
            src={imageSrc}
            alt={imageAlt}
        />
        <div className="space-y-4 pt-6 text-center md:p-8 md:text-left">
            <blockquote>
                <p className="text-lg font-medium">{description}</p>
            </blockquote>
            <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400">{name}</div>
                <div className="text-slate-700 dark:text-slate-500">{address}</div>
            </figcaption>
        </div>
    </figure>
);

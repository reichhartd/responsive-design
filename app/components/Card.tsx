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
    // <figure className="rounded-3xl bg-orange-300 p-8 dark:bg-slate-800 md:flex md:p-0">
    <figure className="flex rounded-3xl bg-orange-300 ">
        <img className="w-96 rounded-l-3xl" src={imageSrc} alt={imageAlt} />
        <div className="space-y-4 pt-6 text-center md:p-8 md:text-left">
            <blockquote>
                <p className="text-lg font-medium">{description}</p>
            </blockquote>
            <figcaption className="font-medium">
                <div className="text-yellow-800 dark:text-sky-400">{name}</div>
                <div className="text-gray-700 dark:text-slate-500">{address}</div>
            </figcaption>
        </div>
    </figure>
);

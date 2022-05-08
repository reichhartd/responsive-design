import React, { useMemo } from 'react';

export interface ICard {
    name: string;
    description: string;
    address: string;
    stars: number;
    imageSrc: string;
    imageAlt: string;
}

export const Card: React.FC<ICard> = ({ name, description, address, stars, imageSrc, imageAlt }) => {
    const rendererStars = useMemo(() => new Array(stars).fill(null).map(() => '⭐️'), [stars]);

    return (
        <figure className="flex rounded-3xl bg-orange-300 contrast-75 transition duration-150 ease-in hover:contrast-100 focus:contrast-100">
            <img className="w-96 rounded-l-3xl" src={imageSrc} alt={imageAlt} />
            <div className="space-y-4 pt-6 text-center md:p-8 md:text-left">
                <blockquote>
                    <p className="text-lg font-medium">{description}</p>
                </blockquote>
                <div className="flex justify-between">
                    <figcaption className="font-3medium">
                        <div className="text-yellow-800">{name}</div>
                        <div className="text-gray-700">{address}</div>
                    </figcaption>
                    <div className="ml-2 mt-auto">{rendererStars}</div>
                </div>
            </div>
        </figure>
    );
};

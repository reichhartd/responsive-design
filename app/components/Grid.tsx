import React, { useCallback, useMemo } from 'react';

import { cafeData } from '~/assets/data/cafeData';
import { Card } from '~/components/Card';

export const Grid: React.FC = () => {
    const renderedCards = useMemo(
        () =>
            cafeData.map(({ name, description, address, stars, imageSrc, imageAlt }) => (
                <Card
                    name={name}
                    description={description}
                    address={address}
                    stars={stars}
                    imageSrc={imageSrc}
                    imageAlt={imageAlt}
                    key={imageAlt}
                />
            )),
        []
    );

    //    <div className="grid gap-16 px-32 py-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">

    return <div className="">{renderedCards}</div>;
};

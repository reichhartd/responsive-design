import React, { useMemo } from 'react';

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

    return <div className="grid grid-cols-2 gap-16">{renderedCards}</div>;
};

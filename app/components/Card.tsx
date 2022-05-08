export interface ICard {
    src: string;
    alt: string;
}

export const Card: React.FC<ICard> = ({ src, alt }) => (
    <div>
        <img
            alt={alt}
            src={src}
            className="m-auto w-64 rounded-2xl grayscale transition hover:grayscale-0 focus:grayscale-0"
        />
    </div>
);

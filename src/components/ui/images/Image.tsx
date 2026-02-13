interface ImageProps {
    src: string;
    alt: string;
    className?: string;
    loading?: 'eager' | 'lazy';
}

const Image = ({ src, alt, className, loading }: ImageProps) => {
    return (
        <img
            src={src}
            alt={alt}
            className={className}
            loading={loading}
        />)
}
export default Image

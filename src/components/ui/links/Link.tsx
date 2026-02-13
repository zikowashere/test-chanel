interface LinksProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}
const Link = ({ href, children, className }: LinksProps) => {
    return (
        <a href={href} className={className}>{children}</a>
    )
}
export default Link
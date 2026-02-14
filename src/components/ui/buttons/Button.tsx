import './button.scss'

interface ButtonProps {
    children: React.ReactNode
    href?: string
    variant?: 'outline' | 'text'
    className?: string
    onClick?: () => void
}

const Button = ({ children, href, variant = 'outline', className = '', onClick }: ButtonProps) => {
    const classes = `btn btn--${variant} ${className}`.trim()

    if (href) {
        return (
            <a href={href} className={classes}>
                {children}
            </a>
        )
    }

    return (
        <button className={classes} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
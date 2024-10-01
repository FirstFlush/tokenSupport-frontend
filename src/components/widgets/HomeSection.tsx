import { Link } from "react-router-dom"


interface HomeSectionProps {
    href: string;
    text: string;
    title: string;
    buttonText: string;
    buttonClassName?: string;
}

const HomeSection: React.FC<HomeSectionProps> = ({ href, text, title, buttonText, buttonClassName }) => {

    return (
    <section className="py-16 bg-secondary text-center">
        <div>
            <h2 className="text-3xl font-bold text-primary">{title}</h2>
            <p className="text-text mt-4 mb-8">
                {text}
            </p>
        </div>
        <div>
            <Link to={href} className={`${buttonClassName || ""} mt-8 px-8 py-3 rounded-full shadow-lg transition-all`}>
            {buttonText}
            </Link>
        </div>
    </section>
    )
}

export default HomeSection
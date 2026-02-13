import './title.scss'
const Title = ({ title, description }: { title: string, description: string }) => {
    return (
        <div className="title">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default Title;
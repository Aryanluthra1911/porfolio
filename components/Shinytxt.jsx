import './Shinytxt.css';

const Shinytxt = ({onClick, text, disabled = false, speed = 5, className = '' }) => {
    const animationDuration = `${speed}s`;
    return (
        <div onClick={onClick}
            className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
            style={{ animationDuration }}
        >
            {text}
        </div>
    );
};

export default Shinytxt;

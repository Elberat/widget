import React, { useEffect, useState } from 'react';
import Avatar from './../../widget-icon/girl.svg';

const AiMessage = ({ message }) => {
    return (
        <div
            style={{
                color: '#FFF',
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'space-between',
                padding: '20px',
            }}
        >
            <img
                src={Avatar}
                alt='avatar'
                width='40px'
            />
            <span
                style={{
                    textAlign: 'left',
                    width: '92%',
                    paddingRight: '50px',
                }}
            >
                <Typewriter
                    text={message}
                    delay={50}
                />
            </span>
        </div>
    );
};

const Typewriter = ({ text, delay }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText((prevText) => prevText + text[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);

    return <span>{currentText}</span>;
};

export default AiMessage;

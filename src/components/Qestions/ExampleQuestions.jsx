import React from 'react';
import { useDispatch } from 'react-redux';
import { postChat } from '../../store/actions/chat-actions';

const ExampleQuestions = (props) => {
    const { text, setChat } = props;
    const dispatch = useDispatch();

    function generateRandomTextWithSpaces(length) {
        const characters =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
        let randomText = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomText += characters.charAt(randomIndex);
        }

        return randomText;
    }

    const click = (message) => {
        setChat((prev) => [
            ...prev,
            { author: 'user', message: message, id: Date.now() },
        ]);

        setTimeout(() => {
            const randomText = generateRandomTextWithSpaces(50);
            setChat((prev) => [
                ...prev,
                { author: 'chat', message: randomText, id: Date.now() },
            ]);
        }, 1000);
    };

    return (
        <div
            style={{
                borderRadius: '12px',
                border: '2px solid rgba(231, 231, 231, 0.08)',
                background: 'rgba(255, 255, 255, 0.08)',
                padding: '20px 24px',
                width: '30%',
                cursor: 'pointer',
            }}
            // onClick={() => dispatch(postChat(text))}
            onClick={() => click(text)}
        >
            <p
                style={{
                    fontSize: '14px',
                    color: '#FFF',
                    fontWeight: '400',
                    lineHeight: '138.523%',
                }}
            >
                {text}
            </p>
        </div>
    );
};

export default ExampleQuestions;

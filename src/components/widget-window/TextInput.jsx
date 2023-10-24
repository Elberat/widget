import React, { useState } from 'react';
import Telegram from './../../static/telegram.svg';
import { useDispatch } from 'react-redux';
import { postChat } from '../../store/actions/chat-actions';

const TextInput = ({ chat, setChat }) => {
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    // const click = () => {
    //     dispatch(postChat(message));
    //     setMessage('');
    // };

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

    // Здесь 50 - желаемая длина случайного текста

    const click = () => {
        setChat((prev) => [
            ...prev,
            { author: 'user', message: message, id: Date.now() },
        ]);

        setMessage('');

        setTimeout(() => {
            const randomText = generateRandomTextWithSpaces(50);
            setChat((prev) => [
                ...prev,
                { author: 'chat', message: randomText, id: Date.now() },
            ]);
        }, 1000);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            click();
        }
    };

    return (
        <div
            style={{
                marginTop: '10px',
                width: '100%',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.32)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative',
                color: 'rgba(255, 255, 255, 1)',
                background: 'rgba(255, 255, 255, 0.08)',
            }}
        >
            <input
                placeholder='Send a message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                style={{
                    width: '100%',

                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: 'none',
                    color: 'rgba(255, 255, 255, 1)',
                    background: 'rgba(255, 255, 255, 0.08)',
                }}
            />

            <img
                style={{
                    cursor: 'pointer',
                    background: 'rgba(255, 255, 255, 0.08)',
                    padding: '10px',
                }}
                src={Telegram}
                alt=''
                onClick={click}
            />
        </div>
    );
};

export default TextInput;

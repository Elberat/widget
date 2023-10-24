import React, { useState } from 'react';
// import Telegram from './../../static/telegram.svg';
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

            {/* <img
                style={{
                    cursor: 'pointer',
                    background: 'rgba(255, 255, 255, 0.08)',
                    padding: '10px',
                }}
                src={Telegram}
                alt=''
                onClick={click}
            /> */}

            <div
                style={{
                    cursor: 'pointer',
                    background: 'rgba(255, 255, 255, 0.08)',
                    padding: '8px',
                }}
            >
                <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M2.56322 7.8854C2.02122 8.1129 1.6848 8.5179 1.67972 9.09123C1.67622 9.49206 1.94672 10.0304 2.48872 10.2504C2.71197 10.3412 5.84655 10.7629 5.84655 10.7629C5.84655 10.7629 6.67622 13.3854 6.97522 14.3071C7.0618 14.5737 7.11114 14.7046 7.30114 14.8787C7.62347 15.1737 8.16839 15.0813 8.40405 14.8446C9.02755 14.2196 10.0131 13.2554 10.0131 13.2554L10.4278 13.5929C10.4278 13.5929 12.2696 15.0621 13.2763 15.7537C13.8691 16.1612 14.2805 16.5862 14.9476 16.5887C15.2875 16.5904 15.8326 16.4212 16.1929 16.0087C16.431 15.7362 16.5837 15.3004 16.6428 14.9096C16.7771 14.0221 18.3531 4.42541 18.3464 4.08957C18.3357 3.55374 17.885 3.25207 17.5103 3.2554C17.275 3.2579 17.0811 3.32624 16.6496 3.45791C13.3117 4.47708 2.7843 7.7929 2.56322 7.8854ZM15.0131 5.7554C15.0131 5.7554 10.6147 9.58374 8.85714 11.3454C8.29405 11.9096 8.2543 12.8779 8.2543 12.8779L7.34581 9.97123L15.0131 5.7554Z'
                        fill='white'
                    />
                </svg>
            </div>
        </div>
    );
};

export default TextInput;

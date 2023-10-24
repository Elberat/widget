import React from 'react';
import Avatar from './../../widget-icon/girl.svg';

const MyMessage = ({ message }) => {
    return (
        <div
            style={{
                color: 'rgba(255, 255, 255, 0.70)',
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'space-between',
                padding: '20px',
            }}
        >
            <span
                style={{
                    textAlign: 'right',
                    width: '92%',
                    paddingLeft: '50px',
                }}
            >
                {message}
            </span>
            <img
                src={Avatar}
                alt='avatar'
                width='40px'
            />
        </div>
    );
};

export default MyMessage;

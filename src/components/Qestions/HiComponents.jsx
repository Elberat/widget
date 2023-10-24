import React from 'react';

const HiComponent = () => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding:'10vh 0px',
            }}
        >
            <span style={{ fontSize: '40px', color:'rgba(255, 255, 255, 1)' }}>Hi, how can I help you?</span>
        </div>
    );
};

export default HiComponent;

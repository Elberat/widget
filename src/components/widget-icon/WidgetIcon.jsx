import React from 'react';
import Girl from './girl.svg';

const WidgetIcon = ({ switcher }) => {
    return (
        <div
            style={{
                width: '60px',
                height: '87px',
                backgroundColor: 'black',
                borderRadius: '8px',
                padding: '8px 0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
                cursor: 'pointer',
                position: 'absolute',
                bottom: '30px',
                right: '30px',
            }}
            onClick={switcher}
        >
            <img
                width='40px'
                src={Girl}
                alt='icon'
            />
            <p style={{ color: 'white' }}>⌘+K</p>
        </div>
    );
};

export default WidgetIcon;

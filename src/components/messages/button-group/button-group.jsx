import React from 'react';
import ActionButton from '../action-button/action-button';

const ButtonGroup = () => {
    return (
        <div style={{display:'flex', gap:'12px'}}>
            <ActionButton />
            <ActionButton />
            <ActionButton />
            <ActionButton />
        </div>
    );
};

export default ButtonGroup;

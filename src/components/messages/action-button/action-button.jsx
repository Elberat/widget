import React from 'react';

const ActionButton = () => {
    return (
        <button
            style={{
                padding: '6px 12px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.24)',
                border: 'none',
                color: '#FFFF',
                cursor: 'pointer',
                display:'flex',
                alignItems:'center'
            }}
        >
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
            >
                <path
                    d='M2 3.33333H10M6 2V3.33333M6.69867 9.66667C5.67207 8.6039 4.85032 7.36088 4.27467 6M8.33333 12H13M7.33333 14L10.6667 7.33333L14 14M8.50067 3.33333C7.85533 7.18 5.38 10.4067 2 12.086'
                    stroke='#EEEEEE'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                />
            </svg>{' '}
            Translate
        </button>
    );
};

export default ActionButton;

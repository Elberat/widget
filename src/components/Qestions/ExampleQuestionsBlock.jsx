import React from 'react';
import ExampleQuestions from './ExampleQuestions';

const arr = [
    'Allows user to provide follow-up corrections',
    'May occasionally produce harmful instructions or biased',
    'How do I make an HTTP request in Javascript?',
    'Trained to decline inappropriate requests',
    'Limited knowledge of world and events after 2021',
    'Got any creative ideas for a 10 year old’s birthday?',
];

const ExampleQuestionsBlock = ({setChat}) => {
 
    return (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                justifyContent: 'space-between',
                alignItems: 'stretch',
                marginBottom: '50px',
            }}
        >
            {arr.map((item) => (
                <ExampleQuestions
                    text={item}
                    key={item}
                    setChat={setChat}
                />
            ))}
        </div>
    );
};

export default ExampleQuestionsBlock;

import React, { useEffect, useRef, useState } from 'react';
import HiComponent from '../Qestions/HiComponents';
import ExampleQuestionsBlock from '../Qestions/ExampleQuestionsBlock';
import TextInput from './TextInput';
import PoveredBy from './PoveredBy';
import MyMessage from '../messages/my-message/my-message';
import AiMessage from '../messages/AIMessage/ai-message';
import ButtonGroup from '../messages/button-group/button-group';
import { useSelector } from 'react-redux';

const WidgetWindow = () => {
    const [chat, setChat] = useState([
        // { author: 'user', message: 'hello', id: '1' },
        // { author: 'chat', message: 'hello', id: '2' },
    ]);
    // const chat = useSelector((state) => state.chatReducer.chat.data);
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    useEffect(() => {
        scrollToBottom();
    }, [chat]);

    return (
        <div
            style={{
                width: '65vw',
                height: '70vh',
                backgroundColor: '#343541',
                margin: '15vh auto',
                borderRadius: '24px',
                padding: '20px 40px',
                overflow: 'hidden',
            }}
        >
            {!chat.length ? (
                <>
                    <HiComponent />
                    <ExampleQuestionsBlock setChat={setChat}/>
                </>
            ) : (
                <>
                    <div
                        style={{
                            overflow: 'scroll',
                            height: '80%',
                        }}
                    >
                        {chat.length ? (
                            chat.map((item) =>
                                item?.author === 'user' ? (
                                    <MyMessage
                                        message={item.message}
                                        key={item.id}
                                    />
                                ) : (
                                    <AiMessage
                                        message={item.message}
                                        key={item.id}
                                    />
                                )
                            )
                        ) : (
                            <></>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                    <ButtonGroup />
                </>
            )}

            <TextInput
                setChat={setChat}
                chat={chat}
            />
            <PoveredBy />
        </div>
    );
};

export default WidgetWindow;

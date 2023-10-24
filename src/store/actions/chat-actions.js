import http from './../service/service';
import {
    chatReducer,
    setChat,
    setChatError,
    setChatLoading,
    setChatSuccess,
} from '../reducers/chat-reducers';

export const fetchChat = () => async (dispatch) => {
    dispatch(setChatLoading());
    try {
        const { data } = await http('/chat/');
        dispatch(setChat(data));
    } catch (error) {
        console.log(error.message);
        dispatch(setChatError(error.message));
    }
};

export const postChat = (message) => async (dispatch) => {
    dispatch(setChatLoading());
    try {
        const postData = {
            message: message,
            author: 'user',
        };
        const aiData = {
            message: 'I dont know, sorry. Try later',
            author: 'chat',
        }

        console.log(postData, 'postData');

        const { data } = await http.post('/chat/', postData);
        const { aidata } = await http.post('/chat/', aiData);

        dispatch(fetchChat());
    } catch (error) {
        console.log(error.message);
        dispatch(setChatError(error.message));
    }
};

import {
    FETCH_CHAT,
    FETCH_CHAT_ERROR,
    FETCH_CHAT_LOADING,
    FETCH_CHAT_SUCCESS,
} from '../consts';

const initialState = {
    chat: {
        isLoading: false,
        error: '',
        data: [],
    },
};

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHAT:
            return {
                chat: { ...state.chat, isLoading: false, data: action.payload },
            };

        case FETCH_CHAT_LOADING:
            return {
                chat: { ...state.chat, isLoading: true },
            };

        case FETCH_CHAT_SUCCESS:
            return {
                chat: { ...state.chat, isLoading: false },
            };

        case FETCH_CHAT_ERROR:
            return {
                chat: {
                    ...state.chat,
                    isLoading: false,
                    error: action.payload,
                },
            };

        default:
            return state;
    }
};

export const setChat = (payload) => ({ type: FETCH_CHAT, payload });

export const setChatLoading = () => ({ type: FETCH_CHAT_LOADING });

export const setChatSuccess = (payload) => ({
    type: FETCH_CHAT_SUCCESS,
    payload,
});

export const setChatError = (msg) => ({ type: FETCH_CHAT_ERROR, payload: msg });

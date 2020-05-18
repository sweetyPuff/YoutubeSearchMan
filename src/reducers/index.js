import config from '../config';

const initialState = {
    videoList: null,
    loading: false,
    errorMsg: '',
    totalPage: 0
}

export default function todosReducer(state = initialState, action) {
    switch (action.type) {
      case 'WAITING_GET_VIDEO':
        return {
            ...state,
            loading: true,
            errorMsg: ''
        };
      case 'GET_VIDEO_SUCCESS':
        return {
            ...state,
            videoList: action.payload.items.filter(item=>item.id.channelId === undefined),
            totalPage: Math.ceil(config.maxResults / config.videosPerPage),
            loading: false,
            errorMsg: ''
        };
      case 'GET_VIDEO_FAILED':
        return {
            ...state,
            errorMsg: action.payload.errorMsg,
            loading: false
        };
      default:
        return state;
    }
  }
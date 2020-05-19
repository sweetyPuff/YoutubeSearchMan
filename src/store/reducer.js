import config from '../config';
import initialState from './state';

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
            errorMsg: '',
            activePage: 1
        };
      case 'GET_VIDEO_FAILED':
        return {
            ...state,
            errorMsg: action.payload.errorMsg,
            videoList: null,
            loading: false
        };
      case 'SET_ACTIVE_PAGE':
        return {
          ...state,
          activePage: action.payload.activePage
        }
      default:
        return state;
    }
  }
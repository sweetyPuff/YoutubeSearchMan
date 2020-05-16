const initialState = {
    videoList: null,
    loading: false,
    errorMsg: '',
    nextPageToken: '',
}

export default function todosReducer(state = initialState, action) {
    switch (action.type) {
      case 'WAITING_GET_VIDEO':
        return {
            ...state,
            loading: true,
        };
      case 'GET_VIDEO_SUCCESS':
        return {
            ...state,
            videoList: action.payload.items.filter(item=>item.id.channelId === undefined),
            nextPageToken: action.payload.nextPageToken,
            loading: false,
        };
      case 'GET_VIDEO_FAILED':
        return {
            ...state,
            errorMsg: action.payload,
            loading: false
        };
      default:
        return state;
    }
  }
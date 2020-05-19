import config from '../config';
import axios from 'axios';

export const searchListOfVideo = (query) => (dispatch) => {
    if (query === '') {
      dispatch(getVideoListFailed("Please input your text"));
      return;
    }

    dispatch(waitGetVideo());
    let url = `${config.googleUrl}?part=snippet&key=${config.apiKey}&q=${query}&maxResults=${config.maxResults}`;

    axios.get(url)
    .then(res => {
        if (res.status === 200) {
            dispatch(getVideoListSuccess(res.data));
        } else {
            console.log('eee');
            dispatch(getVideoListFailed("There is an error occurs"));
        }
    })
    .catch(err => {
        dispatch(getVideoListFailed("There is an error occurs"));
    })
  };

  export const waitGetVideo = () => ({
      type: 'WAITING_GET_VIDEO'
  })

  export const getVideoListSuccess = res => ({
    type: 'GET_VIDEO_SUCCESS',
    payload: {
      ...res
    }
  });

  export const getVideoListFailed = errorMsg => ({
    type: 'GET_VIDEO_FAILED',
    payload: {
      errorMsg
    }
  });

  export const setActivePage = activePage => ({
    type: 'SET_ACTIVE_PAGE',
    payload: {
      activePage
    }
  });
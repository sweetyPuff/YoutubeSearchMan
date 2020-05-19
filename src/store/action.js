import config from '../config';
import axios from 'axios';

export const searchListOfVideo = (query) => (dispatch) => {
    if (query === '') {
      dispatch(getVideoListFailed("Please input your text"));
      return;
    }

    dispatch(waitGetVideo());
    if (window.sessionStorage.getItem('videoList') !== null && JSON.parse(window.sessionStorage.getItem('videoList')).find((x)=>{return x.query === query}) !== undefined){
      const cached = JSON.parse(window.sessionStorage.getItem('videoList')).find((x)=>{return x.query === query});
      dispatch(getVideoListSuccess(cached.data));
    }
    else {
      let url = `${config.googleUrl}?part=snippet&key=${config.apiKey}&q=${query}&maxResults=${config.maxResults}`;
      axios.get(url, {timeout: config.timeoutMs})
      .then(res => {
          if (res.status === 200) {
              if (res.data.items.length === 0) {
                dispatch(getVideoListFailed("There is no result"));
                return;
              }

              const cacheData = {
                'query': query,
                'data': res.data
              };
              const cacheList = JSON.parse(window.sessionStorage.getItem('videoList'));
              if (cacheList === null) {
                window.sessionStorage.setItem('videoList', JSON.stringify([cacheData]));
              }
              else {
                cacheList.push(cacheData);
                if (cacheList.length > config.latestCacheSize)
                  cacheList.shift();
                window.sessionStorage.setItem('videoList', JSON.stringify(cacheList));
              }
              dispatch(getVideoListSuccess(res.data));
          } else {
              dispatch(getVideoListFailed("There is an error occurs"));
          }
      })
      .catch(err => {
          dispatch(getVideoListFailed("There is an error occurs"));
      })
    }
    
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
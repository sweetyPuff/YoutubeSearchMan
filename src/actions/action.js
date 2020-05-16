import config from '../config';
import axios from 'axios';

const searchListOfVideo = (query, nextPageToken) => (dispatch) => {
    dispatch(waitGetVideo());
    let url = `${config.googleUrl}?part=snippet&key=${config.apiKey}&q=${query}&maxResults=${config.maxResults}`;
    if (nextPageToken !== '')
      url += `&pageToken=${nextPageToken}`;

    axios.get(url)
    .then(res => {
        console.log(res.data);
        if (res.status === 200) {
            dispatch(getVideoListSuccess(res.data));
        } else {
            dispatch(getVideoListFailed("Failed"));
        }
    })

    // return new Promise((resolve, reject) => {
    //     let url = ``;
    //     fetch(url, {
    //         method: 'GET'
    //     }).then(res => {
    //         console.log(res);

    //         if (res.status === 200) {
    //             console.log('~~~~~');
    //             console.log(res.clone().json());
    //             dispatch(getVideoListSuccess(res.clone().json()));
    //             resolve(res.clone().json());

    //         } else {
    //             dispatch(getVideoListFailed("Failed"));
    //             reject(res);
    //         }
    //     }).then(res => {
    //         console.log(res.clone().json());
    //         resolve(res);
    //         dispatch(getVideoListFailed("Failed"));
    //     }).catch(err => {
    //         reject(err);
    //         dispatch(getVideoListFailed("Failed"));
    //     })
    // });
  };

  const waitGetVideo = () => ({
      type: 'WAITING_GET_VIDEO'
  })

  const getVideoListSuccess = todo => ({
    type: 'GET_VIDEO_SUCCESS',
    payload: {
      ...todo
    }
  });

  const getVideoListFailed = errMsg => ({
    type: 'GET_VIDEO_FAILED',
    payload: {
      ...errMsg
    }
  });

  export default searchListOfVideo;
import React from 'react';
import { connect } from 'react-redux'
import { MainContentWrapper } from '../wrapper/MainContentWrapper';

let VideosTemplate = ({ videoList, loading }) => {
    let videosRender = '';
    if(videoList !== null && videoList.length > 0){
       videosRender = videoList.map((video, index) =>(
       <li className="content-item" key={`${index}`}>
          <div className="img-container"></div>
          <div className="title">{`${video.snippet.title.replace('&amp;', '&')}`}</div>
          <div className="author">{`${video.snippet.channelTitle.replace('&amp;', '&')}`}</div>
       </li>
      )
     )
    }
   if(loading){
    videosRender = <h3 className="loading-indicator">Loading ...</h3>
  }

  return (
   <MainContentWrapper>
     <ul className="content-list">
      {videosRender}
     </ul>
   </MainContentWrapper>
  )
}
const mapStateToProps = (state) => ({
  videoList: state.videoList,
  loading: state.loading
})

VideosTemplate = connect(mapStateToProps,null)(VideosTemplate)
export default VideosTemplate;
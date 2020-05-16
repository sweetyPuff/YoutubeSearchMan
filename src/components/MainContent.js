import React from 'react';
import { connect } from 'react-redux'
import { MainContentWrapper } from '../wrapper/MainContentWrapper';

let VideosTemplate = ({ videoList, loading }) => {
    let videosRender = '';
    if(videoList !== null && videoList.length > 0){
       videosRender = videoList.map((video, index) =>(
       <div key={`${index}`}>
          <h2>{`${video.snippet.title}`}</h2>
       </div>
      )
     )
    }
   if(loading){
    videosRender = <h3 className="loading-indicator">Loading ...</h3>
  }

  return (
   <MainContentWrapper>
     {videosRender}
   </MainContentWrapper>
  )
}
const mapStateToProps = (state) => ({
  videoList: state.videoList,
  loading: state.loading
})

VideosTemplate = connect(mapStateToProps,null)(VideosTemplate)
export default VideosTemplate;
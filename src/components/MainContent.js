import React from 'react';
import { connect } from 'react-redux'
import { MainContentWrapper } from '../wrapper/MainContentWrapper';
import VideoImage from './VideoImage';
import Pagination from './Pagination';

const videoOnClick = (vid) => {
    window.open(`https://www.youtube.com/watch?v=${vid}`);
}

let VideosTemplate = ({ videoList, loading, totalPage }) => {
    let videosRender = '';
    if(videoList !== null && videoList.length > 0){
       videosRender = videoList.map((video, index) =>(
       <li key={`${index}`} onClick={()=>videoOnClick(video.id.videoId)}>
          <VideoImage video={video}></VideoImage>
       </li>
      )
     )
    }
   if(loading){
    videosRender = <h3 className="loading-indicator">Loading ...</h3>
  }

  return (
   <MainContentWrapper>
     <div className="content-wrapper">
        <ul className="content-list">
            {videosRender}
        </ul>
     </div>
      <Pagination totalPage={totalPage} activePage={1} />
   </MainContentWrapper>
  )
}
const mapStateToProps = (state) => ({
  videoList: state.videoList,
  loading: state.loading,
  totalPage: state.totalPage
})

VideosTemplate = connect(mapStateToProps,null)(VideosTemplate)
export default VideosTemplate;
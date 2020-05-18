import React from 'react';
import { connect } from 'react-redux'
import { MainContentWrapper } from '../wrapper/MainContentWrapper';
import VideoImage from './VideoImage';
import Pagination from './Pagination';
import loadingIcon from '../assets/loading.png';

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


  const Loading = () => {
   if(loading){
      console.log(loading);
      return (
        <div className="loading-img-cotainer"><img src={loadingIcon} alt=""/></div>
      )
   }
   else {
      return null;
   }
  }

  return (
   <MainContentWrapper>
     <div className="content-wrapper">
        <ul className="content-list">
            {videosRender}
        </ul>
     </div>
     <Loading />
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
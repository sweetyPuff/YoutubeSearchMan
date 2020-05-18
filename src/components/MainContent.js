import React, { useState } from 'react';
import { connect } from 'react-redux'
import { MainContentWrapper } from '../wrapper/MainContentWrapper';
import VideoImage from './VideoImage';
import Pagination from './Pagination';
import loadingIcon from '../assets/loading.png';
import config from '../config';

const videoOnClick = (vid) => {
    window.open(`https://www.youtube.com/watch?v=${vid}`);
}

const getResultPerPage = (list, activePage) => {
   let result = [];
   for (let i = ((activePage-1)*config.videosPerPage); i < ((config.videosPerPage)*activePage); i++) {
      if (i < list.length)
         result.push(list[i]);
   }
   return result;
}

let VideosTemplate = ({ videoList, loading, totalPage, errorMsg }) => {
   const [activePage, setActivePage] = useState(1);
   let videosRender = '';
   if(videoList !== null && videoList.length > 0){
      videosRender = getResultPerPage(videoList, activePage).map((video, index) =>(
         <li key={`${index}`} onClick={()=>videoOnClick(video.id.videoId)}>
            <VideoImage video={video}></VideoImage>
         </li>
      ))
   }


  const Loading = () => {
   if(loading){
      return (
        <div className="loading-img-cotainer"><img src={loadingIcon} alt=""/></div>
      )
   }
   else {
      if (errorMsg !== '') {
         return (
            <div className="loading-img-cotainer"><span>{errorMsg}</span></div>
         )
      }
      else
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
      <Pagination totalPage={totalPage} activePage={activePage} setActivePage={setActivePage} />
   </MainContentWrapper>
  )
}
const mapStateToProps = (state) => ({
  videoList: state.videoList,
  loading: state.loading,
  totalPage: state.totalPage,
  errorMsg: state.errorMsg
})

VideosTemplate = connect(mapStateToProps, null)(VideosTemplate)
export default VideosTemplate;
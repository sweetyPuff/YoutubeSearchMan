import React from 'react';
import { connect } from 'react-redux'
import { MainContentWrapper } from '../wrapper/MainContentWrapper';
import VideoImage from './VideoImage';
import Pagination from './Pagination';
import loadingIcon from '../assets/loading.png';
import config from '../config';
import { setActivePage } from '../store/action';

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

let VideosTemplate = ({ videoList, loading, totalPage, errorMsg, activePage, setActivePage }) => {
   let videosRender = '';
   if(!loading && videoList !== null && videoList.length > 0){
      videosRender = getResultPerPage(videoList, activePage).map((video, index) =>(
         <li key={`${index}`} onClick={()=>videoOnClick(video.id.videoId)}>
            <VideoImage video={video}></VideoImage>
         </li>
      ))
   }


   const Loading = () => {
      if (loading){
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

  const PageinationControl = () => {
     if (!loading && videoList !== null && videoList.length > 0) 
       return <Pagination totalPage={totalPage} activePage={activePage} setActivePage={setActivePage} />
     else
       return null;
  }

  return (
   <MainContentWrapper>
      <div className="content-wrapper">
         <ul className="content-list">
               {videosRender}
         </ul>
      </div>
      <Loading />
      <PageinationControl />
   </MainContentWrapper>
  )
}

const mapStateToProps = (state) => ({
  videoList: state.videoList,
  loading: state.loading,
  totalPage: state.totalPage,
  errorMsg: state.errorMsg,
  activePage: state.activePage
})

const mapDispatchToProps = {
   setActivePage: setActivePage
}

VideosTemplate = connect(mapStateToProps, mapDispatchToProps)(VideosTemplate)
export default VideosTemplate;
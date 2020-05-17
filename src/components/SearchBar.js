import React, { useState } from 'react';
import { connect } from 'react-redux'
import { SearchBarWrapper } from '../wrapper/SearchBarWrapper';
import searchListOfVideo from '../actions/action';
import searchIcon from '../assets/search.svg';

let SearchBar = ({nextPageToken, getVideos }) => {
    const [query, setQuery] = useState('');

    const onChangeInput = evt => {
        setQuery(evt.target.value);
    };

    return (
        <SearchBarWrapper>
            <div className="input-region">
                <input type="text" size="50" onChange={evt => (onChangeInput(evt))} placeholder="Search Here" />
                <img src={searchIcon} onClick={() => { getVideos(query, nextPageToken) }} style={{width:'100px',height:'50px'}} alt=""/>
            </div>
        </SearchBarWrapper>
    )
};

const mapStateToProps = (state) => ({
    nextPageToken: state.nextPageToken,
})
const mapDispatchToProps = { getVideos: searchListOfVideo }
SearchBar = connect(mapStateToProps, mapDispatchToProps)(SearchBar)
export default SearchBar;
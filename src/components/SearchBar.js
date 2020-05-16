import React, { useState } from 'react';
import { connect } from 'react-redux'
import { SearchBarWrapper } from '../wrapper/SearchBarWrapper';
import searchListOfVideo from '../actions/action';

let SearchBar = ({nextPageToken, getVideos }) => {
    const [query, setQuery] = useState('');

    const onChangeInput = evt => {
        setQuery(evt.target.value);
    };

    return (
        <SearchBarWrapper>
            <input type="text" onChange={evt => (onChangeInput(evt))}/>
            <button onClick={() => { getVideos(query, nextPageToken) }} style={{width:'100px',height:'50px'}}> </button>
        </SearchBarWrapper>
    )
};

const mapStateToProps = (state) => ({
    nextPageToken: state.nextPageToken,
})
const mapDispatchToProps = { getVideos: searchListOfVideo }
SearchBar = connect(mapStateToProps, mapDispatchToProps)(SearchBar)
export default SearchBar;
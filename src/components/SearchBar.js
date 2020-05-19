import React, { useState } from 'react';
import { connect } from 'react-redux'
import { SearchBarWrapper } from '../wrapper/SearchBarWrapper';
import { searchListOfVideo } from '../store/action';
import searchIcon from '../assets/search.png';

let SearchBar = ({getVideos }) => {
    const [query, setQuery] = useState('');

    const onChangeInput = evt => {
        setQuery(evt.target.value);
    };

    return (
        <SearchBarWrapper>
            <div className="input-region">
                <input type="text" size="50" onChange={evt => (onChangeInput(evt))} placeholder="Search Here" />
                <img className="search-icon" src={searchIcon} onClick={() => { getVideos(query) }} alt=""/>
            </div>
        </SearchBarWrapper>
    )
};

const mapDispatchToProps = { getVideos: searchListOfVideo }
SearchBar = connect(null, mapDispatchToProps)(SearchBar)
export default SearchBar;
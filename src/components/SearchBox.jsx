import React from 'react';
import '/src/assets/css/search_box.css';

const SearchBox = ({searchChange}) => {
  return (
    <input type="text" placeholder="Search Robots" onChange={searchChange} autoFocus={true}/>
  );
}

export default SearchBox;
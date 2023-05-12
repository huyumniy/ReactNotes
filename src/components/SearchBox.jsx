import React from 'react';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const SearchBox = () => {
  const { setSearchTerm } = useContext(DataContext);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value.toLowerCase())
  };

  return (
    <div className='searchBox'>
      <label>
        <input 
        type="text"
        onChange={handleChange}
        placeholder='Search' />
      </label>
    </div>
  );
}

export default SearchBox;

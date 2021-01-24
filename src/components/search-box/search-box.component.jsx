import React from 'react';

import './search-box.styles.css';

export const SerachBox = ({placeholder, handleChange}) => (
    <input 
    className="search" 
    type='search' 
    placeholder={placeholder}
    onChange={handleChange}
  />
);
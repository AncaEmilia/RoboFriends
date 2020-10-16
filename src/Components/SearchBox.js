import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='pa2'>
            <input 
                className='pa2 ba b--red bg-danger'
                type='search' 
                placeholder=' Choose a robot !' 
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;
 
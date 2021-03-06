import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [category, setCategory] = useState('');
    
    const handleOnChange = ({target}) => {
        setCategory(target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(category.trim().length > 2){
            setCategories( categories => [category, ...categories]);
            setCategory('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type = "text"
                value = {category}
                placeholder = 'Write a Category'
                onChange = {handleOnChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}



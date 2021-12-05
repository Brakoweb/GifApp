import React from 'react'

export const Placeholder = ({categories}) => {
    console.log(categories)
    return (
        <div>
            {categories.length < 1 && <p className="placeholder"> Please write a category.</p> }
        </div>
    )
}

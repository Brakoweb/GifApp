import React from 'react'

export const Placeholder = ({categories}) => {
    console.log(categories.length)
    return (
        <div>
            {categories.length < 1 && <p className="placeholder"> Please write a category.</p> }
        </div>
    )
}

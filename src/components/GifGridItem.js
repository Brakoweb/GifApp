import React from 'react';

export const GifGridItem = ( {title, url} ) => {
    return (
        <li>
            <img src={url} alt={title} />
            <p>{title}</p>
        </li>
    )
}

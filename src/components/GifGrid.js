import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { GifGridItem } from './GifGridItem';

const GifGrid = ({category}) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=dSk47444odLsfLmWrYAwK1fxQfGviaPq';
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url,
            }
        });
        setImages(gifs);
    }

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {images.map(img => (
                            <GifGridItem 
                                key = {img.id}
                                {...img}
                            />
                    )
                )}
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}

export default GifGrid;

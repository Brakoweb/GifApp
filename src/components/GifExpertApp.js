import React, {useState} from 'react'
import { AddCategory } from './AddCategory';
import GifGrid from './GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Piece']);

    return (
        <div>
            <h2>{'GifApp'}</h2>
            <AddCategory setCategories = {setCategories} />
            <hr />
            <ol>
                {categories.map( element => 
                    <GifGrid category={element} key={element} />
                )}
            </ol>
        </div>
    )
}

export default GifExpertApp;

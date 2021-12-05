import React, {useState} from 'react'
import { AddCategory } from './AddCategory';
import GifGrid from './GifGrid';
import { Placeholder } from './Placeholder';

const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    const handleReset = () => setCategories([]);

    return (
        <div>
            <h2>GifApp</h2>
            <AddCategory setCategories = {setCategories} />
            <hr />
            <ol>
                {categories.map( element => 
                    <GifGrid category={element} key={element} />
                )}
            </ol>

            <Placeholder categories={categories} />

            <button className="go-top" onClick={handleReset}>Reset</button>
        </div>
    )
}

export default GifExpertApp;

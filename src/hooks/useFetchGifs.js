import { useState, useEffect } from "react";
import { getGifs } from '../helpers/getGifs';
import Swal from 'sweetalert2';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    })

    useEffect(() => {
        getGifs(category)
            .then(imgs => {
                if (imgs.length < 1) {
                    setState({
                        data: [],
                        loading: false,
                    });
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'No results were found',
                        showConfirmButton: false,
                        timer: 2000
                    });
                }else{
                        setState({
                        data: imgs,
                        loading: false,
                        })
                    }
                
                });

    }, [category])

    return state;
}

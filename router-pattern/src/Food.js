import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const GIPHY_URL = 'https://api.giphy.com/v1'

const Food = () => {
    const { name } = useParams();
    const [src, setSrc] = useState(null);

    useEffect(() => {
        async function fetchGif(searchTerm) {
            try {
                let res = await axios.get(`${GIPHY_URL}/gifs/search`, {
                    params: { q: searchTerm, api_key: "xNGCviv54DQzOaDGHCL1w85Z8mwJNe0e"}
                });
                setSrc(res.data.dara[0].images.original.url);
            } catch(e) {
                console.log(e);
            }
        }
        fetchGif(name); // execute asyn func
    }, [name]);


    let img = src ? <img src={src} alt={name} /> : null;
    return (
        <div>
            <h1>
                Here's a pic of {name}.
            </h1>
        </div>
    ) 

}

export default Food;
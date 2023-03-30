import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Home.css'
import { Link } from 'react-router-dom';

function Home() {

    const [MovieData, setMovieData] = useState([]);

    useEffect(() => {
        async function Movies() {
            const requestData = await axios.get('https://api.tvmaze.com/search/shows?q=all')
            setMovieData(requestData.data);
        }
        Movies();
    });

    

    return (
        <div className='ItemDiv' >
            {MovieData.map((element) => {
                return (
                   <div className='items' key={element.show.id}>
                        <div className='item' >
                            <img src={element.show.image ? element.show.image.medium : './poster.png'} alt='img' width='100px' />
                            <h6>{element.show.name}</h6>
                            <p>{element.show.rating.average ? `Rating : ${element.show.rating.average}` : 'No Ratings'}</p>
                            <Link className='summary' to={`/summary/${element.show.id}`}>View Summary</Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Home

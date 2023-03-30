import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Summary.css'

function Summary() {
    const [Data, setData] = useState([])
    const { id } = useParams()
    useEffect(() => {
        async function Movies() {
            const requestData = await axios.get('https://api.tvmaze.com/search/shows?q=all');
            const filterdata = requestData.data.filter(item => item.show.id == id);
            console.log(filterdata);
            setData(filterdata[0].show);
        }
        Movies();
    }, []);

    const removeAllTags=(text)=>{
        if(text===null ||text===''){
          return false;  
        }
        else{
            text=text.toString();
        }
        return text.replace(/(<([^>]+)>)/gi, '');
    };

    return (
        <div className='summaryDiv'>
            <div className='ImageDiv'><img src={Data.image ? Data.image.medium : '../poster.png'} alt="image" width='200px' /></div>
            <div className='detailsDiv'>
                <h2> {Data.name}</h2>
                <h7>{Data.rating ? `Rating - ${Data.rating.average}` : 'No Ratings'}</h7>
                <span>Genres - {Data.genres && Data.genres.map(genres => (
                    <span key={genres} className='genres'>{genres}</span>
                ))}</span>
                <div className="summaryItem">
                    <h5>Summary</h5>
                 <p>{Data.summary && removeAllTags(Data.summary)}</p>   
                </div>
            </div>

        </div>
    )
}

export default Summary
//html react parser
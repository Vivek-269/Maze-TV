import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Summary.css'

function Summary() {
    const [Data, setData] = useState([])
    const { id } = useParams()
    useEffect(() => {
        async function Movies() {
            const requestData = await axios.get('https://api.tvmaze.com/search/shows?q=all');
            const filterdata = requestData.data.filter(item => item.show.id == id);
            // console.log(filterdata);
            setData(filterdata[0].show);
        }
        Movies();
    }, []);

    const removeAllTags = (text) => {
        if (text === null || text === '') {
            return false;
        }
        else {
            text = text.toString();
        }
        return text.replace(/(<([^>]+)>)/gi, '');
    };

    return (
        <div className='summaryDiv'>
            <div className='ImageDiv'><img src={Data.image ? Data.image.medium : '../poster.png'} alt="image" width='200px' /></div>
            <div className='detailsDiv'>
                <h2> {Data.name}</h2>
                <h>{Data.rating ? `Rating - ${Data.rating.average}` : 'No Ratings'}</h>
                <span>Genres - {Data.genres && Data.genres.map(genres => (
                    <span key={genres} className='genres'>{genres}</span>
                ))}</span>
                <div className="summaryItem">
                    <h5>Summary</h5>
                    <p>{Data.summary && removeAllTags(Data.summary)}</p>
                </div>
                <Link
                    className='tickets'
                    to='/form'
                    type="button"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">Book Tickets</Link>
            </div>
            <div className="offcanvas offcanvas-end canvas" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h4 className="offcanvas-title" id="offcanvasExampleLabel">Payment GateWay</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="form">
                        <div className="InfoDiv">
                            <img src={Data.image ? Data.image.medium : '../poster.png'} alt="img" width='150px' />
                            <h4> {Data.name}</h4>
                        </div>
                        <div className='inputDiv'> <label >Contact Number</label>
                            <input type="text" placeholder='Contact No.'/></div>
                        <div className='inputDiv'>  <label >Email Address</label>
                            <input type="text" placeholder='Email Address'/></div>
                        <button>Proceed to Payment</button>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Summary
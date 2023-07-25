import React from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useFetchCards from '../utils/useFetchCards';
import useNetworkAvailibility from '../utils/useNetworkAvailibility';

const Cards = () => {
const network = useNetworkAvailibility();
const mobileData = useFetchCards();
if(network === false) {
    return <h2>No Internet Availibility, Please check your connection</h2>
}

  return (mobileData.length === 0) ? <Shimmer/> : (
    <div className="container cards-container">
        <div className="row">
            <button 
            className="btn btn-success mb-4"
            onClick={() => {
                const filteredPhones = mobileData.filter(topPhones => topPhones.price > 50);
                setMobileData(filteredPhones);
            }}
            >Top Phones</button>
        </div>
        <div className="row">
                {
                    mobileData.map((mobile) => {
                        return (
                            <div className="col-4" props={mobile.id}>
                                <Link to={"/detail/" + mobile.id}>
                                    <div className="card mobile-cards">
                                        <img src={mobile.thumbnail} className="card-img-top mobile-images" alt={mobile.title} />
                                            <div className="card-body">
                                                <h5 className="card-title">{mobile.title}</h5>
                                                <p className="card-text">{mobile.description}</p>
                                                <h4 className="card-text">Price: {mobile.price}</h4>
                                                <span className="card-text">Rating: {mobile.rating}</span>
                                            </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
        </div>
    </div>
  )
}

export default Cards
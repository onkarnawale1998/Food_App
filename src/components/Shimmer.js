import React from "react";

const Shimmer = () => {
    return (
        <>
            <input type="text" disabled />
            <button className="search-btn" disabled >Search</button>  
            <button className="filter-btn-shimmer" disabled >Top Rated Restaurants</button>
            <div className="shimmer-container">
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
            </div>
        </>
    );
};

export default Shimmer;
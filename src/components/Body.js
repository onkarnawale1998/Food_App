import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/constants";
import Error from "./Error";

const Body = () => {
    const [resListState, setResListState] = useState([]);
    const [originalList, setOriginalList] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false);
    const [buttonName, SetButtonName] = useState("Top Rated Restaurants");
    const [searchTxt, setSearchTxt] = useState("");
    const [notFound, setNotFound] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const data = await fetch(SWIGGY_API)
            const json = await data.json();
            const fetchedData = json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            setOriginalList(fetchedData);
            setResListState(fetchedData);
            setError(null);
        } catch (err) {
            setError(err);
        }
    }

    const handleFilter = () => {
        if (isFiltered) {
            setResListState(originalList);
            setIsFiltered(false);
            SetButtonName("Top Rated Restaurants");
        } else {
            const filteredResList = resListState.filter((res) => res.info.avgRating >= 4.2);
            setResListState(filteredResList);
            setIsFiltered(true);
            SetButtonName("All Restaurants");
        }
    };

    const handleSearch = () => {
        setNotFound(false);
        if (searchTxt === '') {
            setResListState(originalList);
        } else {
            const filteredRestaurants = originalList.filter((res) => res?.info?.name.toLowerCase()?.includes(searchTxt.toLowerCase()));
            (filteredRestaurants.length === 0) ? (setNotFound(true), setResListState(originalList)) : setResListState(filteredRestaurants);
        }

    }
    return error ? <Error error={error} /> : (resListState.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" onChange={(e) => setSearchTxt(e.target.value)} value={searchTxt} />
                    <button className="search-btn" onClick={handleSearch}>Search</button>
                </div>
                <button className="filter-btn" onClick={handleFilter}>{buttonName}</button>
            </div>
            {notFound && (
                <>
                    <p style={{ color: "red", marginTop: "8px" }}>
                        Warning: No matching items found!
                    </p>
                </>
            )}
            <h2>{isFiltered ? "Top Rated Restaurants" : "All Restaurants"}</h2>
            <div className="res-container">
                {resListState.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)}
            </div>
        </div>
    ));
};
export default Body;
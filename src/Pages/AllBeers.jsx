import React, { useState, useEffect } from 'react';
import Header from "../Components/Header"
import axios from 'axios';
import { Link } from "react-router-dom";


function AllBeers() {

    let [beers, setBeers] = useState([]);

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then((response) => {
                console.log(response);
                setBeers(response.data);
                console.log("beers, ", beers);
            })
            .catch((e) => console.log(e));

    }, []); //execute this effect only once

    return (
        <div>
            <Header />
            <div className="list" >
                {beers.map((beer) => {
                    return (
                        <div key={beer._id} className="beer-container" style={{ border: "1px black solid" }}>
                            <img src={beer.image_url} alt={beer.name} height="300px" style={{ padding: "20px" }} />
                            <Link to={`${beer._id}`}><p>{beer.name}</p></Link>

                            <p>{beer.tagline}</p>
                            <p>{beer.contributed_by}</p>


                        </div>
                    );
                })}
            </div>

        </div >
    );
}

export default AllBeers;

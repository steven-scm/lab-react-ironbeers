import React, { useState, useEffect } from 'react';
import Header from "../Components/Header"
import axios from 'axios';
import { Link, useParams } from "react-router-dom";


function OneBeer() {

    const [beer, setBeer] = useState({});
    const params = useParams();

    useEffect(() => {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then((response) => {
                console.log(response.data);
                setBeer(response.data);
            })
            .catch((e) => console.log(e));
    }, [params.id]);


    // if (!beer.name) return <div>Loading</div>;
    return (
        <div>
            <Header />
            <div className="beer">
                <img src={beer.image_url} alt={beer.name} height="300px" style={{ padding: "20px" }} />
                <h1>{beer.name}</h1>
                <h2>{beer.attenuation_level}</h2>
                <span>{beer.tagline}</span> &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;  <span>{beer.first_brewed}</span>
                <p>{beer.description}</p>
                <p>{beer.contributed_by}</p>

            </div>
        </div >
    );
}

export default OneBeer;

import React from 'react';
import { Link } from "react-router-dom";


function Home() {
    return (
        <div>
            <div className="container">
                <img src="/beers.png" alt="beers" />
                <Link to="/beers"><h1>All Beers</h1></Link>
            </div>
            <div className="container">
                <img src="/random-beer.png" alt="beers" />
                <Link to="/random-beer"><h1>Random Beer</h1></Link>
            </div>
            <div className="container">
                <img src="/new-beer.png" alt="beers" />
                <Link to="/new-beer"><h1>New Beer</h1></Link>
            </div>
        </div>
    );
}

export default Home;

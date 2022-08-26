import {Link} from "react-router-dom"
import {useState} from 'react'
import "./Nav.scss"

const Nav = () => {
 
 
    return (
        <div className="nav">
            <h1 className="beerTitle">Beers</h1>
            <Link to="/">Home</Link>
            <Link to="/ABV">High Alcohol (ABV value greater than 6%)</Link>
            <Link to ="/Classic">Classic Range (before 2010)</Link>
            <Link to="/Acidity">High Acidity (pH lower than 4)</Link>
            <Link to="/naBeers">Non Alcoholic Beers</Link>
        </div>
    )
}

export default Nav;

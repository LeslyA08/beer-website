import SearchBar from "../SearchBar/SearchBar";
import {Link} from "react-router-dom"
import "./Nav.scss"

const Nav = () => {
    return (
        <div>
            <p>Beers</p>
            <Link to="/ABV">ABV Filter</Link>
            <input type="checkbox" id="beer-classic" />
            <label for="beer-classic">Classic Range</label>
            <input type="checkbox" id="beer-acidity" />
            <label for="beer-acidity">High Acidity</label>
        </div>
    )
}

export default Nav;

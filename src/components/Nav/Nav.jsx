import SearchBar from "../SearchBar/SearchBar";
import "./Nav.scss"

const Nav = () => {
    return (
        <div>
            <p>Beers</p>
            <input type="checkbox" id="beer-abv" />
            <label for="beer-abv">High ABV (over 6%)</label>
            <input type="checkbox" id="beer-classic" />
            <label for="beer-classic">Classic Range</label>
            <input type="checkbox" id="beer-acidity" />
            <label for="beer-acidity">High Acidity</label>
        </div>
    )
}

export default Nav;
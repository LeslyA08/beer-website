import SearchBar from "../SearchBar/SearchBar";
import "./Nav.scss"

const Nav = () => {
    return (
        <div>
            <p>Beers</p>
            <input type="checkbox" id="beer-abv" />
            <label for="beer-abv">High ABV (over 6%)</label>
        </div>
    )
}

export default Nav;
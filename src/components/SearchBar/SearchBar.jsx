import "./SearchBar.scss"

const SearchBar = (props) =>{
    const {label, searchTerm, handleInput} = props;

    const capitalizedLabel= label[0].toUpperCase() + label.slice(1);

    return (
        <form>
            <label htmlFor={label}>
                {capitalizedLabel}
            </label>
            <input type="text"
            name={label}
            value={searchTerm}
            onInput={handleInput}
            />
        </form>
       

    )
}

export default SearchBar;
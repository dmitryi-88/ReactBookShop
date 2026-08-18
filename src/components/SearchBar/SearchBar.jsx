import styles from "./SearchBar.module.scss";

function SearchBar({ value, handleChange }) {
    return (
        <div className={styles.searchBarContainer}>
            <input
                id="search"
                type="text"
                placeholder="Поиск по названию..."
                value={value}
                onChange={handleChange}
            />
        </div>
    );
}

export default SearchBar;

import { useState } from "react";
import styles from "./FilterByAuthor.module.scss";

function FilterByAuthor({ books, handleSelect, reset, toggleReset }) {
    const [isActive, setIsActive] = useState(false);
    const toggleActive = () => {
        setIsActive((prev) => !prev);
    };

    const uniqueAuthors = [...new Set(books.map((book) => book.author))];

    return (
        <div className={styles.select}>
            <button className={styles.external} onClick={toggleActive}>
                Фильтр по автору
            </button>

            <div
                className={`${styles.resetFilters} ${reset ? styles.active : ""}`}
            >
                <button
                    onClick={() => {
                        toggleReset();
                        handleSelect("");
                    }}
                >
                    Все авторы
                </button>
            </div>

            <div
                className={`${styles.booksFilterContainer} ${isActive ? styles.active : ""}`}
            >
                {uniqueAuthors.map((author) => (
                    <button
                        name={author}
                        key={author}
                        onClick={(e) => {
                            handleSelect(e.target.name);
                            toggleActive();
                            if (!reset) {
                                toggleReset();
                            }
                        }}
                    >
                        {author}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default FilterByAuthor;

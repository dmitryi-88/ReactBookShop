import { useState } from "react";
import styles from "./FilterByAuthor.module.scss";

function FilterByAuthor({ books, handleSelect }) {
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
                className={`${styles.booksFilterContainer} ${isActive ? styles.active : ""}`}
            >
                {uniqueAuthors.map((author) => (
                    <button
                        name={author}
                        key={author}
                        onClick={(e) => {
                            handleSelect(e);
                            toggleActive();
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

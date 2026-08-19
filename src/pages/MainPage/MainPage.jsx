import styles from "./MainPage.module.scss";
//API
import { getCatalog } from "../../API/UseApi";
//COMPONENTS
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import LoadingPage from "../../components/LoadingPage/LoadingPage";
import BooksList from "../../components/BooksList/BooksList";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterByAuthor from "../../components/FilterByAuthor/FilterByAuthor";
import useDebounce from "../../hooks/UseDebounce";
//LIB
import { useEffect, useState, useMemo } from "react";

function MainPage() {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    //state для поиска по названию книги.
    const [searchRequest, setSearchRequest] = useState("");
    const debouncedSearchRequest = useDebounce(searchRequest);
    const handleRequest = (e) => {
        setSearchRequest(e.target.value);
    };

    // state для выбранного автора по фильтру.
    const [selectedAuthor, setSelectedAuthor] = useState("");
    const handleSelect = (value) => {
        setSelectedAuthor(value);
    };

    // state для сброса автора.
    const [reset, setReset] = useState(false);
    const toggleReset = () => {
        setReset((prev) => !prev);
    };

    // Фильтр книг по автору и названию.
    const filteredBooks = useMemo(() => {
        if (selectedAuthor) {
            const filteredByAuthor = books.filter(
                (book) => book.author === selectedAuthor,
            );
            return filteredByAuthor.filter((book) =>
                book.title
                    .toLowerCase()
                    .includes(debouncedSearchRequest.toLowerCase()),
            );
        }
        return books.filter((book) =>
            book.title
                .toLowerCase()
                .includes(debouncedSearchRequest.toLowerCase()),
        );
    }, [books, debouncedSearchRequest, selectedAuthor]);

    const loadCatalog = () => {
        getCatalog()
            .then((data) => setBooks(data))
            .catch((error) => setError(error))
            .finally(() => {
                setIsLoading(false);
            });
    };

    const retryCatalog = () => {
        setIsLoading(true);
        setError(null);
        loadCatalog();
    };

    useEffect(() => {
        loadCatalog();
    }, []);

    if (isLoading) {
        return <LoadingPage />;
    }

    if (error) {
        return (
            <ErrorPage
                message={`Упс.. Не удалось загрузить каталог! Ошибка: ${error}`}
                onRetry={retryCatalog}
            />
        );
    }

    return (
        <div className={styles.mainPageContainer}>
            <div className={styles.filterContainer}>
                <SearchBar value={searchRequest} handleChange={handleRequest} />
                <FilterByAuthor
                    books={books}
                    handleSelect={handleSelect}
                    reset={reset}
                    toggleReset={toggleReset}
                />
            </div>

            <div className={styles.catalogContainer}>
                <BooksList books={filteredBooks} />
            </div>
        </div>
    );
}

export default MainPage;

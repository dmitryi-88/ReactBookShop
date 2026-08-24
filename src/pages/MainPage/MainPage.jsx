import styles from "./MainPage.module.scss";
//API
import { getCatalog } from "../../API/UseApi.js";
//COMPONENTS
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import LoadingPage from "../../components/LoadingPage/LoadingPage";
import BooksList from "../../components/BooksList/BooksList";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterByAuthor from "../../components/FilterByAuthor/FilterByAuthor";
import useDebounce from "../../hooks/UseDebounce";
// Context
import ToastContext from "../../context/ToastContext.jsx";
// Libs
import { useState, useMemo, useContext } from "react";
import { useQuery } from "@tanstack/react-query";

function MainPage() {
    // Toast - уведомление
    const { isToast } = useContext(ToastContext);

    // GET запрос с помощтю useQuery
    const {
        data: books = [],
        isLoading,
        isError,
        error,
        refetch,
    } = useQuery({
        queryKey: ["books"],
        queryFn: getCatalog,
    });

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

    if (isLoading) {
        return <LoadingPage />;
    }

    if (isError) {
        return (
            <ErrorPage
                message={`Упс.. Не удалось загрузить страницу! Ошибка: ${error.message}`}
                onRetry={refetch}
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
                {isToast && isToast}
            </div>

            <div className={styles.catalogContainer}>
                <BooksList books={filteredBooks} />
            </div>
        </div>
    );
}

export default MainPage;

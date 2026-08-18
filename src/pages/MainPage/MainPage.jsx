import styles from "./MainPage.module.scss";
import { getCatalog } from "../../API/UseApi";
import ErrorPage from '../../components/ErrorPage/ErrorPage'
import LoadingPage from "../../components/LoadingPage/LoadingPage";
import BooksList from "../../components/BooksList/BooksList";
import { useEffect, useState } from "react";

function MainPage() {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadCatalog = () => {
        setIsLoading(true);
        setError(null);

        getCatalog()
            .then((data) => setBooks(data))
            .catch((error) => setError(error))
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        setTimeout(() => {
            loadCatalog();
        }, 1000);
    }, []);

    if (isLoading) {
        return <LoadingPage />;
    }

    if (error) {
        return (
            <ErrorPage
                message={`Упс.. Не удалось загрузить каталог! Ошибка: ${error}`}
                onRetry={loadCatalog}
            />
        );
    }

    return (
        <div className={styles.mainPageContainer}>
            <BooksList books={books} />
        </div>
    );
}

export default MainPage;

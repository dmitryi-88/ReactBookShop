import styles from "../styles/MainPage.module.scss";
import { getCatalog } from "../API/UseApi";
import ErrorPage from "../components/ErrorPage";
import LoadingPage from "../components/LoadingPage";
import CartButtonOnCard from "../microComponents/CartButtonOnCard";
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
            {books.map((book) => (
                <div className={styles.book} key={book.id}>
                    <div className={styles.bookBanner}>
                        {book.image ? (
                            <img src={book.image} alt={book.title}></img>
                        ) : (
                            <div className={styles.errorImage}>
                                <span>Упс...</span>
                                <span>
                                    Что то пошло не так при загрузке обложки
                                </span>
                            </div>
                        )}
                    </div>

                    <div className={styles.description}>
                        <span className={styles.title}>"{book.title}"</span>
                        <hr />
                        <span className={styles.author}>{book.author}</span>
                    </div>

                    <div className={styles.cardFooter}>
                        {book.stock ? (
                            <p>Осталось в наличии: {book.stock}</p>
                        ) : (
                            <p>Нет в наличии!</p>
                        )}

                        <hr />

                        <div className={styles.priceAndCart}>
                            <span>{book.price}₽</span>

                            <button disabled={book.stock ? true : false}>
                                <CartButtonOnCard />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MainPage;

import styles from "../styles/MainPage.module.scss";
import { useEffect, useState } from "react";

function MainPage() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const getCatalog = async () => {
            try {
                const response = await fetch("http://localhost:3001/books");

                if (!response.ok) {
                    throw new Error("HTTP error:", response.status);
                }

                const data = await response.json();
                setBooks(data);
            } catch (error) {
                console.error("Ошибка при отправке запроса к серверу:", error);
            }
        };

        getCatalog();
    }, []);

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
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3 5H5L7.2 16.2C7.4 17.2 8.3 18 9.3 18H17.5C18.5 18 19.4 17.3 19.7 16.3L21 10H6"
                                        stroke="currentColor"
                                        strokeWidth="1.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <circle
                                        cx="9.5"
                                        cy="21"
                                        r="1.5"
                                        fill="currentColor"
                                    />
                                    <circle
                                        cx="17.5"
                                        cy="21"
                                        r="1.5"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M18 3V7M16 5H20"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MainPage;

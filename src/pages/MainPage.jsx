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
                        <span>{book.title}</span>
                        <span>{book.author}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MainPage;

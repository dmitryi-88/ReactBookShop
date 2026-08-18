import CartButtonOnCard from "../../microComponents/CartButtonOnCard";
import styles from './BooksList.module.scss';

function BooksList({ books }) {
    return (
        <>
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
        </>
    );
}

export default BooksList;

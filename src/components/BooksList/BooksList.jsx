import styles from "./BooksList.module.scss";
// Context
import CartContext from "../../context/CartContext";
import ToastContext from "../../context/ToastContext";
import DescriptionContext from "../../context/DescriptionContext";
// Components
import CartButtonOnCard from "../../microComponents/CartButtonOnCard";
// Libs
import { memo, useContext } from "react";

const BooksList = memo(({ books }) => {
    const { dispatch } = useContext(CartContext);
    const { handlerToast } = useContext(ToastContext);
    const { handleClickImage, changeDescription } =
        useContext(DescriptionContext);

    return (
        <>
            {books.map((book) => (
                <div className={styles.book} key={book.id}>
                    <div className={styles.bookBanner}>
                        {book.image ? (
                            <img
                                onClick={() => {
                                    handleClickImage();
                                    changeDescription({
                                        name: book.title,
                                        author: book.author,
                                        description: book.description,
                                    });
                                }}
                                src={book.image}
                                alt={book.title}
                            ></img>
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

                            <button
                                onClick={() => {
                                    dispatch({
                                        type: "ADD",
                                        payload: {
                                            id: book.id,
                                            title: book.title,
                                            author: book.author,
                                            price: book.price,
                                            stock: book.stock,
                                            image: book.image,
                                        },
                                    });
                                    handlerToast();
                                }}
                                disabled={book.stock === 0}
                            >
                                <CartButtonOnCard />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
});

export default BooksList;

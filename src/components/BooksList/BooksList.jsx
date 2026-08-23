import CartButtonOnCard from "../../microComponents/CartButtonOnCard";
import styles from "./BooksList.module.scss";
import { memo, useContext } from "react";
import CartContext from "../../context/CartContext";
import { NavLink } from "react-router-dom";

const BooksList = memo(({ books }) => {
    const { dispatch } = useContext(CartContext);

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

                            <button
                                onClick={() =>
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
                                    })
                                }
                                disabled={book.stock === 0}
                            >
                                <NavLink to={"/cart"}>
                                    <CartButtonOnCard />
                                </NavLink>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
});

export default BooksList;

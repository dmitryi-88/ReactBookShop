import styles from "./BookDescription.module.scss";
import DescriptionContext from "../../context/DescriptionContext";
import { useContext } from "react";

function BookDescription() {
    const { isActiveDescription, description, handleClickImage } =
        useContext(DescriptionContext);

    return (
        <div
            className={`${styles.descriptionContainer} ${isActiveDescription ? styles.active : ""}`}
        >
            <div className={styles.closeButton}>
                <button onClick={handleClickImage}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div className={styles.info}>
                <h3>{description.name}</h3>
                <hr />
                <span className={styles.authorSpan}>"{description.author}"</span>
                <hr />
                <span className={styles.descSpan}>{description.description}</span>
            </div>
        </div>
    );
}

export default BookDescription;

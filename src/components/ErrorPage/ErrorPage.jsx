import styles from "./ErrorPage.module.scss";
import lib from "../../assets/BrokenLib.png";

function ErrorPage({ message, onRetry }) {
    return (
        <div className={styles.errorContainer}>
            <div className={styles.errorMessage}>
                <h2>{message}</h2>
                <img src={lib} alt="" />
            </div>

            <div className={styles.retry}>
                <button onClick={onRetry}>Повторить попытку</button>
            </div>
        </div>
    );
}

export default ErrorPage;

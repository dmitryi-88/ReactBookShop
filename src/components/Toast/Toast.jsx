import styles from "./Toast.module.scss";

function Toast() {
    return (
        <div className={styles.ToastContainer}>
            <span>✓ Книга добавлена в корзину</span> 
        </div>
    )
}

export default Toast
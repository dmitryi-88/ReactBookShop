import styles from "./LoadingPage.module.scss";
import loadGif from "../../assets/loading.gif";

function LoadingPage() {
    return (
        <div className={styles.loading}>
            <h2>Загружаем данные</h2>
            <img src={loadGif} alt="" />
        </div>
    );
}

export default LoadingPage;

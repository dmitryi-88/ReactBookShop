import styles from "./PageAnimation.module.scss";

function PageAnimation({ children }) {
    return <div className={styles.animationWrapper}>{children}</div>;
}

export default PageAnimation;

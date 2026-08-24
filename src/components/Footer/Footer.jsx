import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

import TelegramButton from "../../microComponents/TelegramButton";
import WhatsAppButton from "../../microComponents/WhatsAppButton";
import InstaButton from "../../microComponents/InstaButton";

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className={styles.footerContainer}>
            <div className={styles.socials}>
                <a
                    href="https://telegram.org/"
                    target="_blank"
                    aria-label="Telegram"
                >
                    <TelegramButton />
                </a>

                <a
                    href="https://www.whatsapp.com/"
                    target="_blank"
                    aria-label="WhatsApp"
                >
                    <WhatsAppButton />
                </a>

                <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    aria-label="Instagram"
                >
                    <InstaButton />
                </a>
            </div>

            <div className={styles.links}>
                <button onClick={scrollToTop}>Вернуться в начало</button>
            </div>

            <div className={styles.license}>
                <span>
                    © 2026 Books Place{" "}
                    <Link to={"https://github.com/dmitryi-88"} target="_blanc">
                        (dmitryi-88)
                    </Link>{" "}
                    . Все права защищены.
                </span>
            </div>
        </footer>
    );
}

export default Footer;

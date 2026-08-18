import styles from "./Footer.module.scss";

import TelegramButton from "../../microComponents/TelegramButton";
import WhatsAppButton from "../../microComponents/WhatsAppButton";
import InstaButton from "../../microComponents/InstaButton";

function Footer() {
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

            <div className={styles.license}>
                <span>© 2026 Books Place. Все права защищены.</span>
            </div>
        </footer>
    );
}

export default Footer;

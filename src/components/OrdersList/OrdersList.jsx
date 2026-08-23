import styles from "./OrdersList.module.scss";

function Orderslist({ orders }) {
    return (
        <div className={styles.ordersList}>
            <h2>Ваши заказы:</h2>

            {orders.map((order, index) => (
                <div key={index} className={styles.orderItem}>
                    <ul>
                        {order.items.map((item) => (
                            <li key={item.id}>
                                <div className={styles.info}>
                                    <span>{item.title}</span>
                                    <span>({item.author})</span>
                                    <span>Количество: {item.quantity}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                        <hr />
                    <span className={styles.total}>
                        Сумма заказа: {order.total}₽
                    </span>
                        <hr />
                    <span className={styles.date}>
                        Заказ от {order.createdAt}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default Orderslist;

import styles from "./Orders.module.scss";

import { useEffect, useState } from "react";
import { getOrders } from "../../API/UseApi";

import EmptyOrders from "../../components/EmptyOrders/EmptyOrders";
import LoadingPage from "../../components/LoadingPage/LoadingPage";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import OrdersList from "../../components/OrdersList/OrdersList";

function Orders() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadOrders = () => {
        getOrders()
            .then((data) => setOrders(data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    };

    const retryLoadingOrders = () => {
        setError(null);
        setLoading(true);
        loadOrders();
    };

    useEffect(() => {
        loadOrders();
    }, []);

    if (loading) {
        return <LoadingPage />;
    }

    if (error) {
        return (
            <ErrorPage
                message={`Упс.. Не удалось загрузить страницу! Ошибка: ${error}`}
                onRetry={retryLoadingOrders}
            />
        );
    }
    return (
        <div className={styles.ordersContainer}>
            {orders.length ? <OrdersList orders={orders} /> : <EmptyOrders />}
        </div>
    );
}

export default Orders;

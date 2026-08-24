import styles from "./Orders.module.scss";
// Api
import { getOrders } from "../../API/UseApi.js";
// Libs
import { useQuery } from "@tanstack/react-query";
// Components
import EmptyOrders from "../../components/EmptyOrders/EmptyOrders";
import LoadingPage from "../../components/LoadingPage/LoadingPage";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import OrdersList from "../../components/OrdersList/OrdersList";

function Orders() {
    const {
        data: orders,
        isLoading,
        isError,
        error,
        refetch,
    } = useQuery({
        queryKey: ["orders"],
        queryFn: getOrders,
    });

    if (isLoading) {
        return <LoadingPage />;
    }

    if (isError) {
        return (
            <ErrorPage
                message={`Упс.. Не удалось загрузить страницу! Ошибка: ${error}`}
                onRetry={refetch}
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

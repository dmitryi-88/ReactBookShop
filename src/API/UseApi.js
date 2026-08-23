const API_URL = "http://localhost:3001";

export const getCatalog = async () => {
    const response = await fetch(`${API_URL}/books`);

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    return data;
};

export const getOrders = async () => {
    const response = await fetch(`${API_URL}/orders`);

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    return data;
};

export const createOrder = async (data) => {
    const response = await fetch(`${API_URL}/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }

    return response.json();
};

export const UpdateStock = async (id, newStock) => {
    const response = await fetch(`${API_URL}/books/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            stock: newStock,
        }),
    });

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }

    return response.json();
};

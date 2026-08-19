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


function cartReducer(state, action) {
    switch (action.type) {
        case "ADD": {
            const isIncludes = state.find(
                (book) => book.id === action.payload.id,
            );
            if (isIncludes) {
                return state;
            }

            return [...state, { ...action.payload, quantity: 1 }];
        }

        case "REMOVE": {
            return state.filter((book) => book.id !== action.payload.id);
        }

        case "INCREASE_QUANTITY":
            return state.map((book) => {
                if (book.id !== action.payload.id) {
                    return book;
                }

                if (book.quantity >= book.stock) {
                    return book;
                }

                return {
                    ...book,
                    quantity: book.quantity + 1,
                };
            });

        case "DECREASE_QUANTITY":
            return state.map((book) => {
                if (book.id !== action.payload.id) {
                    return book;
                }

                if (book.quantity <= 1) {
                    return book;
                }

                return {
                    ...book,
                    quantity: book.quantity - 1,
                };
            });

        case "CLEAR":
            return [];

        default:
            return state;
    }
}

export default cartReducer;

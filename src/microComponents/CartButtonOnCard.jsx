function CartButtonOnCard() {
    return (
        <>
            <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M3 5H5L7.2 16.2C7.4 17.2 8.3 18 9.3 18H17.5C18.5 18 19.4 17.3 19.7 16.3L21 10H6"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <circle cx="9.5" cy="21" r="1.5" fill="currentColor" />
                <circle cx="17.5" cy="21" r="1.5" fill="currentColor" />
                <path
                    d="M18 3V7M16 5H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        </>
    );
}

export default CartButtonOnCard;

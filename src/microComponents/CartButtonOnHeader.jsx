function CartButtonOnHeader({productsCount}) {
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
                    d="M3 4H5L7 16H19L21 8H6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <circle cx="9" cy="20" r="1.5" fill="currentColor" />
                <circle cx="17" cy="20" r="1.5" fill="currentColor" />
            </svg>
            <span style={{fontSize: '12px'}}>{productsCount}</span>
        </>
    );
}

export default CartButtonOnHeader;

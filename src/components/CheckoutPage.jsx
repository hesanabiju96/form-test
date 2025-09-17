const CheckoutPage = (props) => {
    const { cart, setShowCheckout, confirmOrder, discount } = props
    const subtotal = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const discountedTotal = (subtotal - (subtotal * discount) / 100).toFixed(2);
    return (
        <div
            style={{
                position: 'fixed',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                backgroundColor: 'rgba(0,0,0,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    background: 'white',
                    padding: '20px',
                    borderRadius: '10px',
                    width: '400px',
                }}
            >
                <h3>🧾 Order Summary</h3>
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            {item.title} × {item.quantity} = $
                            {(item.price * item.quantity).toFixed(2)}
                        </li>
                    ))}
                </ul>
                <h4>Subtotal: ${subtotal.toFixed(2)}</h4>
                {discount > 0 && <h4>Discount: {discount}%</h4>}
                <h3>Total Payable: ${discountedTotal}</h3>

                <button
                    onClick={confirmOrder}
                    style={{
                        padding: '10px',
                        backgroundColor: 'green',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        marginRight: '10px',
                    }}
                >
                    Confirm Order
                </button>
                <button
                    onClick={() => setShowCheckout(false)}
                    style={{
                        padding: '10px',
                        backgroundColor: 'gray',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                    }}
                >
                    Close
                </button>
            </div>
        </div>
    )
}
export default CheckoutPage;
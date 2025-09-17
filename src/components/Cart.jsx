
function Cart({ user, cart, discount, setCart, setShowCheckout, onClose, applyCoupon, couponRef }) {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discountedTotal = (subtotal - (subtotal * discount) / 100).toFixed(2);

    const increaseQty = (id) => {
        setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
    };
    const decreaseQty = (id) => {
        setCart(
            cart
                .map(item =>
                    item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
                )
                .filter(item => item.quantity > 0)
        );
    };
    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    return (
        <div style={{ padding: '10px' }}>
            <h3>
                🛍️ {user}'s Cart ({cart.length} items)
                <button
                    onClick={onClose}
                    style={{
                        marginLeft: '20px',
                        padding: '5px 10px',
                        backgroundColor: 'gray',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Close Cart
                </button>
            </h3>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul>
                        {cart.map(item => (
                            <li key={item.id} style={{ marginBottom: '15px' }}>
                                {item.title} - ${item.price.toFixed(2)} × {item.quantity}
                                <div style={{ marginTop: '5px' }}>
                                    <button
                                        onClick={() => decreaseQty(item.id)}
                                        style={{ padding: '5px', marginRight: '5px' }}
                                    >
                                        -
                                    </button>
                                    <button
                                        onClick={() => increaseQty(item.id)}
                                        style={{ padding: '5px', marginRight: '5px' }}
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        style={{
                                            padding: '5px',
                                            backgroundColor: 'red',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '3px',
                                        }}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <input
                        type="text"
                        placeholder="Enter Coupon Code"
                        ref={couponRef}
                        style={{ padding: '8px', marginRight: '10px', width: '200px' }}
                    />
                    <button onClick={applyCoupon} style={{ padding: '8px' }}>
                        Apply Coupon
                    </button>
                    <h4>Subtotal: ${subtotal.toFixed(2)}</h4>
                    {discount > 0 && <h4>Discount Applied: {discount}%</h4>}
                    <h3>Final Total: ${discountedTotal}</h3>
                    <button
                        onClick={() => setShowCheckout(true)}
                        style={{
                            marginTop: '10px',
                            padding: '10px',
                            backgroundColor: 'blue',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                    >
                        Proceed to Checkout
                    </button>
                </>
            )}
        </div>
    );
}

export default Cart;

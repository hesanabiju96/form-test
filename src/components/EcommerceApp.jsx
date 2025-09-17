import React, { useEffect, useState, useRef } from 'react';
import { useFetch } from '../hooks/useFetch';
import ProductList from './ProductList';
import LoginPage from './LoginPage';
import SearchBar from './SearchBar';
import Cart from './Cart';
import Header from './Header';
import CheckoutPage from './CheckoutPage';

function EcommerceApp() {

    const { data: products } = useFetch();
    const [search, setSearch] = useState(''); // controlled search
    const [cart, setCart] = useState([]); // cart items
    const [discount, setDiscount] = useState(0); // discount %
    const [showCheckout, setShowCheckout] = useState(false); // checkout modal
    const [user, setUser] = useState(null); // logged-in user
    const [showCart, setShowCart] = useState(false); // toggle cart view
    const couponRef = useRef(); // uncontrolled coupon input

    // Load cart & discount for logged-in user
    useEffect(() => {
        if (user) {
            const savedCart = JSON.parse(localStorage.getItem(`${user}_cart`)) || [];
            const savedDiscount =
                JSON.parse(localStorage.getItem(`${user}_discount`)) || 0;
            setCart(savedCart);
            setDiscount(savedDiscount);
        }
    }, [user]);

    // Save cart & discount when they change
    useEffect(() => {
        if (user) {
            localStorage.setItem(`${user}_cart`, JSON.stringify(cart));
            localStorage.setItem(`${user}_discount`, JSON.stringify(discount));
        }
    }, [cart, discount, user]);

    // Controlled search filter
    const filteredProducts = products?.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
    );

    // Apply coupon
    const applyCoupon = () => {
        const code = couponRef.current.value.trim().toUpperCase();
        if (code === 'SAVE10') {
            setDiscount(10);
            alert('✅ Coupon applied: 10% OFF');
        } else if (code === 'SAVE20') {
            setDiscount(20);
            alert('✅ Coupon applied: 20% OFF');
        } else {
            setDiscount(0);
            alert('❌ Invalid coupon code');
        }
        couponRef.current.value = '';
    };

    // Add item to cart
    const addToCart = (product) => {
        const existingItem = cart.find((item) => item.id === product.id);
        if (existingItem) {
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    // Confirm order
    const confirmOrder = () => {
        alert(`🎉 Order confirmed for ${user}! Thank you for shopping.`);
        setCart([]);
        setDiscount(0);
        localStorage.removeItem(`${user}_cart`);
        localStorage.removeItem(`${user}_discount`);
        setShowCheckout(false);
    };

    // Logout
    const handleLogout = () => {
        setUser(null);
        setCart([]);
        setDiscount(0);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h2>E-Commerce Store</h2>

            {/* User Login */}
            {!user ? (

                <LoginPage setUser={setUser} />
            ) : (
                <Header user={user} setUser={handleLogout} cartCount={cart?.length} onCartClick={() => setShowCart(!showCart)} />
            )}
            {user && (showCart ? (
                <Cart
                    user={user}
                    cart={cart}
                    discount={discount}
                    setCart={setCart}
                    setShowCheckout={setShowCheckout}
                    onClose={() => setShowCart(false)} // optional close button inside cart
                    applyCoupon={applyCoupon}
                    couponRef={couponRef}
                />
            ) : (

                <>
                    <SearchBar setSearch={setSearch} />

                </>
            ))}

            {/* Product List */}
            {user && !showCart && (
                <>
                    <h3>Products</h3>
                    {filteredProducts?.length > 0 ? (

                        <ProductList products={filteredProducts} addToCart={addToCart} />
                    ) : (
                        <p>No products found.</p>
                    )}
                    <hr />
                </>
            )}

            {/* Checkout Modal */}
            {showCheckout && (
                <CheckoutPage cart={cart} setShowCheckout={setShowCheckout} confirmOrder={confirmOrder} discount={discount} />
            )}
        </div>
    );
}

export default EcommerceApp;
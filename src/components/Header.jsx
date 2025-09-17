import React from 'react';

function Header({ user, setUser, cartCount, onCartClick }) {
    return (
        <header
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px',
            }}
        >

            <div style={{ display: 'flex', alignItems: 'center' }}>


                {/* Show user info and logout */}
                {user && (
                    <>
                        <span>
                            👤 <strong>{user}</strong>
                        </span>
                        <button
                            onClick={() => setUser(null)}
                            style={{
                                marginLeft: '15px',
                                padding: '8px',
                                background: 'red',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                            title="Logout"
                        >
                            Logout
                        </button>
                    </>
                )}

                {/* Cart Icon */}
                {user && (
                    <button
                        onClick={onCartClick}
                        style={{
                            marginLeft: '20px',
                            position: 'relative',
                            padding: '8px',
                            fontSize: '20px',
                            cursor: 'pointer',
                            background: 'transparent',
                            border: 'none',
                        }}
                        aria-label="Toggle Cart"
                        title="Toggle Cart"
                    >
                        🛒
                        {cartCount > 0 && (
                            <span
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    backgroundColor: 'red',
                                    color: 'white',
                                    borderRadius: '50%',
                                    padding: '2px 6px',
                                    fontSize: '12px',
                                }}
                            >
                                {cartCount}
                            </span>
                        )}
                    </button>
                )}
            </div>
        </header>
    );
}

export default Header;

import React, { useRef } from 'react';

function Login({ setUser }) {
    const usernameRef = useRef();

    const handleLogin = () => {
        const enteredUser = usernameRef.current.value.trim();
        if (enteredUser) {
            setUser(enteredUser);
            usernameRef.current.value = '';
        } else {
            alert('⚠️ Please enter a username to login.');
        }
    };

    return (
        <div style={{ marginBottom: '20px' }}>
            <input
                ref={usernameRef}
                type="text"
                placeholder="Enter Username"
                style={{ padding: '8px', marginRight: '10px', width: '200px' }}
            />
            <button onClick={handleLogin} style={{ padding: '8px' }}>
                Login
            </button>
        </div>
    );
}

export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Logged in with", { email, password });
        navigate('/');
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
            <form onSubmit={handleLogin} className="bg-black p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl mb-6">Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 mb-4 bg-gray-800 rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 mb-4 bg-gray-800 rounded"
                />
                <button type="submit" className="w-full bg-green-500 p-3 rounded">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;

import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from './Store';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Login() {
    let username = useRef(null);
    let password = useRef(null);

    let dispatch = useDispatch();
    let navigate = useNavigate();

    let loginCheck = () => {
        if (username.current.value === "Sruthi" && password.current.value === "Sruthi@123") {
            dispatch(login(username.current.value));
            navigate("/home");
        } else {
            alert("Your Credentials Are Wrong. Check Once!");
        }
    }

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{paddingLeft:"520px"}}>
            <div className="card p-3 shadow-sm" style={{ width: '400px' }}>
                {/* Heading with custom color */}
                <h2 className="text-center mb-4 text-info">Login</h2>

                {/* Username input with custom styles */}
                <div className="form-group mb-3">
                    <label htmlFor="username" className="form-label text-primary">Username</label>
                    <div className="input-group">
                        <span className="input-group-text bg-light text-dark">
                            <i className="fas fa-user"></i>
                        </span>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="username" 
                            ref={username} 
                            placeholder="Enter your username" 
                            style={{ borderColor: '#17a2b8'}} 
                        />
                    </div>
                </div>

                {/* Password input with custom styles */}
                <div className="form-group mb-4">
                    <label htmlFor="password" className="form-label text-primary">Password</label>
                    <div className="input-group">
                        <span className="input-group-text bg-light text-dark">
                            <i className="fas fa-lock"></i>
                        </span>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password" 
                            ref={password} 
                            placeholder="Enter your password" 
                            style={{ borderColor: '#17a2b8' }} 
                        />
                    </div>
                </div>

                {/* Login button with custom color */}
                <div className="d-grid gap-2">
                    <button 
                        className="btn btn-primary btn-lg"
                        onClick={loginCheck}
                        style={{ backgroundColor: '#28a745', borderColor: '#28a745' }}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;

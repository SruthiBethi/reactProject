import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from './Store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Login() {
    let username = useRef(null);
    let password = useRef(null);

    let dispatch = useDispatch();
    let navigate = useNavigate();

    let loginCheck = () => {
        if (username.current.value === "Sruthi" && password.current.value === "Sruthi@123") {
            dispatch(login(username.current.value));
            navigate("/Cart");
        } else {
            alert("Your Credentials Are Wrong. Check Once!");
        }
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
            <div className="row w-100 justify-content-center">
                <div className="col-lg-10 col-md-6 col-sm-8 col-10">
                    <div className="card p-4 shadow-lg">
                        {/* Heading with custom color */}
                        <h2 className="text-center mb-4 text-info">Login</h2>

                        {/* Username input */}
                        <div className="mb-3">
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
                                />
                            </div>
                        </div>

                        {/* Password input */}
                        <div className="mb-4">
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
                                />
                            </div>
                        </div>

                        {/* Login button */}
                        <div className="d-grid">
                            <button 
                                className="btn btn-success btn-lg"
                                onClick={loginCheck}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

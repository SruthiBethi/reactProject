import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/home");
        }, 5000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="container text-center mt-5">
            <h1 className="display-3 text-danger">404 Page Not Found</h1>
            <p className="lead">Navigating to Home Page in 5 seconds...,</p>
            <img src='/notfound.png' alt="Page Not Found" className="img-fluid my-4" />
            <p>If you are not redirected, click <a href="/home" className="btn btn-primary btn-sm">here</a>.</p>
        </div>
    );
}

export default NotFound;

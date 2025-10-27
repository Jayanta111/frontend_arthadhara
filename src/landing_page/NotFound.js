import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function NotFound() {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100 text-center">
        <img src="media/images/404.png"  style={{width:"20%",marginTop:"20px"}}/>
      <h1 className="display-1 fw-bold text-danger mb-3">404</h1>
      <h2 className="fw-semibold text-secondary mb-4">Page Not Found</h2>
      <p className="text-muted mb-5">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link to="/" className="btn btn-danger px-4 py-2 rounded-pill shadow-sm">
        <ArrowBackIcon/> Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;

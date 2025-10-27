import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

function Hero() {
  return (
    <div className="container" >
      <div className="row mt-5 mb-5  ">
        <div className="col-12 p-5 m-2 d-flex justify-content-between align-items-center">
          <h1 className="fw-bold support-title">Support Portal</h1>
          <a href="">
            <button className="btn btn-primary" style={{ width: "100px" }}>
              My tickets
            </button>
          </a>
        </div>

        <div className="col-12">
          <div className="input-group ">
            <span className="input-group-text" id="search-icon">
              <SearchIcon />
            </span>
            <input
              type="text"
              className="form-control "
              placeholder="Eg: How do I open my account, How do I activate F&O..."
              aria-label="Search"
              aria-describedby="search-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

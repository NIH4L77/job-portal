import React from 'react';
import "./Style/Search.css"

const Search = () => {
  return (
    <section className="search">
      <div className="container">
        <h2>Search for Jobs</h2>
        <form>
          <div className="form-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input type="text" id="jobTitle" name="jobTitle" placeholder="Enter Job Title" />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input type="text" id="location" name="location" placeholder="Enter Location (optional)" />
          </div>
          <div className="form-group">
            <label htmlFor="jobType">Job Type</label>
            <select id="jobType" name="jobType">
              <option value="">All Job Types</option>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="contract">Contract</option>
            </select>
          </div>
          <button type="submit">Search</button>
        </form>
      </div>
    </section>
  );
};

export default Search;

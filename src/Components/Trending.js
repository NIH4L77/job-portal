import React from 'react';
import "./Style/Trending.css"

const Trending = () => {
  return (
    <section className="trending">
      <div className="container">
        <h2>Trending Keywords</h2>
        <ul>
          <li>Software Engineer</li>
          <li>Data Scientist</li>
          <li>Product Manager</li>
          <li>Web Developer</li>
          <li>Marketing Manager</li>
        </ul>
      </div>
    </section>
  );
};

export default Trending;

import React from 'react';
import "./Style/Content.css"

const Content = () => {
  return (
    <section className="content">
      <div className="container">
        {/* Add content here, such as call to action buttons or additional information */}
        <p>Explore job opportunities across various industries and locations. Find the perfect job match for your skills and experience.</p>
        <button>Browse Jobs by Industry</button>
      </div>
    </section>
  );
};

export default Content;

import React from 'react';

function RightSection({ imageURL, productName, productDesription, learnMore }) {
    return (  
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-6 p-3 p-md-5 mt-4 mt-md-5">
            <h1>{productName}</h1>
            <p>{productDesription}</p>
            <div>
              <a href={learnMore} style={{ textDecoration: "none" }}>Learn More
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 text-center">
            <img src={imageURL} className="img-fluid"/>
          </div>
       </div>
      </div>
    );
}

export default  RightSection;
import React from 'react';

function LeftSection( 
  {
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
  })
  {
    return (  
      <div className="container mt-5 ">
        <div className="row">
          <div className="ccol-12 col-md-6 p-3 p-md-5 text-center">
            <img src={imageURL}  className="img-fluid"/>
          </div>
          <div className="col-12 col-md-6 p-3 p-md-5 mt-4 mt-md-5 text-center">
            <h1>{productName}</h1>
            <p>{productDesription}</p>
            <div>
            <a href={tryDemo}  className="text-decoration-none ms-3">Try Demo
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>

            <a href={learnMore} style={{marginLeft:"50px"  ,textDecoration: "none"} }>Learn More
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            </div>

            <div className='mt-3'>
            <a href={googlePlay}><img src="media\images\googlePlayBadge.svg" alt=""  className="img-fluid" /></a>
            <a href={appStore} className="ms-3 img-fluid"><img src="media\images\appstoreBadge.svg" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default  LeftSection;
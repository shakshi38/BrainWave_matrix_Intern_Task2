import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore, googlePlay, appStore }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={learnMore}>Learn More</a>
          </div>
          <div className='p-2 mt-3'>
                    <a href={googlePlay}><img src='media/images/googlePlayBadge.svg' /></a>
                    <a href={appStore} style={{marginLeft:"20px"}}><img src='media/images/appstoreBadge (1).svg'/></a>
                    </div>
        </div>
        <div className="col-6">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
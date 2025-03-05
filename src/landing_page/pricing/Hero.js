import React from 'react';

function Hero() {
    return ( 
      <div className='container'>
      <div className='row p-5 mt-5 border-bottom text-center'>
          <h1>Open a free online shoping account</h1>
          <h3 className='text-muted mt-3 fs-5'>Men, Women and Kids affordable range</h3></div>
          <div className='row p-5 mt-5 text-center'>
          <div className='col-4 p-4'>
            <img src="media/images/m2.jpeg" />
            <h1 className='fs-3'>
            Mens Shoes
            </h1>
            <h3 className='text-muted'>Upto 50% to 80% Discount</h3>
          </div>
          <div className='col-4 p-4'>
          <img src="media/images/g1.jpeg" />
            <h1 className='fs-3'>
            Womens Shoes
            </h1>
            <h3 className='text-muted'>Upto 80% Discount</h3>
            </div>
            <div className='col-4 p-4'>
            <img src="media/images/k2.jpeg" />
            <h1 className='fs-3'>
            Kids
            </h1>
            <h3 className='text-muted'>Upto 25% to 80%  Discount</h3>
            </div>
      </div>
     </div>
     );
}

export default Hero;
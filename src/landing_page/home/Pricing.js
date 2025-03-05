import React from 'react';

function Pricing() {
    return ( 
        <div className='container mb-5'>
        <div className='row'>
            <div className='col-4'>
                <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                <p>We pioneered the concept of discount broking and price transparency in india.Flat fees no hidden charges.</p>
                <a href='' style={{textDecoration:"none"}}>See Pricing<i class="fa fa-long-arrow-right"></i></a>
            </div>
            <div className='col-2'></div>
            <div className='col-6 mb-5'>
              <div className='row text-center'>
                <div className='col p-3 border'>
                    <h1 className='mb-3'>50%</h1>
                    <p>Discount Offers</p>
                </div>
                 <div className='col p-3 border'>
                    <h1 className='mb-3'>80%</h1>
                 <p>Double Discount Offers</p>

                 </div>
              </div>
            </div>
        </div>
    </div>
     );
}

export default Pricing;
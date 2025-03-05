import React from 'react';

function Stats() {
    return ( 
        <div className='container p-3'>
            <div className='row p-5'>
            <div className='col-6 p-5'>
                <h1  className='fs-2 mb-5'>Trust with products</h1>
                <h2 className='fs-4'>Customer-first always</h2>
                <p className='text-muted'>That's why 1.3+ crore customers trust on Unishoes.</p>
                <h1 className='fs-2'>No spam or gimmicks</h1>
                <h2 className='fs-4'>Customer-first always</h2>
                <p className='text-muted'>That's why 1.3+ crore customers trust on Unishoes.</p>
                <h1 className='fs-2'>The Unishoes universe</h1>
                <h2 className='fs-4'>Customer-first always</h2>
                <p className='text-muted'>That's why 1.3+ crore customers trust on Unishoes.</p>
                <h1  className='fs-2'>Do better with money</h1>
                <h2 className='fs-4'>Customer-first always</h2>
                <p className='text-muted'>That's why 1.3+ crore customers trust on Unishoes.</p>
            </div>
          
                <div className='col-6'>
                    <img src='media/images/ts3.jpeg' style={{width:"95%"}} />
                </div>
                
                <div className='text-center'>
                    <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our products<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href='' style={{textDecoration:"none"}}>Trial for Generation <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Stats;
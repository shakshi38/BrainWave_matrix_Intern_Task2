import React from 'react';

function Universe() {
    return ( 
        <div className='container mt-5'>
        <div className='row text-center'>
            <h1>The Unishoes world</h1>
            <p>
                Explore your style and looking gorgeous experiences even with our partner platforms
            </p>
                <div className='col-4 p-3 mt-5'>
                <img src="media/images/p1.png" />
                <p className='text-small text-muted'>amazing shoes</p>
            </div>
            <div className='col-4 p-3 mt-5'>
                <img src="media/images/p2.png"/>
                <p className='text-small text-muted'>amazing shoes</p>

            </div>
            <div className='col-4 p-3 mt-5'>
                <img src="media/images/p3.jpeg" />
                <p className='text-small text-muted'>amazing shoes</p>

            </div>
        <div className='col-4 p-3 mt-5'>
                <img src="media/images/p4.png" />
                <p className='text-small text-muted'>amazing shoes</p>
            </div>
            <div className='col-4 p-3 mt-5'>
                <img src="media/images/p5.png"/>
                <p className='text-small text-muted'>amazing shoes</p>

            </div>
            <div className='col-4 p-3 mt-5'>
                <img src="media/images/p7.png" />
                <p className='text-small text-muted'>amazing shoes</p>
            </div>
            <button className='p-2 btn btn-primary fs-5' style={{width:"25%", margin:"0 auto"}}>Buy Now</button>
        </div>
    </div>
     );
}

export default Universe;
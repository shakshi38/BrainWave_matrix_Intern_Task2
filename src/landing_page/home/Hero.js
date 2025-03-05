import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5'>
           <div className='row text-center'>
                <img src='media/images/ts1.jpeg' alt='Shoes1 Image' class='mb-5'/>
                <h1 className='mt-5'>Unique shoes</h1>
                <p>Online platform to buy shoes.</p>
                <button className='p-2 btn btn-primary fs-5' style={{width:"25%", margin:"0 auto"}}>Buy Now</button>
                </div>
           </div>
    
  );
}

export default Hero;

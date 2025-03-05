import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
        <div className='p-5' id="supportWrapper">
            <h4>Support portal</h4>
            <a href="" style={{textDecoration:'none'}}>Track Tickets</a>
        </div>
        <div className='row p-5 m-3'>
        <div className='col-6 p-3'>
            <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
            <input placeholder='Why my order rejected ?'/><br/>
             <a href="">Track account opening </a>
             &nbsp;
             &nbsp;
             <a href="">Track segment activation</a>
             &nbsp;&nbsp;
             <a href="">Support activity</a>
             &nbsp;&nbsp;
             <a href="">User manual</a>
        </div>
        <div className='col-6 p-3'>
          <h1 className='fs-3'>Featured</h1>
          <ol>
            <li><a href="">Surveillance measure on scrips - 2025</a></li>
            <li> <a href="">Current Fashions and Designs - 2025</a></li>
          </ol>
          </div> 
        </div>
     </section>
     );
}

export default Hero;
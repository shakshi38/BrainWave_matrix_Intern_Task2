import React from 'react';

function Signup() {
    return ( 
        <div className="container mt-5">
          <div className='text-center mt-5'>
            <h1>Online shopping opening and Transaction account</h1>
            <h3 className='text-muted mt-3 fs-4'>Match Your with fashion world.<br/>Start journey  join a community of 1.5+ crore.</h3>
            <div className='row p-3 mt-5'>
        </div>

        <div className='row p-3'>
            <div className='col-6 p-3  text-muted'>
              <img src='media/images/s2.jpeg' style={{ width:'100%'}}/>
              
            </div>
            <div className='col-6 p-3 fs-4'>
               <h1>Signup now</h1>
                <h4 className='text-muted'>
                Or track your existing application
                </h4>
                <div className='p-5'>
                <input type="number" autofocus="" min="1000000000" max="9999999999" name="mobile" id="user_mobile" placeholder="Enter Your Number" required=""></input>
                </div>
                
                <div>
                <button className='p-2 btn btn-primary fs-5' style={{width:"25%", margin:"0 auto"}}>Continue</button>
                </div>
                </div>
                
           
        </div>
                </div>
                </div>
     );
}

export default Signup;
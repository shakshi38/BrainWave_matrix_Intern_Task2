import React from 'react';

function Team() {
    return ( 
        <div className='container'>
        <div className='row p-3 mt-5 border-top'>
            <h1 className='text-center'>People</h1>
        </div>

        <div className='row p-3  text-muted fs-6' style={{lineHeight:"1.8", fontSize:"1.2em"}}>
            <div className='col-6 p-3 text-center text-muted'>
              <img src='media/images/shakshi image.jpg' style={{borderRadius:"100%", width:'50%'}}/>
              <h3 className='mt-5'>Shakshi Gupta</h3>
              <h5>Founder</h5>
            </div>
            <div className='col-6 p-3'>
               <p>
                Shakshi Gupta Web development is the process of building and maintaining websites and web applications. It involves writing code, designing visual elements, and configuring networks. 
                </p>
                <p>
                Web development is a promising career with high demand and competitive salaries 
                </p>
                <p>
                Educational requirements for web developers can range from a high school diploma to a bachelor's degree 
                </p>
                <p>
                    connect  &nbsp; /<a href=''  style={{textDecoration:'none'}}>HomePage</a> &nbsp;/
                    <a href=''  style={{textDecoration:'none'}}>linkedin.com/in/shakshi-gupta-083564244</a>
                </p>
            </div>
        </div>
       </div>   
     );
}

export default Team;
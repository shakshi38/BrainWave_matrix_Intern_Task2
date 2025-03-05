import React from 'react';

function Brokerage() {
    return ( 
        <div className='container'>
        <div className='row p-5 mt-5 text-center'>
        <div className='col-8 p-4'>
            <a href=""  style={{textDecoration:'none'}}><h3 className='fs-5'>Persons</h3> </a>
            <ul style={{textAlign:"left", lineHeight:"2.5"}} className='text-muted ' fontSize="14px">
            <li>Men Shoes Designings</li>
            <li>Women Shoes Designings</li>
            <li>Kids Shoes Designings</li>
            </ul>
        </div>
        <div className='col-4 p-4'>
             <a href=""  style={{textDecoration:'none'}}><h3 className='fs-5'>List of charges</h3></a>
             <li>Starting &nbsp; &#8377;10,000 to up</li>  
             <li>Starting &nbsp; &#8377;5,000 to up</li>  
             <li>Starting &nbsp; &#8377;1000 to up</li>    
        </div>       
    </div>
    </div>
     );
}

export default Brokerage;
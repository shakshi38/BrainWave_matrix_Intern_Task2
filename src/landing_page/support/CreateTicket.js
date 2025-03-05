import React from 'react';

function CreateTicket() {
    return ( 
        <div className='container'>
        <div className='row p-5 mt-5 mb-5'>
            <h1 className='fs-2'>To create a ticket, select a relevant topic</h1>
        <div className='col-4 p-5 mt-2 mb-2'>
            <h4 className='fs-4 text-center'>ONLINE SHOPPING</h4>
            <a href='' style={{textDecoration:'none', lineHeight:"2.5"}}>Men</a><br/>
            <a href='' style={{textDecoration:'none', lineHeight:"2.5"}}>women</a><br/>
            <a href='' style={{textDecoration:'none', lineHeight:"2.5"}}>Kids</a><br/>
            <a href='' style={{textDecoration:'none', lineHeight:"2.5"}} >Unishoes Insider</a>
        </div>
        <div className='col-4 p-5 mt-2 mb-2'>
            <h4 className='fs-4 text-center'>CUSTOMER POLICIES</h4>
            <a href='' style={{textDecoration:'none', lineHeight:"2.5"}}>Contact Us</a><br/>
            <a href='' style={{textDecoration:'none', lineHeight:"2.5"}}>FAQ</a><br/>
            <a href='' style={{textDecoration:'none', lineHeight:"2.5"}}>T&C</a><br/>
            <a href='' style={{textDecoration:'none', lineHeight:"2.5"}} >Terms Of Use</a><br/>
            <a href='' style={{textDecoration:'none', lineHeight:"2.5"}}>Track Orders</a><br />
            <a href='' style={{textDecoration:'none', lineHeight:"2.5"}} >Shipping</a><br/>
            <a href='' style={{textDecoration:'none', lineHeight:"2.5"}} >Cancellation</a><br/>
            <a href='' style={{textDecoration:'none', lineHeight:"2.5"}} >Returns</a><br/>
        </div>
        <div className='col-4 p-5 mt-2 mb-2'>
            <h4 className='fs-4 text-center'>USEFUL LINKS</h4>
            <a href='' style={{textDecoration:'none', lineHeight:"2.5"}}>Blog</a><br/>
            <a href='' style={{textDecoration:'none', lineHeight:"2.5"}}>Careers</a><br/>
            <a href='' style={{textDecoration:'none', lineHeight:"2.5"}}>Site Map</a><br/>
        </div>
        <div className='col-4 p-5 mt-2 mb-2'>
            <h4 className='fs-4 text-center'><i class="fa-solid fa-circle-plus"></i>OPEN IN SOCIAL MEDIA</h4>
            <div id="createIcon" >
            <a href=''><i class="fa-brands fa-twitter"></i></a>
            <a href='' className='px-3 mt-3' > <i class="fa-brands fa-instagram"></i></a>
            <a href='' className='px-3 mt-3'> <i class="fa-brands fa-facebook"></i></a>
            <a href='' className='px-2 mt-3'> <i class="fa-brands fa-youtube"></i></a>
            </div>
        </div>
        </div>
     </div>
     );
}

export default CreateTicket;
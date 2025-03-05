import React from 'react';

function Footer() {
    return ( 
        <footer style={{backgroundColor:"#fafafa"}}>
        <div className="container border-top mt-5" >
            <div className='row mt-5'>
                <div className='col'>
                    <img src="media/images/logo.webp" style={{width:"35%"}} />
                    <p>
                        &copy; 2010-2025, Unishoes Pvt. Ltd. All rights Reserved.
                    </p>
                </div>
                <div className='col' >
                <p>Company</p>
                    <a href="" className='text-muted' style={{textDecoration:"none"}}>About</a>
                    <br />
                    <a href="" className='text-muted' style={{textDecoration:"none"}}>Products</a>
                    <br />
                    <a href="" className='text-muted' style={{textDecoration:"none"}}>Pricing</a>
                    <br />
                    <a href="" className='text-muted' style={{textDecoration:"none"}}>Referral programme</a>
                    <br />
                    <a href="" className='text-muted' style={{textDecoration:"none"}}>Fashion Press & media</a>
                    <br />
                    <a href="" className='text-muted' style={{textDecoration:"none"}}>Unishoes cares </a>
                </div>
               
                <div className='col'>
                <p>Support</p>
                <a href="" className='text-muted' style={{textDecoration:"none"}}>About</a>
                    <br />
                    <a href="" className='text-muted' style={{textDecoration:"none"}}>Contact</a>
                    <br />
                    <a href="" className='text-muted' style={{textDecoration:"none"}}>Support portal</a>
                    <br />
                    <a href="" className='text-muted' style={{textDecoration:"none"}}>Z-Connect blog</a>
                    <br />
                    <a href="" className='text-muted' style={{textDecoration:"none"}}>List of charges</a>
                    <br />
                    <a href="" className='text-muted' style={{textDecoration:"none"}}>Downloads & resources</a>
                </div>
                <div className='col'>
                <p>Account</p>
                
                <a href="" className='text-muted' style={{textDecoration:"none"}}>Open an account</a>
                    <br />
                    <a href="" className='text-muted' style={{textDecoration:"none"}}>Refund</a>
                    <br />
                    <a href="" className='text-muted' style={{textDecoration:"none"}}>7 days challenge</a>
                    </div>
            </div>
            <div className='mt-5  text-muted ' style={{fontSize:"14px"}}>
            <p>A company is a legal entity formed by a group of individuals to engage in business or trade with the intention of earning profits or achieving specific objectives. Companies exist as separate legal entities, meaning they are distinct from the people who own or manage them. The concept of a company plays a crucial role in modern commerce, offering a framework for businesses to operate, grow, and ensure legal compliance. This article explores the meaning of a company, its essential characteristics, and the different types of companies recognized under Indian law, particularly the Companies Act 2013.</p>
                <p>
                The liability of a company’s shareholders is limited to the unpaid value of their shares. This ensures that the personal assets of shareholders are protected, even if the company faces financial difficulties.</p>
                <p>The shareholders elect a Board of Directors to manage the company’s affairs. This ensures professional and efficient management, as the day-to-day operations are overseen by directors.
                </p>
                <p>
                The term company is derived from the Latin words ‘com’ (together) and ‘panis’ (bread), symbolizing a group of people coming together for a common purpose. Legally, it refers to a corporate entity recognized by law, capable of entering contracts, owning property, and conducting business activities in its name. According to Section 2(20) of the Companies Act, 2013, "A company means a company incorporated under this Act or under any previous company law." Definitions by Legal Experts: Justice James: “A company is an association of persons united for a common object.” Prof. Haney: “A company is an artificial person created by law, having a separate legal entity with perpetual succession and a common seal.” Lord Lindley: “By a company is meant an association of many persons who contribute money or money’s worth to a common stock and employ it for some common purpose. The common stock so contributed is denoted in money and is the capital of the company.” Salomon v. Salomon & Co. Ltd. (1897): This landmark case established that a company is distinct from its shareholders, solidifying the principle of separate legal personality in corporate law.
            </p>
            </div>
            </div>
        </footer>
     );
}

export default Footer;
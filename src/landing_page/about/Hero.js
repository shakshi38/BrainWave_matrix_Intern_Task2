import React from 'react';

function Hero() {
    return ( 
       <div className='container'>
        <div className='row p-5 mt-5 mb-5'>
            <h1 className='fs-2 text-center'>we are share lots of brands and we are selling all overworld.<br/>We are breaking the records.</h1>
        </div>

        <div className='row p-5 mt-5 border-top text-muted fs-6' style={{lineHeight:"1.8", fontSize:"1.2em"}}>
            <div className='col-6 p-5'>
               <p>
               Who Invented Shoes? No one is credited with the invention of shoes, as the oldest known forms of shoes date back thousands of years. Thong sandals are commonly depicted in ancient Egyptian paintings and murals, indicating shoes existed before the earliest known forms of writing.
               </p>
               <p>he top shareholders of Nike are Phil Knight, Mark Parker, John Donahoe, Swoosh LLC, Vanguard Group Inc., and BlackRock Inc. (BLK). Phil Knight, the co-founder of Nike, and his son Travis Knight own more than 97% of outstanding Class A shares along with the holding companies and trusts they control.</p>
            </div>
            <div className='col-6 p-5'>
               <p>
               Shoes, as recurring symbols in mythology and culture, reflect their roots in the collective unconscious. They symbolize universal experiences of protection, transition, and identity.
               </p>
               <p>
               A shoe is an item of <a href=''  style={{textDecoration:'none'}}>footwear</a> intended to protect and comfort the human foot. Though the human foot can adapt to varied terrains and climate conditions, it is vulnerable, and shoes provide protection. Form was originally tied to function, but over time, shoes also became fashion items. Some shoes are worn as safety equipment, such as steel-toe boots, which are required footwear at industrial worksites.
               </p>
               <p>
               Shoes without any functional defects or cosmetic defects that will impair the marketability of the shoe are A grade. These are high-quality shoes, they look good and fit correctly. 
               </p>
            </div>
        </div>
       </div>   
     );
}

export default Hero;
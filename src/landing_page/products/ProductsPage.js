import React from 'react';

import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

function PricingPage() {
    return ( 
        <>
        <Hero />
        <LeftSection 
        imageURL="media/images/a5.jpg" productName="The Triple Monk Strap Shoe" productDescription="the popularity of two buckled shoes, some designers have adopted unusual variations with 3 and more straps. Realistically, the 3 or more strapped shoes will likely not be anything more than a short-lived fashion that will disappear in a few years."
tryDemo="" 
learnMore="" 
googlePlay="" 
appStore="" />

        <RightSection  
imageURL="media/images/a2.webp" 
productName="Boots"
productDesription="While there are many excellent men’s boot brands around, Timberland is undoubtedly one of the best. This beloved boot label makes high-quality and stylish shoes that are perfect for fashionable gents. Although Timberland boots appear great with casual ensembles, they can also be worn for a smart casual look."
learnMore=""
/>

        <LeftSection 
        imageURL="media/images/a7.webp" productName="A Cap Toe Oxford" productDescription="The cap toe Oxford, sometimes also referred to as captoe or cap-toe, is the most widespread incarnation of the Oxford shoe, the cap-toe is to business attire what the plain-toe is to eveningwear. The style, unsurprisingly, gets its name from the production technique, which sees an additional piece of leather stitched over the toe – the so-called toe cap. The most popular color is undoubtedly black, and the black cap toe Oxford is the most popular shoe for the majority of classic men’s shoe manufacturers. Of course, it is also available in tan, brown, cognac, oxblood, etc., but the black variety is the epitome of Oxford shoes. A black cap toes oxford retains the versatility of being able to become a semi-formal shoe. " 
tryDemo="" 
learnMore="" 
googlePlay="" 
appStore="" />

<RightSection  
 imageURL="media/images/a3.webp"
 productName="A Belgian Loafer"
 productDesription="The Loafer is a piece of footwear that straddles the two worlds of casual and a more formal style, making it quite a unique piece in that respect. No matter what you read, a loafer is never a truly formal shoe because of its casual culture.."
 learnMore=""
/>

 <LeftSection 
 imageURL="media/images/a6.png" productName="The Classic/Plain Derbies " productDescription="Being simple and old, Derbies have been adopted by those interested both in practicality and looking good.They are suitable for formal occasions and can be partnered with a suit. However, their sleek yet simplistic appearance also lends itself well to casual and smart casual outfits. As such, derby shoes can work just as well with a pair of jeans as they can with wool trousers." 
tryDemo="" 
learnMore="" 
googlePlay="" 
appStore="" />
<p className='text-center mt-5 mb-5'>
    Want to know more about our technology stack?check out the Unishoes pvt. ltd. blogs.
    </p>
        <Universe />
        </>
     );
}

export default PricingPage;


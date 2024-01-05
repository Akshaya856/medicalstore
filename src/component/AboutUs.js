import React from 'react';
import { Link } from 'react-router-dom';


function Aboutus(){

    return (
      <div>
       <br/>  <br/><h5><b>ABOUT US</b></h5> <br/>
       <p className='demo'>&nbsp;&nbsp; &nbsp;&nbsp;  Apollo Pharmacy is a subsidiary of Apollo Hospitals, a highly regarded pharmacy chain in India. It is the largest and first-ever Omni-Channel Pharmacy network in Asia, with a vast network of over 5500 outlets strategically located in key locations across the country. The delivery service covers over 19000+ pin codes, making it highly accessible to people throughout India.
      The pharmacy is accredited with an International Quality Certification, which speaks to its commitment to providing authentic and reasonably priced medication round the clock. <br/> <br/>&nbsp; The 24-hour pharmacies and home delivery network are designed to ensure customers' convenience, while the customer care is available at any time of the day.
      Quality is the foundation of Apollo Pharmacy's operations. Over the last two decades, the pharmacy has gained extensive experience in pharmacy operations management, and it is dedicated to offering the best services in the industry. The pharmacy is adequately stocked with a comprehensive range of medicines, over-the-counter (OTC), and fast-moving consumer goods (FMCG) products. The qualified and experienced staff are available to address all your needs.
</p>
<p className='hai'><Link to= "/login"> MediStore@gmail.com</Link></p>
       <p className='demo1'>Phone : 0421-2332149</p>
        <br/>&nbsp;<p className='demo'><Link to= "/">home </Link></p>
    
      </div>
           
    )
 }
                                                        

export default Aboutus;

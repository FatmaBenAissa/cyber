import React, { useState } from 'react'
import Navbarr from './Navbarr'
import "./algo.css"
function Algorithms() {
    const [tab, settab] = useState("aes")
  return (
        <div style={{width:"100%"}}>
         <Navbarr/>
<div className='algo'>
<div className="container">
  <div className="row">
    <div className="col-md-8" style={{marginTop: "126px",height:"650px",
    width: "100%"
}}>
      <div className="tab" role="tabpanel">
        {/* Nav tabs */}
        <ul className="nav nav-tabs" role="tablist">
          <li role="presentation" className="active">
            <a
              href="#Section1"
              aria-controls="home"
              role="tab"
              data-toggle="tab"
              onClick={()=>settab("aes")}
            >
              AES Encryption
            </a>
          </li>
          <li role="presentation">
            <a
              href="#Section2"
              aria-controls="profile"
              role="tab"
              data-toggle="tab"
               onClick={()=>settab("des")}
            >
             DES Encryption
            </a>
          </li>
          <li role="presentation">
            <a
              href="#Section3"
              aria-controls="messages"
              role="tab"
              data-toggle="tab"
               onClick={()=>settab("rc4")}
            >
              RC4 Encryption
            </a>
          </li>
        </ul>
        {/* Tab panes */}
        <div className="tab-content" style={{height:"450px"}}>
      {tab=="aes"? <div className='section1'>
        <h3>AES- Advanced Encryption Standard</h3>
        <iframe width="100%" height="380" src="https://www.youtube.com/embed/t19J2DtJzB0?si=e1-l89OqWBYJ7pb3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       </div>:
       tab=="des"?
       <div className='section2'>
            <h3>DES- Data Encryption Standard </h3>
        <iframe width="100%" height="380" src="https://www.youtube.com/embed/j53iXhTSi_s?si=jBWfgh_aT3Cg1cd3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         </div>:
         tab=="rc4"?
         <div className='section3'>
        <h3>RC4- Rivest Cipher 4</h3>
        <iframe width="100%" height="380" src="https://www.youtube.com/embed/KV--hmqK13c?si=8u-afIYxa-QPL2UB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>:null
       }
         
           
        </div>
      </div>
    </div>
  </div>
</div>

</div>


  
    </div>
  )
}

export default Algorithms
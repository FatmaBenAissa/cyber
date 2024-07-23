import React, { useState } from 'react'
import Navbarr from './Navbarr'
import "./Home2.css"
function Home2() {
  const [tab, settab] = useState("definition")
  return (
    <div style={{width:"100%"}}>
         <Navbarr/>
         <div className='home2'>
          {/* <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/faf2fe74345669.5c2cfff17bb69.gif"/> */}
         <div className="popup" style={{marginTop:"139px"}}>
  <div className="tabs">
    <input
      defaultChecked
      id="tab1"
      name="tab"
      type="radio"

    />
    <label htmlFor="tab1" style={{width:"330px"}} onClick={()=>settab("definition")}>
     <span style={{ position: "relative",
    top: "-10px"}}>What's Data Encryption?</span> 
    </label>
    <input
      id="tab2"
      name="tab"
      type="radio"
    />
    <label htmlFor="tab2" style={{marginTop:"-30px"}} onClick={()=>settab("benefits")}>
      Benefits
    </label>
    <input
      id="tab3"
      name="tab"
      type="radio"
    />
    <label htmlFor="tab3"  onClick={()=>settab("types")}>
     <span style={{ position: "relative",
    top: "-23px"}}>Types</span>
    </label>
    <input
      id="tab4"
      name="tab"
      type="radio"
    />
    <label htmlFor="tab4" onClick={()=>settab("importance")}>
    <span style={{ position: "relative",
    top: "-44px"}}>Importance </span> 
    </label>
    <input
      id="tab5"
      name="tab"
      type="radio"
    />
    <label htmlFor="tab5" onClick={()=>settab("algorithms")}>
    <span style={{ position: "relative",
    top: "-65px"}}>Algorithms </span>
    </label>

    <div className="marker">
      <div id="top" />
     
      <div id="bottom" />
    </div>
  </div>
</div>
         </div>

      {tab=="definition"?   <div className='data'>
         <div style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
          <h4>Data encryption</h4>
         
          <img src="/definition.png" style={{width:"81%", height:"298px", borderRadius:"20px"}}/>
         </div>
         </div>:
         tab=="benefits"?   <div className='data'>
          <div style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
          <h4>Benefits of data encryption</h4>
         
          <img src="/benefits.png" style={{width:"85%", height:"298px", borderRadius:"20px"}}/>
         </div>
         </div>:
          tab=="types"?   <div className='data'>
          <div style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
          <h4>Types of data encryption</h4>
         
          <img src="/types.png" style={{width:"85%", height:"298px", borderRadius:"20px"}}/>
         </div>
         </div>:
          tab=="importance"?   <div className='data'>
          <div style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
          <h4>Importance of data encryption</h4>
         
          <img src="/importance.png" style={{width:"46%", height:"295px", borderRadius:"20px"}}/>
         </div>
         </div>:
          tab=="algorithms"?   <div className='data'>
           <div style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
          <h4>Data encryption algorithms</h4>
         
          <img src="/algorithms.png" style={{width:"46%", height:"295px", borderRadius:"20px"}}/>
         </div>
         </div>:null
         }
    </div>
  )
}

export default Home2
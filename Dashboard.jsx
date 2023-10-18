import React from 'react';
import'./about.css';
import imgbar from './imgbar.png'
import abc from './abc.png'
import lock from './lock.png'
import call from './call.png'
import cryp from './cryp.png'
import dollar from './dollar.png'
import th from './th.jpeg'



const About = () => {
    return (
        <div id="maindiv">
                <div class="search-container">
                <h3>Hello Sharukh 🖐,</h3>
        <input type="text" id="search-input" placeholder="Search..."></input>
        
    </div>
    <div className="row">
  <div className="block">
  <div>
  <img id="img1" src={dollar} alt="MY IMAGE"></img>
  </div>   
  <div id="div3">
<h6 id='p1'>Earning</h6> <br></br>
<h6 id='p2'>$198k</h6><br></br>
<h6 id='p3'>↑37.8% </h6> <br></br><h6>this month</h6>
  </div>
  </div>
  <div className="bblock">
    <div id="b2"> 
    <img id="bimg" src={call}></img>
    </div>
    <div id="b3"> 
    <h6 id='p1'>Order</h6> <br></br>
<h6 id='p2'>$2.4k</h6><br></br>
<h6 id='p4'>↓2% </h6><br></br><h6> this month</h6></div>
  </div>
  <div className="cblock">
  <div id="c2"> 
    <img id="cimg" src={cryp}></img>
    </div>
    <div id="c3"> 
    <h6 id='p1'>Balance</h6> <br></br>
    <h6 id='p2'>$2.4k</h6><br></br>
<h6 id='p4'>↓2% </h6><br></br><h6> this month</h6></div>
  </div>
  <div className="dblock">
  <div id="d2"> 
    <img id="dimg" src={lock}></img>
    </div>
    <div id="d3"> 
    <h6 id='p1'>Total Sales</h6><br></br>
<h6 id='p2'>$89k</h6><br></br>
<h6 id='p3'>↑11% </h6> <br></br><h6>This Week</h6></div>
  </div>
</div>
<div id="div4">
    <div id="div5">
    <div id="div7">
<p>OVERVIEW</p>
<select name="dog-names" id="dog-names"> 
        <option value="Quaterly">Quaterly</option> 
        <option value="half">half</option> 
        <option value="weekly">weekly</option> 
        <option value="yearly">yearly</option> 
    </select>
    </div>
    <div id="div8">
    <img id="imgbar" src={imgbar} alt="MY IMAGE"></img>
    </div>

    </div>
    <div id="div6">
    <div><h4>CUSTOMERS</h4> 
    <br></br>
    <p>customer that buy product</p></div>
    <div><img id="circle" src={abc} alt="MY IMAGE"></img></div>
    
    </div>
</div>
<div id ="lrow">
<div id="lrow1">
                <h3>Product Sell</h3> <br></br>
                 
                
                </div>
    <div id="lrow2">
    <div id="lrow3">
        <input type="text" id="search-input1" placeholder="Search..."></input> <br></br>
        
        
        </div>
    <label id="dd" for="dog-names">Quaterly</label> 
    <div>
    <select name="dog-names" id="dog-names"> 
        <option value="Last 30 days">Last 30 days</option> 
        <option value="Last 15 days">Last 15 days</option> 
        <option value="Last 10 days">Last 10 days</option> 
        <option value="Last days">Last days</option> 
    </select> </div>
    
    </div>
</div>
<div id="min">
  <div id="min1">
  <p>Product Name</p>
  </div>
<div id="min2">
<p>Stock </p>
      
</div>
<div id="min4">
<p >Price</p>
</div>
<div id="min3">
<p >Total Sales</p>
</div>
</div> <br></br>
<div id="mindicl">
  <div id="mind">
<div id="mind1"><img id="th" src={th}></img></div>
<div id="mind2">Abstract 3D <br></br> this tool can be an excellent device</div>
<div id="mind3">32 in stock</div>
<div id="mind4">$45.99</div>
<div id="mind5">20</div>

  </div>
</div>
<div id="mindicl">
  <div id="mind">
<div id="mind1"><img id="th" src={th}></img></div>
<div id="mind2">Abstract 3D <br></br> this tool can be an excellent device</div>
<div id="mind3">32 in stock</div>
<div id="mind4">$45.99</div>
<div id="mind5">20</div>

  </div>
</div>
        </div>
    );
};

export default About;
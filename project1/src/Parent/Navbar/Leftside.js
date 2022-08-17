import React from "react";
import "./Leftside.css";

const Leftside = () => {
  return (
    <div>
      <div className="one">
        <div className="left">
          <span>Tutorials</span>
          <span>References</span>
          <span>Excersices</span>
          <span>Videos</span>
        </div>

        <div className="right">
          <span><i class="fa fa-globe"></i></span>
          <span><i class="fa fa-moon-o"></i></span>
          <span><i class="fa fa-search"></i></span>
          <span>Pro</span>
          <button style={{width:'100px',height:'35px',backgroundColor:'orange',border:'none',borderRadius:'8px'}}>Get Certified</button>
          <span>Website</span>
          <button style={{width:'100px',height:'35px',backgroundColor:'lightgreen',border:'none',borderRadius:'8px'}}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Leftside;

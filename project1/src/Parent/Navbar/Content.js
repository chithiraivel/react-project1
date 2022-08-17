import React from "react";
import './Content.css'
const Content = () => {
  return (
    <div>
      <div>
        <aside className="content">


          <h1>React Js Tutorials</h1>

          <div style={{display:'flex',justifyContent:'space-between'}}>
            <button style={{width:'100px',height:'45px',backgroundColor:'lightgreen',border:'none',borderRadius:'10px'}}><i class="fa fa-angle-double-left"></i> Home</button>
            <button style={{width:'100px',backgroundColor:'lightgreen',border:'none',borderRadius:'10px'}}> Next<i class="fa fa-angle-double-right"></i></button>
          </div>
        
        <div className="one1">
        <p>React is a JavaScript library for building user interfaces</p>
        <p>React is used to build single-page applications.</p>
        <p>React allows us to create reusable UI components</p>
        <button style={{width:'300px',backgroundColor:'lightgreen',border:'none',borderRadius:'10px',height:'48px'}}>Start Learning React now <i class="fa fa-angle-double-right"></i></button>
        </div>
          
        <div style={{marginLeft:'20px'}}>
          <h2>Learning by Examples</h2>
          <p>Our "Show React" tool makes it easy to demonstrate React. It shows both the code and the result.</p>
        </div>

        <div className="two">
          <h4>Example</h4>
          <p> import React from 'react';</p>
          <p>import ReactDOM from 'react-dom/client';</p>

          <p>function Hello(props) {
                'return'+ <h1>Hello World!</h1>
                }
           </p> 
          <p> const root = ReactDOM.createRoot(document.getElementById("root1"));</p>
           <p>root.render ;</p>

           <button style={{width:'200px',height:'35px',backgroundColor:'lightgreen',border:'none',borderRadius:'8px'}}>Run Example <i class="fa fa-angle-double-right"></i></button>
        </div>
        </aside>
      </div>
    </div>
  );
};

export default Content;

import React, { useState } from 'react'

export default function About() {
    const toToggleStyle = () => {
        if(myStyle.color === "black"){
            setMyStyle({
                color: "white",
                backgroundColor: "black",
                border: "1px solid white"
            });
            setMyBtn("Enable light mode");
        }else{
            setMyStyle({
                color: "black",
                backgroundColor: "white"
            });
            setMyBtn("Enable dark mode");
        }
    }
    const [myBtn, setMyBtn] = useState("Enable dark mode");
    const [myStyle, setMyStyle] = useState({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white"
    });
  return (
    <div className="container-fluid" style={myStyle}>
        <h1 className="my-3">About Us</h1>
        <div class="accordion" id="accordionPanelsStayOpenExample">
           <div class="accordion-item" style={myStyle}>
               <h2 class="accordion-header">
                  <button class="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    About our TextUtils App
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                   <div class="accordion-body">
                      <p><strong>TextUtils</strong> is a React-based web application that helps users
                      analyze and manipulate text efficiently. It provides multiple
                      utilities like text conversion, word counting, and text-to-speech.</p>
                   </div>
                </div>
           </div>
           <div class="accordion-item" style={myStyle}>
               <h2 class="accordion-header">
                  <button class="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                    Features of TextUtils
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show">
                   <div class="accordion-body">
                      <p>
                        <ul>
                          <li>Convert text to Uppercase and Lowercase</li>
                          <li>Word and Character Count</li>
                          <li>Remove Text</li>
                          <li>Copy Text to Clipboard</li>
                          <li>Text to Speech (Speak)</li>
                          <li>Undo Text</li>
                          <li>Remove Extra Spaces</li>
                        </ul>
                      </p>
                   </div>
                </div>
           </div>
           <div class="accordion-item" style={myStyle}>
               <h2 class="accordion-header">
                  <button class="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                    Why Use TextUtils?
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse show">
                   <div class="accordion-body">
                      <p>
                        TextUtils is useful for students, developers, and content writers
                        who want quick text analysis and formatting tools in one place.
                        It is fast, user-friendly, and built using modern React concepts.
                      </p>
                   </div>
                </div>
           </div>
           <div class="accordion-item" style={myStyle}>
               <h2 class="accordion-header">
                  <button class="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                    How Textify Works?
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse show">
                   <div class="accordion-body">
                      <p>
                        Textify works by using React state to store user input and perform
                        real-time text operations. Whenever the user modifies the text,
                        the application updates the state and instantly reflects changes
                        on the user interface.
                      </p>
                   </div>
                </div>
           </div>
           <div class="accordion-item" style={myStyle}>
               <h2 class="accordion-header">
                  <button class="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                    Technologies Used
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse show">
                   <div class="accordion-body">
                      <p>
                        <ul>
                           <li>React JS (Functional Components)</li>
                           <li>JavaScript (ES6)</li>
                           <li>HTML5 & CSS3</li>
                           <li>React Hooks (useState, useHistory)</li>
                           <li>Web Speech API</li>
                        </ul>
                      </p>
                   </div>
                </div>
           </div>
        </div>  
        <button type="button" className="btn btn-light my-3" onClick={toToggleStyle}>{myBtn}</button> 
    </div>
    
  )
}

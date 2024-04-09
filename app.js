import React from "react";
import ReactDOM from "react-dom/client";

const Header= () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ychB0gzKUiciTunIPeII_aIoptW3k81YQpa0wryEFA&s"/>;
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Card</li>
                </ul>
            </div>
        </div>
        
    );
};

const AppLayoutComponent= () =>{
    // it's a App component function which wrriten some JSX code
    return(
        <div className="app">
            <Header/>
            <h1 className="heading">Hi this is AutoLayout Componet</h1>;
        </div>
    );

};

const root=ReactDOM.createRoot(document.getElementById("root"));
//when babel see the angular bracket it understand that it's a React component
root.render(<AppLayoutComponent />);
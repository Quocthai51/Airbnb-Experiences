import React from "react";
import Logo from "../images/airbnbLogo.png"
function Navbar (){
      return ( 
            <div className="Navbar">
                  <div className="Nav--brand">
                        <img src={Logo}/>
                  </div>

            </div>
      )
}

export default Navbar;
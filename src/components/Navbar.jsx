import React from "react";
import assets from "../assets/assets";

const Navbar=({theme,setTheme})=>{
    
    return(
        <div className="">
            <img src={theme==="dark" ? assets.logo_dark : assets.logo} 
            className="w-32 sm:w-40" alt="" />

            <div>

                
            </div>
        </div>
    )
}

export default Navbar
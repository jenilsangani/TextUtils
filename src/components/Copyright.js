import React from "react";

function Copyright(props) {
    let copyRightstyle = {
        fontWeight: "700",
        textAlign:"center"
    }
    return(
        <div style={{color:props.mode === "dark" ? "white" : "black"}}>
            <p style={copyRightstyle}>© JENIL SANGANI | All rights reserved</p>
        </div>
    )
}


export default Copyright
import React from "react";
const ProgressBar=(props)=>{
    const {strength,newLabel}=props;
    return(
        <div>
            <ProgressBar value={strength} min='0' max='100' id="pg"/>
            <label htmlFor="pg">{newLabel}</label>
        </div>
    );
}

export default ProgressBar;
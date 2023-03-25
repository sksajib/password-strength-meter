import React from "react";
const ProgressBar=(props)=>{
    const {strength,newLabel}=props;
    return(
        <div>
            <progress value={strength}  max='100' id="pg"/>
            <label htmlFor="pg">{newLabel}</label>
        </div>
    );
}

export default ProgressBar;
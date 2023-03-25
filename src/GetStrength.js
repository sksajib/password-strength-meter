import React from "react";
import ProgressBar from "./ProgressBar";
//let newPassword=Password.password;
const GetStrength=(props)=>{
    let strength=0;
    let newLabel='';
    let newPassword=props.newPassword;
    if (newPassword.length<8){
        strength=0;
        newLabel='';
    }
    if(newPassword.length>=8){
        strength=strength+25;
        newLabel="Very Weak";
    }
    if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(newPassword)) {
        strength=strength+25;
        newLabel="Weak";
    }
    if (/\d/.test(newPassword)) {
        strength=strength+25;
        newLabel="strong";
    }
    if(/[A-Z]/.test(newPassword)){
        strength=strength+25;
        newLabel="Very Strong";
    }
    return(
        <ProgressBar
        strength={strength}
        newLabel={newLabel}
        />
    );
}
export default GetStrength;
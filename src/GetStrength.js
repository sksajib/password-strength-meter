import React from "react";

const GetStrength=(props)=>{
    let strength=0;
    let newLabel='';
    let newPassword=props.newPassword;
    let eligible=0;
    let specialChar=0;
    let num=0;
    let capital=0;
    if (newPassword.length<8 || newPassword===''){
        strength=0;
        newLabel='';
    }
    if(newPassword.length>=8){
        eligible=1;
        newLabel="Very Weak";
        strength=25;
    }
    if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(newPassword) ) {
        specialChar=1;
    }
    if (/\d/.test(newPassword) ) {
        num=1;
    }
    if(/[A-Z]/.test(newPassword) ){
        capital=1;
    }
    if(eligible===1 && (capital===1 || num===1 || specialChar===1)){
        if(capital===1 && num===1 && specialChar===1){
            strength=100;
            newLabel="Very Strong";
        }
        else if((capital===1 && num===1)||(num===1 && specialChar===1)||(capital===1 && specialChar===1)){
            strength=75;
            newLabel="Strong"
        }
        else{
            strength=50;
            newLabel="Weak";
        }
    }
    
        let color;
      
        if (strength ===100) {
          color = "red";
        } else if (strength ===75) {
          color = "blue";
        } else if (strength === 50) {
          color = "yellow";
        } else if(strength===25){
          color = "red";
        }
        
    return(
        
        <div>
            <progress value={strength}  max='100' id="pg" style={{background:color}}>
                </progress>
            <label htmlFor="pg">{newLabel}</label>
            
        </div>
    );
}
export default GetStrength;
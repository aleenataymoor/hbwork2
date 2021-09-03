"use strict";

//1)
function isHometown(town){
    if(town==='San Francisco'){
        return true
    }
};



//2)
function getFullName(firstName, lastName){
    return `${firstName} ${lastName}`
}


 
//3)
function calculateTotal(basePrice, state, tax=0.05){
    let subTotal= basePrice *(1 + tax);
    let fee=0;
    fee = 0
    if (state === 'CA'){
        fee = 0.03 * subTotal
    }
        
    else if (state === 'PA'){
        fee = 2
    }
    else if (state === 'MA'){
        if (basePrice <= 100){
            fee = 1
        }    
        else{
            fee = 3
        }
    }
    return subTotal + fee

};
 

    

    

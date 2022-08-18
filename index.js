// function for increament and decreament of quatity
function itemQuantityChanging(isIncrease, fieldId){
    const inputField = document.getElementById(fieldId);
    const inputFieldValue = parseInt(inputField.value);
    
    let newInputNumber ;
    if(isIncrease === true){
         newInputNumber = inputFieldValue + 1;
    }else{
        newInputNumber = inputFieldValue - 1;
    }
    
    inputField.value = newInputNumber;
    return newInputNumber;
}

//function for total mobile price
function totalMobilePrice(inputNumberQuantity){
    
    const totalMobilePrice = inputNumberQuantity * 1219;
    const prevTotalMobilePrice = document.getElementById('mbl-total-price');
    prevTotalMobilePrice.innerText = totalMobilePrice;
}

//function for total case price
function totalCasePrice(inputNumberQuantity){
    const totalCasePrice = inputNumberQuantity * 59;
    const prevTotalCasePrice = document.getElementById('case-total-price');
    prevTotalCasePrice.innerText = totalCasePrice;
}

function getTextElementValue(elementId){
    const currentElement = document.getElementById(elementId);
    const currentElementValue = parseInt(currentElement.innerText);
    return currentElementValue;
}

//Calculate sub-total tax and total
function getSubTotal(){
    //subtotal
    const currentPhoneTotal = getTextElementValue('mbl-total-price');
    const currentCaseTotal = getTextElementValue('case-total-price');
    const prevSubTotal = document.getElementById('sub-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal
    prevSubTotal.innerText = currentSubTotal;

    //caculate tax
    const taxAmountString = (currentSubTotal * .10).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    const prevTax = document.getElementById('tax');
    prevTax.innerText = taxAmount;

    //calculate total
    const totalAmount = currentSubTotal + taxAmount;
    const prevTotalAmount = document.getElementById('total');
    prevTotalAmount.innerText = totalAmount;

}


document.getElementById('mobile-plus').addEventListener('click',function(){
    const inputNumberQuantity =  itemQuantityChanging(true,'mobile-input-field');
    totalMobilePrice(inputNumberQuantity);
    getSubTotal();
    
    
});


document.getElementById('mobile-minus').addEventListener('click',function(){
    const inputNumberQuantity = itemQuantityChanging(false,'mobile-input-field');
    totalMobilePrice(inputNumberQuantity);
    getSubTotal();

    
});

document.getElementById('case-plus').addEventListener('click',function(){
    const inputNumberQuantity = itemQuantityChanging(true,'case-input-field');
    totalCasePrice(inputNumberQuantity);
    getSubTotal();
});

document.getElementById('case-minus').addEventListener('click',function(){
    const inputNumberQuantity = itemQuantityChanging(false, 'case-input-field');
    totalCasePrice(inputNumberQuantity);
    getSubTotal();
});


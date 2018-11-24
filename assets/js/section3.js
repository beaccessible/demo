$(document).ready(function() {

    const currencyField = document.getElementById('currency');
    const phoneField = document.getElementById('phone');

    currencyField.addEventListener('keypress', event => {
        if(event.key.match(/\D/) && event.key !== ".") {
            event.preventDefault();
            //exit the function
            return false;
        }
    
        var dotLocation = currencyField.value.search(/\./);

        if(dotLocation === -1) {
            //exit the function if the string doesn't have a digit
            return;
        }

        //don't allow more than one digit (a period!) in the field
        if(dotLocation > -1 && event.key === ".") {
            event.preventDefault();
            return false;
        }

        //to handle if there's a digit and user adds numbers before that digit
        if(currencyField.selectionStart <= dotLocation) {
            dotLocation += 1;
        }
        
        if ((currencyField.value.length - 2) > dotLocation) {
            event.preventDefault();
        }
    });

    //clean up the number when user leaves the field
    currencyField.addEventListener('blur', () => {
        let value = currencyField.value;
        if(value.length === 0) {
            value = "0";
        }
        currencyField.value = parseFloat(value.replace(/,/g, ""))
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    })
    

    $('#phone').on('keypress', function() {
        if(event.key.match(/\D/)) {
            event.preventDefault();
        }
    });

    $('#phone').on('blur', function(){
        area = "(" + this.value.slice(0,3) + ")"
    })
});
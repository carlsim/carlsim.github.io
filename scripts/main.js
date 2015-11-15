function getChar(event) {
    if (event.which === null) {
        return String.fromCharCode(event.keyCode);
    } else if (event.which !== 0 && event.charCode !== 0) {
        return String.fromCharCode(event.which);
    } else {
        return null;
    }
}

/**
 *
 *  calculateTip(total, tip)
 *  Calculates the final tip  
 *
 *  total - Total of acumulated items purchased
 *  tip - Tip amount inputted 
 *
 ***/
function calcTipWithoutTax(total, finalTax, tip) {
    return (total - finalTax) * (tip + 1) - (total - finalTax);
}

function calcTipWithTax(total, tip) {
    return (total * (tip + 1)) - total;
}

function calcTax(total, tax) {
    return total - (total / (tax + 1));
}

function calcTotalWithTax(total, finalTipWithTax, numOfPeople) {
    return (total + finalTipWithTax) / numOfPeople;
}

function calcTotalWithoutTax(total, finalTipWithoutTax, numOfPeople) {
    return (total + finalTipWithoutTax) / numOfPeople;
}
/**
 *
 *  calculation()
 *  Overall calculation done with the application
 *
 **/

function calculation() {
    /**
     *
     *  Variable Initialization
     *
     *  tax - Tax specified by the user
     *  total - Accumulated total on the users bill
     *  numofOeople - Number of people to split the bill with
     *  tip - Tip percentage speicifed by the user. .01 to make the number a decimal number (eg 10% tip = 0.10)
     *
     **/
    var total = parseFloat($('#accumulatedTotal').val());
    var tax = parseFloat($('#tax').val() * 0.01);
    var numOfPeople = parseInt($('#numOfPeople').val());
    var tip = parseFloat($('#tip').val());

    /**
    *
    *   Check to see if total field is empty
    *
    */
    if(isNaN(total)){
        console.log('total = 0');
        total = 0;
    }

    tip *= 0.01;
    console.log("Tax: " + tax);
    console.log("Total: " + total);
    console.log("Num of People: " + numOfPeople);
    console.log("Tip: " + tip);

    /**
     *
     *  Variable Initializations for calculation
     *
     *  finalTipl - final calculation for the tip
     *  finalCalculationWithTip - overall total with the tip
     *  finalCalculationWithoutTip - overall total without the tip
     *
     **/
    var finalTax = calcTax(total, tax);
    var finalTipWithTax = calcTipWithTax(total, tip);
    var finalTipWithoutTax = calcTipWithoutTax(total, finalTax, tip);
    var finalCalcTotalWithTax = calcTotalWithTax(total, finalTipWithTax, numOfPeople);
    var finalCalcTotalWithoutTax = calcTotalWithoutTax(total, finalTipWithoutTax, numOfPeople);

    $('#taxAmount').text("$" + finalTax.toFixed(2));
    $('#tipTotalWithTax').text("$" + finalTipWithTax.toFixed(2));
    $('#tip-total-without-tax').text("$" + finalTipWithoutTax.toFixed(2));
    $('#calcTotalWithTax').text("$" + finalCalcTotalWithTax.toFixed(2));
    $('#calc-total-without-tax').text("$" + finalCalcTotalWithoutTax.toFixed(2));
}

function init(){
    console.log("in init()");
    $('#total-more-area').addClass(
        'hide'
    );
    $('#info-more-area').addClass(
        'hide'
    );
    
    $('#total-more-button').click(function(){
        if($('#total-more-area').hasClass('hide')){
            $('#total-more-area').removeClass('hide').addClass('show');
            $('#total-more-button').text('Less bill info');
            console.log("clicked show more info");
        }else if($('#total-more-area').hasClass('show')){
            
            $('#total-more-area').removeClass('show').addClass('hide');
            $('#total-more-button').text('Full bill info');
            console.log("clicked show less info");
        }
    });

    $('#info-more-button').click(function(){
        if($('#info-more-area').hasClass('hide')){
            $('#info-more-area').removeClass('hide').addClass('show');
            $('#info-more-button').text('Less');
        }else if($('#info-more-area').hasClass('show')){
            
            $('#info-more-area').removeClass('show').addClass('hide');
            $('#info-more-button').text('More');
        }
    });
}

/**
 *
 *  When the "Submit" id (usually a button) is clicked
 *
 **/
$(function(){
    init();
    calculation();
});

$('#tax').on('input', function(event) {
    calculation();
});

$('#accumulatedTotal').on('input', function(event) {
    calculation();
});

$('numOfPeople').on('input', function(event) {
    calculation();
});

$('#tip').on('input', function(event) {
    calculation();
});
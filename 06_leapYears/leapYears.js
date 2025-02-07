const leapYears = function(year) {

    divByFour = year%4 == 0;
    divByHundred = year%100 == 0;
    divByFourHundred = year%400 == 0;
    
    return (divByFour && (!divByHundred || divByFourHundred)) 
};

// Do not edit below this line
module.exports = leapYears;

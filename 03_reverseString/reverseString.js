const reverseString = function(str) {

    let revStr = '';
    const strLen = str.length;

    for (let i = 0; i < str.length; i++) {
        let strChar = str[str.length-i-1];
        revStr = revStr.concat(strChar);
    }

    return revStr
};

// Do not edit below this line
module.exports = reverseString;

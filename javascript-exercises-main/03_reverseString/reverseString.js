const reverseString = function(string) {
    let stringArray = string.split("");
    let reversedArray = stringArray.reverse();
    return reversedArray.join("");
};

// Do not edit below this line
module.exports = reverseString;

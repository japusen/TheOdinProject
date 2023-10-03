const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    
    let repeated = "";
    for (let i = 0; i < num; i++) {
        repeated = repeated.concat(string);
    }
    return repeated
};

// Do not edit below this line
module.exports = repeatString;

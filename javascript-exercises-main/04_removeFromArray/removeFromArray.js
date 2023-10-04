const removeFromArray = function(array, ...elementsToRemove) {
    return array.filter(element => !elementsToRemove.includes(element))
};

// Do not edit below this line
module.exports = removeFromArray;

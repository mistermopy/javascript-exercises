const removeFromArray = function() {
    let myArray = Array.from(arguments[0]);
    for (let i = 0; i < arguments.length; i++) {
        for (let i = 0; i < myArray.length; i++) {
            if ((myArray[i] == arguments[1]) && (typeof myArray[i] == typeof arguments[1])) {
                myArray.splice(i, 1);
            } else if ((myArray[i] == arguments[2]) && (typeof myArray[i] == typeof arguments[2])) {
                myArray.splice(i, 1);
            } else if ((myArray[i] == arguments[3]) && (typeof myArray[i] == typeof arguments[3])) {
                myArray.splice(i, 1);
            } else if ((myArray[i] == arguments[4]) && (typeof myArray[i] == typeof arguments[4])) {
                myArray.splice(i, 1);
            }
        }
    }
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;

// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

// yourArray.filter(element => condition)

// [1,-4,7,12]
const positiveSum = arr => {

    // const positives = arr.filter(number => number > 0);
    // console.log("positives", positives) // return arr filter by number > 0

    // let count = 0;

    // const forEachResult = positives.forEach( positive => count += positive);
    // console.log("forEach", forEachResult)

    // const mapResult = positives.map( positive => positive * 2);
    // console.log("mapResult", mapResult)

    const totalPositiv = arr.reduce((total, currentNumber) => {
        if (currentNumber > 0) {
            return total + currentNumber
        } else {
            return total
        }
    }, 0)

    return totalPositiv;
}

module.exports = positiveSum


//

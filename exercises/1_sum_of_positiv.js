// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

// const positiveSum = arr => {

//     let temp = 0;
//     arr.forEach(number => {
//         if (number > 0) temp = temp + number;
//     })

//     return temp;
// }

// const filterArray = arr.filter(element => condition)

const positiveSum = arr => {
    let temp = 0;

    const positiveNumber = arr.filter(number => number > 0)
                              .forEach(number => {
                                 if (number > 0) temp = temp + number;
                              });

    return temp;

}

module.exports = positiveSum


// forEach => iteration sans retour
// map => iteration sur chaque element du tableau avec un tableau en retour
// filter => iteration sur le tableau et creation du tableau avec uniquement certain element

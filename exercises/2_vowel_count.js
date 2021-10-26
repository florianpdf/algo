// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u, y as vowels for this Kata.
// The input string will consist of lower and upper case letters and/or spaces.


// const array = str.split("")

// str = "abracadabra"

const getCount = str => {
    let count = 0;
    const vowels = "aeiouyAEIOUY"
   const array = str.toLowerCase().split("")
   for (let i =0; i<array.length; i++){
       for (let y = 0; y< vowels.length; y++){
           if (array[i] === vowels[y]) count++;
       }
   }
   return count;
}

const getCount = str => {

// Creer un tableau avec uniquement les voyels
// Compter le nb d'element dans le tableau
// Use filter / includes / split / length

}

// str = "abracadabra"
/ afterSplit => ["a", "b", "r", "a", "c", "a", "d", "a", "b", "r", "a"]
[

module.exports = getCount;

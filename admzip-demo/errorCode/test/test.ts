

let array = [1, 2, 3, 4, 5];
let indexToDelete = 2;

// delete array[indexToDelete];
array.splice(2, 1);

console.log(array.length, array); // Output: [1, 2, undefined, 4, 5]
for(let i of array){
  console.log(i);
}
let example1 = [1, 2, 3, 4, 5, 6];
let example2 = [...example1];


console.log(example1);
console.log(example2);


//


let example1 = {
    firstName: 'Amy'
};

let example2 = {
    ...example1
};

// example2 = {firstName: 'Amy'}
// useful in constructors in TypeScript
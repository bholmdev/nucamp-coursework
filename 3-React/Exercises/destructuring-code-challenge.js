// Do not edit the array. It will be used in the challenges.
const motorcycles = [
    { 
        id: 0,
        make: 'Suzuki',
        model: 'TU250X',
        cc: 250
    },
    { 
        id: 1,
        make: 'Triumph',
        model: 'Street Twin',
        cc: 900
    },
    {
        id: 2,
        make: 'Moto Guzzi',
        model: 'V7 Stone',
        cc: 750
    }
];

// CHALLENGE 1
// Use array destructuring to destructure the three objects contained in the motorcycles array into const variables named moto1, moto2, and moto3.
// Write your code in line 26. When you are ready to test your code, un-comment line 28, then save and run this codepen.
const [moto1, moto2, moto3] = motorcycles

console.log('Challenge 1:', moto1.model);

// CHALLENGE 2
// Destructure the model property from the moto1 object, inside the parameter list for the listModel() function below.
// When you're ready to test your code, un-comment lines 34 and 36, then save and run this codepen. 
const listModel = ({ model }) => {
    console.log('Challenge 2:', model);
};
listModel(moto2);

// CHALLENGE 3
// Destructure the make, model, and cc properties from the moto3 object.
// Write your code on line 41 below. When ready to test your code, un-comment line 43, then save and run this codepen.
const { make, model, cc } = moto3;

console.log(`Challenge 3: ${make} ${model}, ${cc}cc`);


// BONUS CHALLENGE
// Read the section titled "Assigning to new variable names" at this link:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#assigning_to_new_variable_names
// Then write a single line of code in line 51 that destructures the id property from moto3 and assigns it to a const named motoId.
// When done, un-comment the final console.log() line, then save and run your code. 
const { id: moto3Id } = moto3

console.log('Bonus challenge:', moto3Id);
const myProperty = "foo";
const myObject = {
    [myProperty]: "This is a test"
};
console.log(myObject);

// Spread a copy of what's inside an object
const landVehicles = ["sedan", "truck", "van"];
const waterVehicles = ["canoe", "sailboat", "submarine"];
const vehicles = [...landVehicles, ...waterVehicles];
console.log(vehicles);

const moreLandVehicles = [...landVehicles, "tank"];
console.log(moreLandVehicles);

const mixNMatch = [...landVehicles, "banana", 3, 3, {someOjbProperty: "someObjectValue"}, ...waterVehicles];
console.log(mixNMatch);

const objOne = {color: "blue", height: 12};
const objTwo = {material: "ceramic", width: 6};
const objOneAndTwoCombined = {...objOne, ...objTwo};
console.log(objOneAndTwoCombined);

const objThree = {color: "red", width: 7};
const objOneAndThreeCombined = {...objOne, ...objThree};
console.log(objOneAndThreeCombined);

const objOneAndThreeCombinedReverse = {...objThree, ...objOne};
console.log(objOneAndThreeCombinedReverse);

const objOneUpdatedHeight = {...objOne, height: 300};
console.log(objOneUpdatedHeight);
// Array.map() review
const names = ["anne", "barry", "chloe", "mark", "bill"]
const bigNames = names.map((name) => name.slice(0, 1).toUpperCase() + name.slice(1)); //  Added code to only captialize the first letter of each name.
console.log(bigNames);

// Array.filter() and Array.find() basic syntax
// const newArray = Array.filter(callbackFn);  Iterate over array and lists all
// const value = Array.find(callbackFn);  Iterates over array and stops

// Array.filter() example
const things = [
    {
        id: 0,
        title: 'whiskers on kittens',
        favorite: true,
        points: 97
    },
    {
        id: 1,
        title: 'raindrops on roses',
        favorite: true,
        points: 77
    },
    {
        id: 2,
        title: 'brown paper packages tied up with string',
        favorite: true,
        points: 87
    },
    {
        id: 3,
        title: 'dog bite',
        favorite: false,
        featured: 'true',
        points: 12
    },
    {
        id: 4,
        title: 'bee sting',
        favorite: false,
        points: 6
    }
];

const myFavoriteThings = things.filter((favoriteThing) => favoriteThing.favorite === true);
console.log(myFavoriteThings);

const thingsWithOverFiftyPoints = things.filter((thing) => thing.points > 50);
console.log(thingsWithOverFiftyPoints);

// Array.find() example
const selectThingById = (id) => {
    return things.find((thing) => thing.id === id);
}
const selectedThing = selectThingById(4);
console.log(selectedThing);

const isFeatured = things.find((thing) => thing.featured);
console.log(isFeatured);
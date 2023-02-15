/* Datatypes/Variables */
let houseType = "straw";
console.log(houseType);
let sky = "blue";
console.log(sky);
sky = "red";
console.log(sky);
let dwarfName = "Sleepy";
console.log(dwarfName);
/*dwarfname will not work */

/* Operators */
console.log(3 * 3.5);
console.log(-1 + 1);
console.log(100 - 150);
console.log(6 / 5);
console.log("a" * "b");
console.log("a" + "b");
console.log("a" + 1);
console.log(true + false + true);
/* Increment/Decrement Operators*/
let x = 1;
console.log(x);
++x; /* increments then returns value */
console.log(x);
x++; /* returns value then increments */ 
console.log(x);
--x;
console.log(x);
x--;
console.log(x);
/* Assignment Operators */
console.log(x + 3);
console.log(x);
x = 5;
console.log(x);
x = x + 3;
console.log(x);
x = 5;
x += 3;
console.log(x);
x += "foo";
console.log(x);

/* Comparison and Logical Operators */
/* All comparison operators return true or false */
console.log(2 == 2); /* True */
console.log(2 === 2); /* True */
console.log("2" == 2); /* True */
console.log("2" === 2); /* False */
console.log(0 == false); /* True */
console.log(0 === false); /* False */
console.log(0 == true); /* False */
console.log(1 == true); /* True */
console.log(0 != false); /* False */
console.log(0 !== false); /* True */
/*  < and < */
console.log(10 > 5);  /* True */
console.log(7 <= 6); /* False */
console.log(0 >= 0);  /* True */
/* Logical Operators */
/* !  and !! */
console.log(!true); /* False */
console.log(!false); /* True */
console.log(!-3); /* False */
console.log(!!-3); /* True */
console.log(!0); /* True */
console.log(!"bagel"); /* False */
/* && */
console.log(true && true); /* True */
console.log(false && false); /* False */
console.log(true && false); /* False */
console.log(false && true); /* False */
console.log(1 && 2); /* 2 */
console.log(1 && 0); /* 0 */
console.log(0 && null); /* null */
console.log(null && 0); /* null */
console.log(true && null && 5); /* null */
/* || */
console.log(true || false); /* True */
console.log(false || true); /* True */
console.log(true || true); /* True */
console.log(false || false); /* False */
console.log(1 || 0); /* 1 */
console.log(0 || NaN || null); /* null */
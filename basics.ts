// -----------------------------------------------
// This file contains the BASICS of typescript
// -----------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------
// ---- setting 'Primitive' type assignments to VARIABLES

let age: number = 9;
age = 20;

let userName: string = "Mikel";
userName = "Mikel Kamel";

let isLoggedIn: boolean = false;
isLoggedIn = true;

// 📝 sidenote  ->  we dont usually set data type assignment of  'null' or 'undefined' to variables, because these variables can then only have 'null' or 'undefined' values otherwise typescript would give us an error, which doesn't make sense.
// 'null' and 'undefined' type assignments can be used in a slightly different way which will be shown below 👇

// ----------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------
// ---- setting 'Primitive' type assignments to FUNCTION PARAMETERS

const subtract = (a: number, b: number) => {
  return a - b;
};

// ----------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------
// ---- setting 'Reference' type assignments to ....

// ---------------------------
// setting 'Array' type assignment
// ---------------------------
// this variable con ONLY contain an 'array' of *STRINGS*
let movies: string[];
movies = ["batman", "god of war"];

// this variable con ONLY contain an 'array' of *NUMBERS*
let ages: number[];
ages = [2, 3, 4, 5];

// this variable con ONLY contain an 'array' of *BOOLEANS*
let isGood: boolean[];
isGood = [true, false, true];

// ---------------------------
// setting 'Object' type definition.        * We are defining the structure of an object *
// ---------------------------
// means 'person' objects should only have these properties. And the value of these properties should only match the assigned types of those properties.
let person: {
  name: string;
  age: number;
  isFunny: boolean;
};

person = {
  name: "Mikel",
  age: 28,
  isFunny: false,
};

// 'typescript' will give us an error here since 'canJump' property does not exist in the 'person' object type assignment
person = {
  canJump: true,
};

/* 📝 sidenote: 
            - By default, 'typescript' allows us to store ANY value in a variable.
            - it ALSO has a special 'any' type, which is by default assigned to variable that dont have any assigned types and that does NOT have an initial value.
            - we can also explicitly assign it like so 👇
                             let persons: any;
            - typically we should NOT use the 'any' type assignment since it defeats the purpose of using 'typescript' in the first place 
*/

// ---------------------------
// Combining 'Array' & 'Object' type assignments   ->        * ie, an Array of Objects *
// ---------------------------
let people: {
  name: string;
  age: number;
  isFunny: boolean;
}[];

people = [
  { name: "Mikel", age: 28, isFunny: false },
  { name: "Sandy", age: 27, isFunny: true },
  { name: "lul", age: 999, isFunny: true },
];

// ----------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------
// ---- 'Union' types.       [Allow multiple types to a variable]

let course: string | number | boolean | string[] = "React - The Complete Guide";

course = "LUL";
course = 27;
course = false;
course = ["React", "Web Dev", "LULULUL"];

// ----------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------
// ----

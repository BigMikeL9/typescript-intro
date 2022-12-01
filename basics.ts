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
// ---- 'Type Aliases'  -  Reusable Types    🛑 DONT USE 🛑

// 'Type Alias'
type Dog = {
  type: string;
  age: number;
  isRare: boolean;
};

// ---
const husky: Dog = {
  type: "husky",
  age: 10,
  isRare: false,
};

// ---
let dogs: Dog[];

dogs = [
  { type: "husky", age: 10, isRare: false },
  { type: "German Shepherd", age: 6, isRare: true },
];

// ---------------------------------------------------
// ---- 'Interface'  -  Reusable Types    🌟 USE THIS 🌟

// 🌟 NOTE: interface does NOT need an equal sign
interface Cat {
  color: string;
  age?: number; // Optional Property
  isRare?: boolean; // Optional Property
}

const cat: Cat = {
  color: "black",
  age: 10,
};

// ----------------------------------------------------------------------------------------------------------------------------
// ---- 'Functions & Types' in typescript
// -----------------------------------

// Setting types for function Parameters 👇
// ⭐⭐ Typescript does NOT only use types for the parameters, but ALSO for the RETURNED value of the function.
// its best practice to let 'Type Inference' automatically set the type for the return function value depending on its parameters types, UNLESS we have a reason otherwise and in that case we can define function returned values as shown below.

//                                           👇👇  -->  RETURNED value 'union type'
const subtract = (a: number, b: number): number | string => {
  // return value is inferred by Typescript through 'Type Inference' feature. So typescript automatically assigns the type 'number' to the return value.
  return a - b;
};

// ---
// There is a special return type ONLY for functions that does NOT return anything. For instance for a function that just 'console.log' a value 👇
// that special returned type is 'void'. 'void' type is basically comparable to 'null' and 'undefined' but ONLY used in conjunction with functions, and it means that that function never returns.

// REMEMBER: dont need to specify parameter or returned value type due to 'Type Inference' in typescript
const printToConsole = (a: any): void => {
  console.log(a);
};

// ----------------------------------------------------------------------------------------------------------------------------
// ---- 'Generic Types' in typescript
// -----------------------------------

// 'Genrics' lets us create functions or variables that are type safe, yet flexible.
// So instead of using 'any' to make a function or variable flexible, we use '<{type name}>' so that typescript can detect and add type to our returned value through 'type inference'

const insertAtBeginning = <Type>(array: Type[], value: Type) => {
  const newArray = [value, ...array];
  return newArray;
};

const numbersArray = insertAtBeginning([1, 2, 3, 4], 0);
const stringsArray = insertAtBeginning(["a", "b", "c", "d"], "i");
const combinedArray = insertAtBeginning(["a", 2, "c", 3], "i");

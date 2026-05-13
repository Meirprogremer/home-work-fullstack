// task 1:

let person1 = {
  name: "meir",
  age: 31,
  id: 3124324,
  isStudent: true,
};

let person2 = {
  name: "meir",
  age: 99,
  id: 3124324,
  isStudent: true,
};
person1 = person2;

console.log("person 1 ",person1);
console.log("person 2 ",person2);

// in this part the person1 and person2 are conected and them the same objact and the last inside informtion this is what we see
// if im not match the Object so evry one is a singel Object

let score1 = 85
let score2 = score1
score2 = 100
console.log("score 1 ",score1)
console.log("score 2 ",score2)
// The difference is that an object points to the same place in memory, so even when you edit or add to it, the change is in the same place in memory, but in variables they point to different places in memory, and when you make a new object, even if you compare it, it points to a new place in memory.

// Numbers (Primitives) are stored in the Stack. They are small and simple, so JavaScript copies the actual value. Each variable holds its own independent copy.
// Objects (Reference Types) are stored in the Heap. Since they can be large, the Stack only stores a reference (pointer) to their memory address. When assigning an object, we only copy the address, meaning both variables "point" to the same location in the Heap.

// task 2:

let a ="15"
let b = 10
let c = "2"

let result = +a + b
console.log(result)
console.log(typeof result)
console.log(a*c)

// In JavaScript, the + operator is overloaded: it performs both mathematical addition and string concatenation. If one of the operands is a string, JavaScript prioritizes concatenation (which is why we got "1510").
// On the other hand, the * operator is strictly mathematical. Therefore, the engine performs automatic Type Coercion – it converts the strings into numbers behind the scenes to complete the calculation (which is why we got 30).

// task 3:

let secretMessage = "Hello";

if (true) {
  let secretMessage = "Goodbye";
  let hackerMessage = "I am inside!";
  console.log("Inside block: ", secretMessage);
}

console.log("Outside block 1: ", secretMessage);
console.log("Outside block 2: ", hackerMessage);

// Block Scope: The let keyword is block-scoped, meaning it only exists within the curly braces {} where it was defined. That's why it throws an error outside. In contrast, var is function-scoped and ignores blocks, making it accessible outside the if.

// Shadowing: Inside the block, we declared a new let variable with the same name. This doesn't change the outer variable; it just creates a temporary "shadow" version that exists only inside the block.

// task 4:

const mixedValues = [0, "hello", "", null, 42, undefined, NaN, "false", [], {}];

// Loop through each item in the array
for (let i = 0; i < mixedValues.length; i++) {
    let currentValue = mixedValues[i];
    
    // Check if the current value is Truthy or Falsy
    if (currentValue) {
        console.log(currentValue + " is Truthy");
    } else {
        console.log(currentValue + " is Falsy");
    }
}

/*
--- Answers for the Lecturer ---

1. Was the string "false" evaluated as Truthy or Falsy?
   Answer: Truthy. It is a regular, non-empty string, which always evaluates to true. It is NOT the boolean value false.

2. Is an empty array [] Truthy or Falsy?
   Answer: Truthy. In JavaScript, all arrays and objects (Reference types) are inherently Truthy, even if they are empty.
   
Reasoning: Neither of these values belongs to the strict list of Falsy values in JavaScript. The only Falsy values are: 0, "" (empty string), null, undefined, NaN, and the boolean false. Everything else is Truthy.
*/
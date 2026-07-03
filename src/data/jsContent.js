export const jsContent = {
  1: {
    title: "What is JavaScript and where is it used?",
    sections: [
      {
        heading: "The Language of the Web",
        text: "JavaScript (JS) is a high-level, often just-in-time compiled, multi-paradigm programming language. Originally built to add interactivity to web pages (DOM manipulation) inside the browser, it has evolved into a versatile language used everywhere."
      },
      {
        heading: "Browser vs Server (Node.js)",
        text: "In the browser, JS engines (like Google's V8 or Mozilla's SpiderMonkey) execute code and provide APIs like the DOM (Document Object Model), `window`, and `fetch`. Node.js is a runtime environment that uses the V8 engine outside the browser, allowing JS to interact with the OS, file system, and network, making it a powerful backend language. Node.js does not have a DOM or `window` object; instead, it provides a `global` object and modules like `fs` (file system)."
      }
    ]
  },
  2: {
    title: "Primitive and Reference Data Types",
    sections: [
      {
        heading: "Primitive Types (Stored on the Stack)",
        text: "Primitives are immutable values. When you assign a primitive to a variable, it holds the actual value. If you assign that variable to another, the value is copied. The 7 primitives are: String, Number, Boolean, Undefined, Null, Symbol, and BigInt."
      },
      {
        heading: "Reference Types (Stored on the Heap)",
        text: "Objects, Arrays, and Functions are Reference types. When you assign an object to a variable, the variable stores a memory address (reference) pointing to where the object lives on the Heap. Copying the variable only copies the reference, not the underlying object.",
        code: `// Primitive Copy
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (Remains unchanged)

// Reference Copy
let obj1 = { name: "Akshay" };
let obj2 = obj1;
obj2.name = "Devi";
console.log(obj1.name); // "Devi" (Mutated because both point to the same memory)`
      }
    ]
  },
  3: {
    title: "Type Coercion",
    sections: [
      {
        heading: "Implicit vs Explicit Coercion",
        text: "Explicit coercion is when a developer intentionally converts a type using functions like `Number(value)` or `String(value)`. Implicit coercion happens automatically when the JS engine encounters operations involving differing types."
      },
      {
        heading: "The + Operator vs Other Math Operators",
        text: "The `+` operator acts as both mathematical addition and string concatenation. If any operand is a string, JS coerces the others to strings. However, for `-`, `*`, and `/`, JS always attempts to coerce strings into numbers.",
        code: `console.log(5 + "5");  // "55" (String concatenation)
console.log(5 - "2");  // 3 (Numeric subtraction)
console.log("10" * "2"); // 20
console.log(+"5"); // 5 (Unary plus explicitly coerces to number)`
      },
      {
        heading: "Truthy and Falsy Values",
        text: "When evaluated in a boolean context (like an `if` statement), values are implicitly coerced. The only Falsy values are: `false`, `0`, `-0`, `0n` (BigInt), `\"\"` (empty string), `null`, `undefined`, and `NaN`. Everything else is Truthy (including empty arrays `[]` and empty objects `{}`)."
      }
    ]
  },
  4: {
    title: "null vs undefined",
    sections: [
      {
        heading: "undefined: Unintentional Absence",
        text: "`undefined` means a variable has been declared but has not yet been assigned a value. It is the default return value of functions that don't explicitly return anything, and the value of non-existent object properties."
      },
      {
        heading: "null: Intentional Absence",
        text: "`null` is an assignment value. It represents the intentional absence of any object value. You assign it manually to indicate that a variable is deliberately empty.",
        code: `let x;
console.log(x); // undefined

let y = null;
console.log(y); // null

console.log(null == undefined);  // true (They represent absence of value)
console.log(null === undefined); // false (Different data types)`
      }
    ]
  },
  5: {
    title: "typeof operator",
    sections: [
      {
        heading: "Identifying Types",
        text: "The `typeof` operator returns a string indicating the type of the unevaluated operand. It is useful for checking primitives but less reliable for reference types (since Objects, Arrays, and Dates all return 'object')."
      },
      {
        heading: "The 'typeof null' Bug",
        text: "In JavaScript, `typeof null` returns `'object'`. This is a famous, unfixable bug from the first version of JavaScript. Because fixing it would break legacy web code, it remains in the language today.",
        code: `console.log(typeof 42); // "number"
console.log(typeof "JS"); // "string"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (The bug!)
console.log(typeof []); // "object"
console.log(typeof function(){}); // "function"`
      }
    ]
  },
  6: {
    title: "== vs ===",
    sections: [
      {
        heading: "Loose Equality (==)",
        text: "The double equals operator compares two values for equality AFTER performing implicit type coercion if the types differ. This can lead to unpredictable results and is generally avoided in modern JS."
      },
      {
        heading: "Strict Equality (===)",
        text: "The triple equals operator checks for both value AND type equality. No type coercion is performed. If the types are different, it immediately returns false. This is the industry standard.",
        code: `console.log(5 == "5");  // true (Coerces string to number)
console.log(5 === "5"); // false (Different types)

console.log(0 == false);  // true
console.log(0 === false); // false

// Edge Cases
console.log(NaN === NaN); // false (NaN is never equal to anything)
console.log(Object.is(NaN, NaN)); // true (Modern way to check NaN)`
      }
    ]
  },
  7: {
    title: "let, var, and const",
    sections: [
      {
        heading: "var (Legacy)",
        text: "`var` is function-scoped (or globally scoped). Variables declared with `var` can be re-declared and updated. They are hoisted to the top of their scope and initialized with `undefined`, which can cause bugs."
      },
      {
        heading: "let (Modern Mutable)",
        text: "`let` is block-scoped (constrained to the `{}` where it is defined). It can be updated but NOT re-declared within the same scope. It is hoisted but NOT initialized, landing in the Temporal Dead Zone (TDZ)."
      },
      {
        heading: "const (Modern Immutable Binding)",
        text: "`const` is block-scoped. It cannot be updated or re-declared. It must be initialized at the time of declaration. Note: `const` prevents reassignment of the variable, but if the variable holds an object or array, the internal properties/elements can still be mutated.",
        code: `const user = { name: "Akshay" };
user.name = "John"; // Allowed! The object itself mutated.
// user = { name: "Bob" }; // TypeError! Cannot reassign a const variable.`
      }
    ]
  },
  8: {
    title: "Scope (Global, Function, Block)",
    sections: [
      {
        heading: "Scope Hierarchy",
        text: "Scope determines the accessibility (visibility) of variables. \n- Global Scope: Variables declared outside any function or block. Accessible everywhere.\n- Function Scope: Variables declared inside a function (using var, let, or const) are only accessible within that function.\n- Block Scope: Introduced in ES6, variables declared inside `{}` blocks (like if statements or for loops) using `let` or `const` are trapped inside that block."
      },
      {
        heading: "Lexical Scoping",
        text: "JavaScript uses Lexical Scoping. This means inner functions have access to variables declared in their outer scope, determined strictly by where the code is written in the file, not where it is invoked.",
        code: `let globalVar = "I am global";

function outer() {
  let outerVar = "I am in outer";
  
  function inner() {
    let innerVar = "I am inside";
    console.log(globalVar, outerVar, innerVar); // Can access all three
  }
  // console.log(innerVar); // ReferenceError
}`
      }
    ]
  },
  9: {
    title: "Hoisting and Temporal Dead Zone",
    sections: [
      {
        heading: "Hoisting Explained",
        text: "Hoisting is JS's default behavior of moving declarations to the top of their respective scopes during the compilation phase, before execution. Only declarations are hoisted, not initializations/assignments."
      },
      {
        heading: "The Temporal Dead Zone (TDZ)",
        text: "`var` is hoisted and initialized with `undefined`. `let` and `const` are hoisted, but they remain uninitialized. The time between the start of the block and the actual line where the variable is declared is the TDZ. Accessing a variable in its TDZ throws a ReferenceError.",
        code: `console.log(a); // undefined (Hoisted & initialized)
var a = 10;

// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;

foo(); // "Hello!" (Function declarations are fully hoisted)
function foo() { console.log("Hello!"); }

// bar(); // TypeError: bar is not a function (Only the variable is hoisted, not the function assignment)
var bar = function() { console.log("Hi"); }`
      }
    ]
  },
  10: {
    title: "Strict Mode ('use strict')",
    sections: [
      {
        heading: "Enforcing Cleaner Code",
        text: "Adding `\"use strict\";` at the top of a JS file or function opts into a restricted variant of JavaScript. It intentionally makes the language more secure and less forgiving of bad practices."
      },
      {
        heading: "Key Changes in Strict Mode",
        text: "1. Prevents accidental global variables (assigning to an undeclared variable throws an error instead of attaching to the `window` object).\n2. Throws errors on silent failures (like assigning a value to a non-writable property).\n3. Prohibits duplicate parameter names in functions.\n4. `this` is `undefined` in global function calls, rather than defaulting to the global `window` object.",
        code: `"use strict";
x = 3.14; // ReferenceError: x is not defined (Without strict mode, x becomes global)`
      }
    ]
  },
  11: {
    title: "Execution Context and Call Stack",
    sections: [
      {
        heading: "Execution Context",
        text: "An Execution Context (EC) is the environment where JS code is evaluated and executed. There is one Global Execution Context (GEC) created by default, and a Function Execution Context (FEC) created every time a function is called. The EC happens in two phases: \n1. Memory Creation Phase: JS allocates memory for variables and functions (Hoisting happens here).\n2. Code Execution Phase: Code runs line by line, assigning values and executing functions."
      },
      {
        heading: "The Call Stack",
        text: "The Call Stack is a LIFO (Last In, First Out) data structure used to manage Execution Contexts. When a script runs, the GEC is pushed to the stack. Whenever a function is invoked, its FEC is pushed to the top of the stack. Once the function returns, it is popped off the stack.",
        code: `function first() {
  second();
  console.log("First complete");
}
function second() {
  console.log("Second complete");
}
first(); 
// Stack order: [GEC] -> [GEC, first] -> [GEC, first, second]
// Pops second, pops first. Outputs: "Second complete", then "First complete".`
      }
    ]
  },
  12: {
    title: "Functions (Declaration, Expression, Arrow)",
    sections: [
      {
        heading: "First-Class Citizens",
        text: "In JS, functions are objects. They are 'first-class citizens', meaning they can be assigned to variables, passed as arguments, and returned from other functions."
      },
      {
        heading: "Declarations vs Expressions",
        text: "Function Declarations start with the `function` keyword and are fully hoisted. Function Expressions assign an anonymous function to a variable, and are only hoisted based on the variable type (`var`, `let`, `const`)."
      },
      {
        heading: "Arrow Functions (ES6)",
        text: "Arrow functions provide a concise syntax. Critically, they do NOT have their own `this` binding (they inherit `this` lexically from the parent scope), nor do they have an `arguments` object.",
        code: `// Declaration
function add(a, b) { return a + b; }

// Expression
const multiply = function(a, b) { return a * b; }

// Arrow Function (Implicit return if one line)
const subtract = (a, b) => a - b;`
      }
    ]
  },
  13: {
    title: "Arrays and Basic Array Methods",
    sections: [
      {
        heading: "Array Basics",
        text: "Arrays are ordered collections of data. Under the hood, JS arrays are objects with numbered keys and a special `length` property."
      },
      {
        heading: "Mutating Methods",
        text: "- push(): Adds to the end.\n- pop(): Removes from the end.\n- unshift(): Adds to the start (slow, forces index re-calculation).\n- shift(): Removes from the start.\n- splice(start, deleteCount, items...): Adds/removes items anywhere in the array. Mutates the original."
      },
      {
        heading: "Non-Mutating Methods",
        text: "- slice(start, end): Returns a shallow copy of a portion of the array.\n- concat(): Merges arrays.\n- includes(): Returns true/false if an item exists.",
        code: `const arr = [1, 2, 3];
arr.push(4); // [1, 2, 3, 4]
const chunk = arr.slice(1, 3); // [2, 3] (Original arr is untouched)`
      }
    ]
  },
  14: {
    title: "Higher-Order Functions and Callbacks",
    sections: [
      {
        heading: "Definition",
        text: "A Higher-Order Function (HOF) is any function that takes one or more functions as arguments (callbacks) OR returns a function as its result."
      },
      {
        heading: "Callbacks",
        text: "A callback is simply a function passed into another function to be executed later. Callbacks are foundational to JS's asynchronous nature (e.g., event listeners, setTimeout).",
        code: `// HOF
function processUserInput(callback) {
  const name = "Akshay";
  callback(name); // Executing the passed function
}

// Callback Function
function greeting(name) {
  console.log("Hello, " + name);
}

processUserInput(greeting); // "Hello, Akshay"`
      }
    ]
  },
  15: {
    title: "map(), filter(), and reduce()",
    sections: [
      {
        heading: "Declarative Array Iteration",
        text: "These three HOFs are the cornerstone of functional JS. They iterate over arrays without `for` loops and DO NOT mutate the original array. Instead, they return new arrays (or values)."
      },
      {
        heading: "Map & Filter",
        text: "- map(callback): Transforms every item in an array and returns a new array of the same length.\n- filter(callback): Returns a new array containing only items where the callback returned `true`."
      },
      {
        heading: "Reduce",
        text: "- reduce(callback, initialValue): Accumulates all array elements into a single value (number, object, string, etc.).",
        code: `const nums = [1, 2, 3, 4, 5];

const doubled = nums.map(n => n * 2); // [2, 4, 6, 8, 10]
const evens = nums.filter(n => n % 2 === 0); // [2, 4]

// Reduce: accumulator + current value
const sum = nums.reduce((acc, curr) => acc + curr, 0); // 15`
      }
    ]
  },
16: {
    title: "Template Literals",
    sections: [
      {
        heading: "String Interpolation",
        text: "Introduced in ES6, template literals use backticks (`) instead of quotes. They allow embedded expressions inside `${}` and natively support multi-line strings without needing `\\n`.",
        code: `const name = "Devi";
const age = 21;
// Old way
console.log("My name is " + name + " and I am " + age);
// Template Literal
console.log(\`My name is \${name} and I am \${age}\`);`
      }
    ]
  },
  17: {
    title: "Closures and Lexical Environment",
    sections: [
      {
        heading: "What is a Closure?",
        text: "A closure is a function bundled together with its lexical environment. In JS, every time a function is created, a closure is created. It allows an inner function to access variables from an outer function's scope even after the outer function has returned."
      },
      {
        heading: "Use Case: Data Privacy",
        text: "Closures are commonly used to create private variables or stateful functions (like counters) without polluting the global scope.",
        code: `function createCounter() {
  let count = 0; // Private variable
  return function() {
    count++;
    return count;
  };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2`
      }
    ]
  },
  18: {
    title: "The this Keyword",
    sections: [
      {
        heading: "Dynamic Context",
        text: "Unlike other languages, `this` in JS is dynamic. Its value is determined entirely by HOW a function is called, not where it was declared.\n- Global execution: `this` points to the `window` object (or `undefined` in strict mode).\n- Object method: `this` points to the object calling the method.\n- Constructor function: `this` points to the newly created instance."
      },
      {
        heading: "Arrow Functions and this",
        text: "Arrow functions DO NOT have their own `this` binding. They inherit `this` lexically from their enclosing scope. This makes them perfect for callbacks inside class methods, but terrible for defining object methods.",
        code: `const user = {
  name: "Akshay",
  regularFunc: function() { console.log(this.name); },
  arrowFunc: () => { console.log(this.name); }
};
user.regularFunc(); // "Akshay"
user.arrowFunc(); // undefined (inherits global window)`
      }
    ]
  },
  19: {
    title: "call(), apply(), and bind()",
    sections: [
      {
        heading: "Explicit Binding",
        text: "These methods allow you to manually force the `this` context of a function.\n- call(thisArg, arg1, arg2): Executes the function immediately with arguments passed individually.\n- apply(thisArg, [arg1, arg2]): Executes immediately, but arguments are passed as an array.\n- bind(thisArg, arg1, arg2): Returns a NEW function with the bound `this` context, to be executed later.",
        code: `const person = { name: "Pranav" };
function greet(greeting) {
  console.log(\`\${greeting}, \${this.name}\`);
}

greet.call(person, "Hello"); // "Hello, Pranav"
greet.apply(person, ["Hi"]); // "Hi, Pranav"

const boundGreet = greet.bind(person);
boundGreet("Hey"); // "Hey, Pranav"`
      }
    ]
  },
  20: {
    title: "Shallow Copy vs Deep Copy",
    sections: [
      {
        heading: "Shallow Copy",
        text: "Copies the top-level properties of an object. If the object contains nested objects, only their memory references are copied, meaning mutating the nested object in the copy will mutate the original. Achieved via Spread Operator (`...`) or `Object.assign()`."
      },
      {
        heading: "Deep Copy",
        text: "Creates an entirely new clone of the object and all nested objects. Historically achieved via `JSON.parse(JSON.stringify(obj))` (which loses functions and undefined values). Modern JS uses the native `structuredClone(obj)`.",
        code: `const original = { a: 1, nested: { b: 2 } };

// Shallow Copy
const shallow = { ...original };
shallow.nested.b = 99;
console.log(original.nested.b); // 99 (Original mutated!)

// Deep Copy
const deep = structuredClone(original);`
      }
    ]
  },
  21: {
    title: "Object Creation and the new Keyword",
    sections: [
      {
        heading: "Constructor Functions",
        text: "Before ES6 classes, objects were created using constructor functions (conventionally capitalized). When a function is invoked with the `new` keyword, four things happen:\n1. A new empty object `{}` is created.\n2. `this` is bound to the new object.\n3. The new object is linked to the constructor's prototype.\n4. The object is automatically returned.",
        code: `function Car(brand) {
  this.brand = brand;
}
const myCar = new Car("Toyota");
console.log(myCar.brand); // "Toyota"`
      }
    ]
  },
  22: {
    title: "Prototypical Inheritance and Prototype Chain",
    sections: [
      {
        heading: "The Prototype Object",
        text: "Every JS object has a hidden internal property `[[Prototype]]` (accessible via `__proto__`), which points to another object. If you try to access a property on an object and it doesn't exist, JS looks up the prototype chain to find it."
      },
      {
        heading: "Memory Efficiency",
        text: "Instead of attaching methods to every single object instance (which wastes memory), methods are attached to the constructor's `.prototype`. All instances share these methods via the prototype chain.",
        code: `function User(name) { this.name = name; }
// Attached to prototype, shared by all instances
User.prototype.sayHi = function() { console.log(\`Hi \${this.name}\`); };

const u1 = new User("Akshay");
u1.sayHi();`
      }
    ]
  },
  23: {
    title: "ES6+ Features",
    sections: [
      {
        heading: "Destructuring",
        text: "A syntax for unpacking values from arrays or properties from objects into distinct variables."
      },
      {
        heading: "Spread and Rest Operators (...)",
        text: "- Spread: Expands an iterable into individual elements (used for copying or merging arrays/objects).\n- Rest: Collects multiple elements and condenses them into a single array (used in function parameters).",
        code: `// Object Destructuring
const { name, age } = { name: "John", age: 30 };

// Array Destructuring
const [first, second] = [10, 20];

// Rest Parameter
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}`
      }
    ]
  },
  24: {
    title: "DOM Manipulation and Event Delegation",
    sections: [
      {
        heading: "Selecting and Modifying Nodes",
        text: "The DOM represents HTML as a tree of JS objects. Select elements using `document.querySelector()` or `getElementById()`. Modify them using `element.textContent`, `element.style`, or `element.classList`."
      },
      {
        heading: "Event Delegation",
        text: "Instead of attaching an event listener to every single child element (e.g., every <li> in a <ul>), you attach ONE listener to the parent element. You then use `event.target` to determine exactly which child was clicked. This drastically improves performance and handles dynamically added children.",
        code: `document.getElementById("parent-list").addEventListener("click", function(e) {
  if (e.target && e.target.nodeName === "LI") {
    console.log("List item clicked: ", e.target.textContent);
  }
});`
      }
    ]
  },
  25: {
    title: "Event Bubbling and Event Capturing",
    sections: [
      {
        heading: "Event Propagation",
        text: "When an event occurs on an element (like a click), it doesn't just fire on that element. \n1. Capturing Phase: The event travels DOWN from the window/document to the target element.\n2. Target Phase: The event fires on the specific element.\n3. Bubbling Phase: The event bubbles UP from the target element back to the document root."
      },
      {
        heading: "Stopping Propagation",
        text: "By default, event listeners trigger during the Bubbling phase. You can stop the event from bubbling up the DOM tree by calling `event.stopPropagation()` inside the handler."
      }
    ]
  },
  26: {
    title: "Event Loop, Web APIs, Microtasks, and Macrotasks",
    sections: [
      {
        heading: "The Concurrency Model",
        text: "JavaScript is single-threaded. To handle asynchronous operations without blocking the thread, it relies on the Browser's Web APIs (DOM, setTimeout, fetch). When async tasks finish, their callbacks are pushed to task queues."
      },
      {
        heading: "Microtasks vs Macrotasks",
        text: "The Event Loop constantly checks if the Call Stack is empty. If it is, it pushes tasks from the queues into the stack.\n- Microtask Queue: Highest priority. Handles Promises (`.then`/`.catch`) and `MutationObserver`.\n- Macrotask (Task) Queue: Lower priority. Handles `setTimeout`, `setInterval`, DOM events.\nThe loop empties the ENTIRE Microtask queue before processing a single Macrotask.",
        code: `console.log("1. Sync");
setTimeout(() => console.log("4. Macrotask"), 0);
Promise.resolve().then(() => console.log("3. Microtask"));
console.log("2. Sync");
// Output order: 1, 2, 3, 4`
      }
    ]
  },
  27: {
    title: "Promises and Promise Methods",
    sections: [
      {
        heading: "Handling Async Operations",
        text: "A Promise is an object representing the eventual completion (or failure) of an asynchronous operation. It has three states: Pending, Fulfilled, or Rejected."
      },
      {
        heading: "Promise Combinators",
        text: "- Promise.all([]): Resolves when ALL promises resolve. Rejects immediately if ANY fail.\n- Promise.allSettled([]): Waits for all promises to finish, regardless of success/failure.\n- Promise.race([]): Resolves/rejects as soon as the FASTEST promise finishes.",
        code: `const fetchUser = new Promise((resolve) => setTimeout(() => resolve("User"), 1000));
const fetchPosts = new Promise((resolve) => setTimeout(() => resolve("Posts"), 2000));

Promise.all([fetchUser, fetchPosts])
  .then((results) => console.log(results)); // ["User", "Posts"] after 2 seconds`
      }
    ]
  },
  28: {
    title: "Async/Await and Error Handling",
    sections: [
      {
        heading: "Syntactic Sugar for Promises",
        text: "Introduced in ES8, `async/await` allows you to write asynchronous, promise-based code in a way that looks synchronous. The `await` keyword pauses the function execution until the Promise resolves."
      },
      {
        heading: "try/catch Blocks",
        text: "Because `await` doesn't use `.catch()`, you must wrap your async code in a `try...catch` block to handle rejections or network errors.",
        code: `async function getUserData() {
  try {
    const response = await fetch('https://api.example.com/user');
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Failed to fetch:", error);
  }
}`
      }
    ]
  },
  29: {
    title: "Debouncing and Throttling",
    sections: [
      {
        heading: "Performance Optimization",
        text: "Used to limit the rate at which a function is executed, crucial for scroll, resize, or keyup events."
      },
      {
        heading: "Differences",
        text: "- Debouncing: Delays the function execution until a certain amount of time has passed SINCE THE LAST time the event fired. (e.g., wait until the user stops typing for 500ms before making a search API call).\n- Throttling: Ensures the function executes at most once every X milliseconds, regardless of how many times the event fires. (e.g., updating a scroll progress bar).",
        code: `// Basic Debounce implementation
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}`
      }
    ]
  },
  30: {
    title: "Memory Management and Garbage Collection",
    sections: [
      {
        heading: "The Mark-and-Sweep Algorithm",
        text: "JS automatically manages memory. The Garbage Collector periodically runs from the 'root' (the global object). It 'marks' all reachable variables and objects. Any objects in memory that cannot be reached by traversing from the root are 'swept' (deleted) to free up memory."
      },
      {
        heading: "Memory Leaks",
        text: "Memory leaks occur when objects are no longer needed but remain reachable, preventing the Garbage Collector from clearing them. Common causes include:\n1. Uncleared `setInterval` timers.\n2. Event listeners attached to DOM elements that are later removed from the DOM without removing the listener.\n3. Unintended global variables."
      }
    ]
  }


};
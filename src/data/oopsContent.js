// oopsContent.js
export const oopsContent = {
  "1": {
    title: "Classes and Objects",
    sections: [
      {
        heading: "Class Definition",
        text: "In Java, a class is defined with `class` keyword. It can have fields, constructors, and methods. Example: `public class Car { String model; void start() { ... } }`."
      },
      {
        heading: "Creating Objects",
        text: "Objects are instantiated with `new` keyword. `Car myCar = new Car();` The constructor initializes the object."
      },
      {
        heading: "Fields and Methods",
        text: "Fields store state; methods define behavior. Access via dot notation: `myCar.model = 'Tesla'; myCar.start();`."
      }
    ]
  },
  "2": {
    title: "Encapsulation",
    sections: [
      {
        heading: "Access Control",
        text: "Private fields prevent direct access. Public getters/setters expose controlled access. This allows validation and logging."
      },
      {
        heading: "Benefits",
        text: "Reduces complexity, increases reusability, and protects data from unintended modification. Changes to internal implementation don't affect external code."
      },
      {
        heading: "Example",
        text: "Java: `private int balance; public int getBalance() { return balance; } public void setBalance(int b) { if (b >= 0) balance = b; }`"
      }
    ]
  },
  "3": {
    title: "Inheritance",
    sections: [
      {
        heading: "Inheritance Syntax",
        text: "Java: `class Subclass extends Superclass`. C++: `class Subclass : public Superclass`. Python: `class Subclass(Superclass):`."
      },
      {
        heading: "Types of Inheritance",
        text: "Single (one parent), multiple (multiple parents - not in Java/C#), multilevel (grandparent), hierarchical (one parent, many children)."
      },
      {
        heading: "Method Overriding",
        text: "Subclasses can provide specific implementation of superclass methods. Use `@Override` annotation in Java."
      },
      {
        heading: "Constructor Chaining",
        text: "Subclass constructor must call superclass constructor (using `super()` in Java) to initialize inherited fields."
      }
    ]
  },
  "4": {
    title: "Polymorphism",
    sections: [
      {
        heading: "Compile-time Polymorphism (Overloading)",
        text: "Multiple methods with same name but different parameters. Resolved at compile time. Example: `add(int a, int b)` and `add(double a, double b)`."
      },
      {
        heading: "Runtime Polymorphism (Overriding)",
        text: "Subclass provides specific implementation. The actual method called is determined at runtime based on object type, not reference type."
      },
      {
        heading: "Polymorphism via Interfaces",
        text: "Objects of different classes implementing the same interface can be treated uniformly. Example: `List list = new ArrayList();`"
      }
    ]
  },
  "5": {
    title: "Abstraction",
    sections: [
      {
        heading: "Abstract Classes",
        text: "Abstract classes cannot be instantiated; they may contain abstract (unimplemented) methods. Subclasses must implement them. Example: `abstract class Animal { abstract void sound(); }`."
      },
      {
        heading: "Interfaces",
        text: "Interfaces define a contract of methods that implementing classes must provide. They allow multiple inheritance of type. Example: `interface Flyable { void fly(); }`."
      },
      {
        heading: "Differences: Abstract Class vs Interface",
        text: "Abstract classes can have state (fields) and concrete methods; interfaces (before Java 8) only abstract methods. Since Java 8, interfaces have default methods."
      }
    ]
  },
  "6": {
    title: "Constructors and Destructors",
    sections: [
      {
        heading: "Constructors",
        text: "Same name as class, no return type. Can be overloaded. Default constructor provided if none defined. Can have parameters for initialization."
      },
      {
        heading: "Constructor Chaining",
        text: "Calling one constructor from another using `this()` or `super()`. Ensures proper initialization."
      },
      {
        heading: "Destructors (Finalizers)",
        text: "In C++: destructors (~Class) are deterministic. In Java: finalize() is deprecated; use try-with-resources or AutoCloseable. In Python: __del__."
      },
      {
        heading: "Garbage Collection",
        text: "Languages like Java, C#, Python manage memory automatically. Garbage collector reclaims memory of unreferenced objects; finalizers are called before collection."
      }
    ]
  },
  "7": {
    title: "Static Members",
    sections: [
      {
        heading: "Static Variables",
        text: "Also called class variables. They hold values that are common to all instances. Example: `static int count` to track number of objects."
      },
      {
        heading: "Static Methods",
        text: "Can be called without an instance. They can only access static members. Used for utility functions (e.g., Math.sqrt())."
      },
      {
        heading: "Static Blocks",
        text: "Static initialization blocks run when the class is loaded. Used for static variable initialization."
      },
      {
        heading: "Static Nested Classes",
        text: "In Java, static inner classes can be instantiated without an outer instance. Non-static inner classes have a reference to outer."
      }
    ]
  },
  "8": {
    title: "Access Modifiers",
    sections: [
      {
        heading: "public",
        text: "Accessible from anywhere. Used for interfaces and methods intended to be exposed."
      },
      {
        heading: "private",
        text: "Accessible only within the same class. Used to hide internal implementation."
      },
      {
        heading: "protected",
        text: "Accessible within the same package and by subclasses. Used for members meant for inheritance."
      },
      {
        heading: "default (package-private)",
        text: "No modifier; accessible only within the same package. Used when we want limited visibility."
      },
      {
        heading: "Language Variations",
        text: "C++ has public, private, protected (similar). Python uses naming conventions (single underscore for protected, double for private name mangling)."
      }
    ]
  },
  "9": {
    title: "Method Overloading vs Overriding",
    sections: [
      {
        heading: "Overloading",
        text: "Same method name, different parameter lists (number, type, order). Return type can differ. Used for convenience (e.g., println(int), println(String))."
      },
      {
        heading: "Overriding",
        text: "Subclass provides a specific implementation of a method defined in superclass. Same name, parameters, return type (covariant allowed)."
      },
      {
        heading: "Rules for Overriding",
        text: "Access level cannot be more restrictive (can be less). Cannot throw broader checked exceptions. Use @Override annotation to avoid mistakes."
      }
    ]
  },
  "10": {
    title: "Interfaces",
    sections: [
      {
        heading: "Declaration",
        text: "Java: `interface MyInterface { void doSomething(); }`. A class implements it with `implements`."
      },
      {
        heading: "Multiple Inheritance of Type",
        text: "A class can implement multiple interfaces, enabling a form of multiple inheritance without the diamond problem."
      },
      {
        heading: "Default and Static Methods (Java 8+)",
        text: "Default methods provide a default implementation in the interface, allowing evolution. Static methods are also allowed."
      },
      {
        heading: "Functional Interfaces",
        text: "Interfaces with a single abstract method (SAM) are functional interfaces and can be used with lambda expressions (e.g., Runnable)."
      }
    ]
  },
  "11": {
    title: "Abstract Classes",
    sections: [
      {
        heading: "Purpose",
        text: "Provide a common base with shared implementation, while enforcing subclasses to implement certain methods."
      },
      {
        heading: "Abstract Methods",
        text: "Methods without body, marked abstract. Subclasses must override them (unless subclass is also abstract)."
      },
      {
        heading: "Use Cases",
        text: "Template method pattern: define skeleton of algorithm with abstract steps. Also for code reuse among closely related classes."
      }
    ]
  },
  "12": {
    title: "Object Lifecycle",
    sections: [
      {
        heading: "Creation",
        text: "Memory allocated, constructor called (or default initialization). In Java, `new` triggers this. In C++, object can be on stack or heap."
      },
      {
        heading: "Usage",
        text: "During its lifetime, methods are called, fields are modified. The object remains referenced."
      },
      {
        heading: "Garbage Collection (GC)",
        text: "Languages with automatic GC (Java, C#, Python) reclaim memory when objects are no longer reachable. GC is non-deterministic."
      },
      {
        heading: "Destruction",
        text: "In C++, destructors are called deterministically (stack unwinding, delete). In managed languages, finalizers are called before GC (not guaranteed)."
      }
    ]
  },
  "13": {
    title: "Exception Handling",
    sections: [
      {
        heading: "Try-Catch-Finally",
        text: "Try block contains code that may throw exceptions. Catch handles specific exceptions. Finally executes regardless (cleanup)."
      },
      {
        heading: "Checked vs. Unchecked Exceptions",
        text: "In Java, checked exceptions (IOException) must be handled or declared. Unchecked (RuntimeException) are optional."
      },
      {
        heading: "Throwing and Custom Exceptions",
        text: "Use `throw` to signal an exception. Custom exceptions extend Exception or RuntimeException, with constructors."
      },
      {
        heading: "Best Practices",
        text: "Don't catch generic Exception unless necessary; catch specific exceptions. Use logging. Don't ignore exceptions."
      }
    ]
  },
  "14": {
    title: "Generics",
    sections: [
      {
        heading: "Generic Classes and Interfaces",
        text: "Example: `class Box<T> { private T content; }`. T is a type parameter. Use with actual types: `Box<String> box = new Box<>();`"
      },
      {
        heading: "Generic Methods",
        text: "Methods can introduce their own type parameters. Example: `public static <T> T getMiddle(T... a) { ... }`"
      },
      {
        heading: "Bounded Type Parameters",
        text: "Restrict type parameters: `<T extends Number>` or `<T super Integer>` (super only for wildcards)."
      },
      {
        heading: "Wildcards",
        text: "`?` unknown type. Upper bounded (`? extends T`), lower bounded (`? super T`), unbounded (`?`). Used for flexibility."
      }
    ]
  },
  "15": {
    title: "OOP Design Principles",
    sections: [
      {
        heading: "SOLID Principles",
        text: "Single Responsibility (one class, one reason to change). Open/Closed (open for extension, closed for modification). Liskov Substitution (subtypes substitutable). Interface Segregation (many specific interfaces). Dependency Inversion (depend on abstractions, not concretions)."
      },
      {
        heading: "DRY (Don't Repeat Yourself)",
        text: "Avoid duplication of code and logic. Extract common functionality into reusable components."
      },
      {
        heading: "Composition over Inheritance",
        text: "Favor using composition (has-a) over inheritance (is-a) to achieve flexibility and reduce tight coupling."
      },
      {
        heading: "Encapsulate What Varies",
        text: "Identify aspects that change and separate them from the rest, so they can be altered without affecting other code."
      }
    ]
  },
  "16": {
    title: "Design Patterns",
    sections: [
      {
        heading: "Creational Patterns",
        text: "Singleton (ensure one instance), Factory (create objects without specifying concrete class), Abstract Factory, Builder, Prototype."
      },
      {
        heading: "Structural Patterns",
        text: "Adapter (wrap incompatible interfaces), Decorator (add behavior dynamically), Proxy (controlled access), Composite (tree structures)."
      },
      {
        heading: "Behavioral Patterns",
        text: "Observer (publish-subscribe), Strategy (family of algorithms), Command (encapsulate requests), State (state-dependent behavior)."
      },
      {
        heading: "Pattern Use",
        text: "Choose patterns based on problem context. Overuse can lead to unnecessary complexity. Know when to apply."
      }
    ]
  },
  "17": {
    title: "Object Cloning",
    sections: [
      {
        heading: "Shallow Copy",
        text: "Copies primitive fields and references to objects. Changes to referenced objects affect both original and copy. In Java, `Object.clone()` does shallow copy."
      },
      {
        heading: "Deep Copy",
        text: "Recursively copies all referenced objects, creating independent copies. Often done via serialization or custom copy constructors."
      },
      {
        heading: "Cloning in Java",
        text: "Implement `Cloneable` marker interface and override `clone()` to make it public. Use `super.clone()` then deep copy fields."
      },
      {
        heading: "Copy Constructors and Factories",
        text: "Alternative to `clone()`: copy constructor (e.g., `new Student(student)`) or static factory method, which are more flexible."
      }
    ]
  }
};
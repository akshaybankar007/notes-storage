// oopsContent.js
export const oopsContent = {
  "1": {
    title: "Classes and Objects",
    sections: [
      {
        heading: "Definition",
        text: "A class is a blueprint for creating objects. Defines properties (attributes) and behaviors (methods). An object is an instance of a class."
      },
      {
        heading: "Class Definition",
        text: "Java: `class` keyword. Example: `public class Car { String model; void start() { ... } }`."
      },
      {
        heading: "Creating Objects",
        text: "Objects instantiated with `new`. `Car myCar = new Car();` Constructor initializes object."
      },
      {
        heading: "Fields and Methods",
        text: "Fields store state; methods define behavior. Access via dot notation: `myCar.model = 'Tesla'; myCar.start();`"
      },
      {
        heading: "this Keyword",
        text: "Refers to current object."
      }
    ]
  },
  "2": {
    title: "Encapsulation",
    sections: [
      {
        heading: "Definition",
        text: "Bundles data and methods, hiding internal details and protecting data integrity."
      },
      {
        heading: "Access Control",
        text: "Private fields prevent direct access. Public getters/setters expose controlled access. Allows validation and logging."
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
        heading: "Definition",
        text: "Subclass acquires properties and behavior of superclass. Promotes code reuse."
      },
      {
        heading: "Syntax",
        text: "Java: `class Subclass extends Superclass`. C++: `class Subclass : public Superclass`. Python: `class Subclass(Superclass):`"
      },
      {
        heading: "Types",
        text: "Single (one parent), Multiple (multiple parents - not in Java/C#), Multilevel, Hierarchical."
      },
      {
        heading: "Method Overriding",
        text: "Subclass provides specific implementation. Use `@Override` annotation in Java."
      },
      {
        heading: "Constructor Chaining",
        text: "Subclass constructor calls superclass constructor using `super()`."
      },
      {
        heading: "IS-A Relationship",
        text: "Inheritance creates IS-A relationship. Favor composition over inheritance when possible."
      }
    ]
  },
  "4": {
    title: "Polymorphism",
    sections: [
      {
        heading: "Compile-time Polymorphism (Overloading)",
        text: "Multiple methods with same name, different parameters. Resolved at compile time. Example: `add(int a, int b)` and `add(double a, double b)`."
      },
      {
        heading: "Runtime Polymorphism (Overriding)",
        text: "Subclass provides specific implementation. Method called determined at runtime based on object type, not reference type."
      },
      {
        heading: "Polymorphism via Interfaces",
        text: "Objects of different classes implementing the same interface treated uniformly. Example: `List list = new ArrayList();`"
      },
      {
        heading: "Dynamic Binding",
        text: "Used for overridden methods."
      }
    ]
  },
  "5": {
    title: "Abstraction",
    sections: [
      {
        heading: "Abstract Classes",
        text: "Cannot be instantiated. May contain abstract (unimplemented) methods. Subclasses must implement them. Example: `abstract class Animal { abstract void sound(); }`."
      },
      {
        heading: "Interfaces",
        text: "Define contract of methods implementing classes must provide. Allow multiple inheritance of type. Example: `interface Flyable { void fly(); }`."
      },
      {
        heading: "Abstract Class vs Interface",
        text: "Abstract classes can have state and concrete methods. Interfaces (before Java 8) only abstract methods. Since Java 8, interfaces have default methods."
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
        text: "C++: destructors (~Class) deterministic. Java: finalize() deprecated; use try-with-resources or AutoCloseable. Python: __del__."
      },
      {
        heading: "Garbage Collection",
        text: "Java, C#, Python manage memory automatically. Garbage collector reclaims memory of unreferenced objects."
      }
    ]
  },
  "7": {
    title: "Static Members",
    sections: [
      {
        heading: "Static Variables",
        text: "Class variables shared across all instances. Example: `static int count` to track number of objects."
      },
      {
        heading: "Static Methods",
        text: "Can be called without instance. Only access static members. Used for utility functions (e.g., Math.sqrt())."
      },
      {
        heading: "Static Blocks",
        text: "Run when class is loaded. Used for static variable initialization."
      },
      {
        heading: "Static Nested Classes",
        text: "Can be instantiated without outer instance. Non-static inner classes have reference to outer."
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
        text: "Accessible only within same class. Hides internal implementation."
      },
      {
        heading: "protected",
        text: "Accessible within same package and by subclasses. Used for members meant for inheritance."
      },
      {
        heading: "default (package-private)",
        text: "No modifier. Accessible only within same package."
      },
      {
        heading: "Language Variations",
        text: "C++ has public, private, protected. Python uses naming conventions: _ for protected, __ for private name mangling."
      }
    ]
  },
  "9": {
    title: "Method Overloading vs Overriding",
    sections: [
      {
        heading: "Overloading",
        text: "Same method name, different parameter lists (number, type, order). Return type can differ. Compile-time binding."
      },
      {
        heading: "Overriding",
        text: "Subclass provides specific implementation. Same name, parameters, return type (covariant allowed). Runtime binding."
      },
      {
        heading: "Rules for Overriding",
        text: "Access level cannot be more restrictive. Cannot throw broader checked exceptions. Use @Override annotation."
      },
      {
        heading: "Static Methods",
        text: "Cannot be overridden (they are hidden)."
      }
    ]
  },
  "10": {
    title: "Interfaces",
    sections: [
      {
        heading: "Declaration",
        text: "Java: `interface MyInterface { void doSomething(); }`. Class implements with `implements`."
      },
      {
        heading: "Multiple Inheritance of Type",
        text: "Class can implement multiple interfaces. Avoids diamond problem."
      },
      {
        heading: "Default and Static Methods (Java 8+)",
        text: "Default methods provide default implementation. Static methods also allowed."
      },
      {
        heading: "Functional Interfaces",
        text: "Single abstract method (SAM). Can be used with lambda expressions (e.g., Runnable)."
      },
      {
        heading: "Marker Interfaces",
        text: "No methods (e.g., Serializable)."
      }
    ]
  },
  "11": {
    title: "Abstract Classes",
    sections: [
      {
        heading: "Definition",
        text: "Cannot be instantiated. Meant to be subclassed. Can contain abstract methods (no body) and concrete methods."
      },
      {
        heading: "Purpose",
        text: "Provide common base with shared implementation. Enforce subclasses to implement certain methods."
      },
      {
        heading: "Abstract Methods",
        text: "Methods without body, marked abstract. Subclasses must override (unless subclass also abstract)."
      },
      {
        heading: "Template Method Pattern",
        text: "Define skeleton of algorithm with abstract steps."
      }
    ]
  },
  "12": {
    title: "Object Lifecycle",
    sections: [
      {
        heading: "Creation",
        text: "Memory allocated, constructor called (or default initialization). Java: `new`. C++: stack or heap."
      },
      {
        heading: "Usage",
        text: "Methods called, fields modified. Object remains referenced."
      },
      {
        heading: "Garbage Collection",
        text: "Java, C#, Python: reclaims memory when objects no longer reachable. Non-deterministic."
      },
      {
        heading: "Destruction",
        text: "C++: destructors called deterministically. Managed languages: finalizers called before GC (not guaranteed)."
      },
      {
        heading: "try-with-resources",
        text: "Java for explicit cleanup."
      }
    ]
  },
  "13": {
    title: "Exception Handling",
    sections: [
      {
        heading: "Try-Catch-Finally",
        text: "Try: code that may throw exceptions. Catch: handles specific exceptions. Finally: executes regardless (cleanup)."
      },
      {
        heading: "Checked vs. Unchecked Exceptions",
        text: "Java: checked (IOException) must be handled or declared. Unchecked (RuntimeException) are optional."
      },
      {
        heading: "Throwing and Custom Exceptions",
        text: "Use `throw` to signal exception. Custom exceptions extend Exception or RuntimeException."
      },
      {
        heading: "Best Practices",
        text: "Don't catch generic Exception. Catch specific. Use logging. Don't ignore exceptions."
      },
      {
        heading: "try-with-resources (Java 7+)",
        text: "Auto-closes resources."
      }
    ]
  },
  "14": {
    title: "Generics",
    sections: [
      {
        heading: "Generic Classes and Interfaces",
        text: "Example: `class Box<T> { private T content; }`. Use: `Box<String> box = new Box<>();`"
      },
      {
        heading: "Generic Methods",
        text: "Methods introduce type parameters. Example: `public static <T> T getMiddle(T... a) { ... }`"
      },
      {
        heading: "Bounded Type Parameters",
        text: "Restrict: `<T extends Number>` or `<T super Integer>` (super only for wildcards)."
      },
      {
        heading: "Wildcards",
        text: "`?` unknown type. Upper bounded (`? extends T`), lower bounded (`? super T`), unbounded (`?`)."
      },
      {
        heading: "Type Erasure",
        text: "Java generics are compile-time only. C++ templates generate separate code per type."
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
        text: "Favor composition (has-a) over inheritance (is-a) for flexibility and reduced coupling."
      },
      {
        heading: "Encapsulate What Varies",
        text: "Identify aspects that change and separate them from the rest."
      },
      {
        heading: "Dependency Injection",
        text: "Common implementation of Dependency Inversion."
      }
    ]
  },
  "16": {
    title: "Design Patterns",
    sections: [
      {
        heading: "Creational Patterns",
        text: "Singleton (ensure one instance), Factory (create objects without concrete class), Abstract Factory, Builder, Prototype."
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
        text: "Choose based on problem context. Overuse leads to unnecessary complexity."
      }
    ]
  },
  "17": {
    title: "Object Cloning",
    sections: [
      {
        heading: "Shallow Copy",
        text: "Copies primitive fields and object references. Changes to referenced objects affect both. Java `Object.clone()` does shallow copy."
      },
      {
        heading: "Deep Copy",
        text: "Recursively copies all referenced objects. Via serialization or custom copy constructors."
      },
      {
        heading: "Cloning in Java",
        text: "Implement `Cloneable` and override `clone()` to make public. Use `super.clone()` then deep copy fields."
      },
      {
        heading: "Copy Constructors",
        text: "Alternative to `clone()`: `new Student(student)` or static factory method. More flexible."
      },
      {
        heading: "Python copy",
        text: "`copy.copy()` (shallow), `copy.deepcopy()` (deep)."
      }
    ]
  }
};
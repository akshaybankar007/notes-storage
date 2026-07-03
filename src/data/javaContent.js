export const javaContent = {
  1: {
    title: "Java Basics",
    sections: [
      { 
        heading: "1. Variables & Data Types", 
        text: "Java is a strongly typed language. Every variable must be declared with a data type. Primitives include int, double, boolean, char, byte, short, long, and float." 
      },
      { 
        heading: "2. Type Casting", 
        text: "Converting one primitive type to another. Widening (automatic) e.g., int to double. Narrowing (manual) requires explicit casting e.g., (int) myDouble." 
      },
      { 
        heading: "Example Code", 
        code: `public class Main {
    public static void main(String[] args) {
        int myInt = 9;
        double myDouble = myInt; // Automatic casting: int to double
        System.out.println(myInt);      // Outputs 9
        System.out.println(myDouble);   // Outputs 9.0
    }
}` 
      }
    ]
  }
  // We will populate IDs 2 through 20 as you study them
};
export const testingContent = {
  "1": {
    title: "What is Software Testing and why is it important?",
    sections: [
      {
        heading: "Definition",
        text: "Software testing is the process of verifying that software behaves as expected, identifying defects, and ensuring quality[reference:107][reference:108]."
      },
      {
        heading: "Why It Matters",
        text: "Testing reduces costs by catching bugs early, increases confidence in refactoring, documents expected behavior, and prevents regression[reference:109]."
      }
    ]
  },
  "2": {
    title: "Unit Testing vs Integration Testing vs End-to-End Testing",
    sections: [
      {
        heading: "Unit Testing",
        text: "Tests individual components (functions, classes) in isolation. Fast and easy to write[reference:110]."
      },
      {
        heading: "Integration Testing",
        text: "Tests interactions between modules, databases, or APIs. Verifies that units work together correctly[reference:111]."
      },
      {
        heading: "End-to-End Testing",
        text: "Tests the entire application flow from the user's perspective (e.g., with Cypress). Slowest but ensures the whole system works[reference:112]."
      }
    ]
  },
  "3": {
    title: "What is the difference between Verification and Validation?",
    sections: [
      {
        heading: "Verification",
        text: "Are we building the product right? Checks if the software meets specifications and requirements. Static process — reviews, inspections, walkthroughs[reference:113]."
      },
      {
        heading: "Validation",
        text: "Are we building the right product? Checks if the software meets the user's actual needs. Dynamic process — testing the actual software[reference:114]."
      }
    ]
  },
  "4": {
    title: "What are the different types of testing?",
    sections: [
      {
        heading: "Functional Testing",
        text: "Tests what the system does — unit, integration, system, acceptance testing[reference:115][reference:116]."
      },
      {
        heading: "Non-Functional Testing",
        text: "Tests how the system performs — performance, load, stress, security, usability testing[reference:117][reference:118]."
      },
      {
        heading: "Manual vs Automated",
        text: "Manual testing is executed by humans. Automated testing uses scripts and tools — faster, repeatable, and more reliable[reference:119]."
      }
    ]
  },
  "5": {
    title: "What is a Test Case? What goes into a good test case?",
    sections: [
      {
        heading: "Definition",
        text: "A test case is a set of conditions or variables under which a tester determines if a system works correctly[reference:120]."
      },
      {
        heading: "Components",
        text: "Test case ID, description, preconditions, test steps, expected result, actual result, and status (pass/fail)[reference:121]."
      },
      {
        heading: "Characteristics of a Good Test Case",
        text: "Clear, concise, repeatable, traceable to requirements, and independent[reference:122]."
      }
    ]
  },
  "6": {
    title: "What is Jest and how do you write tests with it?",
    sections: [
      {
        heading: "Jest Basics",
        text: "Jest is a JavaScript testing framework. Install with `npm install --save-dev jest`. Configure test scripts in `package.json`[reference:123]."
      },
      {
        heading: "Matchers",
        text: "`expect(value).toBe(expected)` — strict equality. `toEqual()` — deep equality. `toBeTruthy()`, `toThrow()`, and more[reference:124]."
      },
      {
        heading: "Test Structure",
        text: "`describe()` groups related tests. `test()` or `it()` defines individual test cases. Assertions use `expect()`[reference:125]."
      }
    ]
  },
  "7": {
    title: "What is mocking in testing and why is it useful?",
    sections: [
      {
        heading: "Mock Functions",
        text: "`jest.fn()` creates a mock function that tracks calls and return values. `mockImplementation()` overrides behavior[reference:126]."
      },
      {
        heading: "Why Mock?",
        text: "Isolate the unit being tested by replacing dependencies (APIs, databases, complex modules) with controlled mocks. Tests become faster, more reliable, and independent[reference:127]."
      },
      {
        heading: "spyOn",
        text: "`jest.spyOn(object, 'method')` wraps an existing method to track calls without replacing its implementation[reference:128]."
      }
    ]
  },
  "8": {
    title: "How do you test asynchronous code?",
    sections: [
      {
        heading: "Promises",
        text: "Return a promise from the test — Jest waits for it to resolve or reject[reference:129]."
      },
      {
        heading: "Async/Await",
        text: "Use `async` in the test function and `await` on promises. Jest handles it automatically[reference:130]."
      },
      {
        heading: "done() Callback",
        text: "An older alternative for callback-style async code. Call `done()` when the async operation completes[reference:131]."
      }
    ]
  },
  "9": {
    title: "What is React Testing Library and how is it different from Enzyme?",
    sections: [
      {
        heading: "React Testing Library (RTL)",
        text: "RTL focuses on testing components as users interact with them. Queries like `getByText()`, `getByRole()`, `getByLabelText()` reflect accessibility[reference:132]."
      },
      {
        heading: "RTL vs Enzyme",
        text: "RTL tests behavior, not implementation details. Enzyme allows testing internal component state and methods. RTL is now the recommended approach by the React team[reference:133]."
      }
    ]
  },
  "10": {
    title: "What are best practices for writing tests?",
    sections: [
      {
        heading: "AAA Pattern",
        text: "Arrange — set up test data and conditions. Act — perform the action being tested. Assert — verify the outcome. Keeps tests structured and readable[reference:134]."
      },
      {
        heading: "Test Coverage",
        text: "Aim for high coverage but prioritize critical paths. Use `--coverage` flag to see which code is untested[reference:135]."
      },
      {
        heading: "Don't Test Implementation",
        text: "Test behavior, not private methods or internal state. This makes tests more resilient to refactoring[reference:136]."
      }
    ]
  }
};
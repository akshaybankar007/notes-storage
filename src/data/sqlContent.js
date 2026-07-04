export const sqlContent = {
  1: {
    title: "DBMS vs RDBMS",
    sections: [
      {
        heading: "Relational Structure",
        text: "An RDBMS (Relational Database Management System) organizes data into structured tables (Rows and Columns) linked via relationships. Examples include MySQL and PostgreSQL. They strictly enforce data integrity and schemas, unlike basic DBMS."
      }
    ]
  },
  2: {
    title: "DDL vs DML vs DCL vs TCL",
    sections: [
      {
        heading: "SQL Command Categories",
        text: "- DDL (Data Definition Language): Defines schema structure (CREATE, ALTER, DROP, TRUNCATE).\n- DML (Data Manipulation Language): Modifies data (SELECT, INSERT, UPDATE, DELETE).\n- DCL (Data Control Language): Manages permissions (GRANT, REVOKE).\n- TCL (Transaction Control Language): Manages transactions (COMMIT, ROLLBACK)."
      }
    ]
  },
  3: {
    title: "DDL Commands",
    sections: [
      {
        heading: "Modifying Architecture",
        text: "`CREATE TABLE` builds a new table. `ALTER TABLE` changes an existing structure. `DROP TABLE` destroys the table and data entirely. `TRUNCATE TABLE` deletes all rows rapidly but keeps the empty table structure intact."
      }
    ]
  },
  4: {
    title: "DML Commands",
    sections: [
      {
        heading: "Modifying Data",
        text: "`INSERT INTO` adds new rows. `UPDATE` modifies existing records (always use WHERE to prevent updating all rows). `DELETE FROM` removes specific rows.",
        code: `INSERT INTO Employees (name, salary) VALUES ('Akshay', 85000);\nUPDATE Employees SET salary = 90000 WHERE name = 'Akshay';`
      }
    ]
  },
  5: {
    title: "DELETE vs TRUNCATE vs DROP",
    sections: [
      {
        heading: "Key Differences",
        text: "- DELETE: Removes rows one-by-one. Logs each deletion (slower). Can use WHERE. Can be rolled back.\n- TRUNCATE: Deallocates data pages entirely (extremely fast). Cannot use WHERE. Cannot be easily rolled back.\n- DROP: Destroys both the data and the table structure."
      }
    ]
  },
  6: {
    title: "SELECT Statement with WHERE, AND, OR, NOT",
    sections: [
      {
        heading: "Querying Data",
        text: "The `SELECT` statement retrieves data from the database. The `WHERE` clause filters the result set based on specific conditions.",
        code: `SELECT name FROM Employees WHERE department = 'IT' AND NOT status = 'Inactive';`
      }
    ]
  },
  7: {
    title: "ORDER BY and LIMIT/OFFSET",
    sections: [
      {
        heading: "Sorting and Pagination",
        text: "`ORDER BY` sorts the result set in Ascending (ASC) or Descending (DESC) order. `LIMIT` restricts the number of rows returned. `OFFSET` skips a specific number of rows, which is crucial for implementing API pagination.",
        code: `SELECT * FROM Products ORDER BY price DESC LIMIT 10 OFFSET 20;`
      }
    ]
  },
  8: {
    title: "DISTINCT",
    sections: [
      {
        heading: "Removing Duplicates",
        text: "The `DISTINCT` keyword ensures that only unique, non-repeating values are returned for the specified columns in a query.",
        code: `SELECT DISTINCT department FROM Employees;`
      }
    ]
  },
  9: {
    title: "Aggregate Functions",
    sections: [
      {
        heading: "Mathematical Operations",
        text: "Functions that perform calculations on a set of values to return a single scalar value: `COUNT()`, `SUM()`, `AVG()`, `MIN()`, and `MAX()`. Null values are generally ignored by these functions."
      }
    ]
  },
  10: {
    title: "GROUP BY and HAVING",
    sections: [
      {
        heading: "Categorizing Data",
        text: "`GROUP BY` groups rows with the same values into summary rows. `HAVING` filters data AFTER it has been grouped (necessary because the WHERE clause cannot be used with aggregate functions).",
        code: `SELECT department, AVG(salary) FROM Employees GROUP BY department HAVING COUNT(id) > 5;`
      }
    ]
  },
  11: {
    title: "SQL Constraints",
    sections: [
      {
        heading: "Enforcing Integrity",
        text: "- UNIQUE: Ensures all values in a column are different.\n- NOT NULL: Ensures a column cannot have a NULL value.\n- CHECK: Ensures all values in a column satisfy a specific condition.\n- DEFAULT: Sets a default value for a column if no value is specified."
      }
    ]
  },
  12: {
    title: "PRIMARY KEY vs FOREIGN KEY",
    sections: [
      {
        heading: "Relational Bindings",
        text: "`PRIMARY KEY` uniquely identifies a record in a table (a combination of UNIQUE and NOT NULL). `FOREIGN KEY` is a column in one table that references the PRIMARY KEY in another table, enforcing referential integrity."
      }
    ]
  },
  13: {
    title: "INNER JOIN",
    sections: [
      {
        heading: "Intersection of Tables",
        text: "Returns only the rows where there is a match in BOTH tables based on the specified join condition.",
        code: `SELECT Orders.id, Customers.name \nFROM Orders \nINNER JOIN Customers ON Orders.customer_id = Customers.id;`
      }
    ]
  },
  14: {
    title: "LEFT, RIGHT, and FULL JOIN",
    sections: [
      {
        heading: "Handling Unmatched Data",
        text: "- LEFT JOIN: Returns ALL rows from the left table, and matching rows from the right table (NULL if no match).\n- RIGHT JOIN: Returns ALL rows from the right table, and matching rows from the left table.\n- FULL JOIN: Returns ALL rows when there is a match in EITHER the left or right table."
      }
    ]
  },
  15: {
    title: "SELF JOIN",
    sections: [
      {
        heading: "Table Joining Itself",
        text: "Useful for querying hierarchical data within a single table, such as an Employee table where a `manager_id` references another employee in the same table. Requires the use of table aliases.",
        code: `SELECT E1.name as Employee, E2.name as Manager \nFROM Employees E1 \nLEFT JOIN Employees E2 ON E1.manager_id = E2.id;`
      }
    ]
  },
  16: {
    title: "Subqueries",
    sections: [
      {
        heading: "Nested Queries",
        text: "A query nested inside another query (can be in the SELECT, FROM, or WHERE clause). Commonly used to calculate a dynamic value on the fly for filtering purposes.",
        code: `SELECT name FROM Employees WHERE salary > (SELECT AVG(salary) FROM Employees);`
      }
    ]
  },
  17: {
    title: "EXISTS vs IN",
    sections: [
      {
        heading: "Performance Differences",
        text: "`IN` evaluates the subquery first, returns a list, and compares against it. `EXISTS` evaluates to true/false as soon as it finds a single match. `EXISTS` is generally much faster and more efficient for large datasets."
      }
    ]
  },
  18: {
    title: "UNION vs UNION ALL",
    sections: [
      {
        heading: "Combining Result Sets",
        text: "Both combine the result sets of two or more SELECT statements. `UNION` automatically removes duplicate rows. `UNION ALL` keeps duplicates and is significantly faster as a result."
      }
    ]
  },
  19: {
    title: "LIKE, IN, BETWEEN Operators",
    sections: [
      {
        heading: "Advanced Filtering",
        text: "- LIKE: Used for pattern matching (`%` represents zero or more characters, `_` represents exactly one character).\n- IN: A shorthand for multiple OR conditions.\n- BETWEEN: Selects values within a specific range (inclusive)."
      }
    ]
  },
  20: {
    title: "Indexing and Transactions",
    sections: [
      {
        heading: "ACID Properties",
        text: "Transactions guarantee ACID properties: Atomicity, Consistency, Isolation, and Durability. You manage them manually using `BEGIN` (start), `COMMIT` (save changes), and `ROLLBACK` (undo changes)."
      }
    ]
  },
  21: {
    title: "CASE WHEN",
    sections: [
      {
        heading: "Inline Conditional Logic",
        text: "The SQL equivalent of standard if/else programming statements. It goes through conditions and returns a value when the first condition is met.",
        code: `SELECT name, \n  CASE \n    WHEN salary > 100000 THEN 'High' \n    ELSE 'Low' \n  END as Bracket \nFROM Employees;`
      }
    ]
  },
  22: {
    title: "Finding Nth Highest Salary",
    sections: [
      {
        heading: "The Interview Question",
        text: "A common analytical query. Using the window function `DENSE_RANK()` is the most robust method because it handles duplicate salary values perfectly without skipping ranks.",
        code: `WITH Ranked AS (\n  SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) as rank \n  FROM Employees\n) \nSELECT DISTINCT salary FROM Ranked WHERE rank = 2;`
      }
    ]
  }
};
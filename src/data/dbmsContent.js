export const dbmsContent = {
  "1": {
    title: "What is the difference between DBMS and RDBMS?",
    sections: [
      {
        heading: "DBMS vs RDBMS",
        text: "DBMS is a software system that manages databases. RDBMS (Relational Database Management System) is a type of DBMS that stores data in tables with relationships between them. RDBMS enforces referential integrity and supports SQL for querying."
      }
    ]
  },
  "2": {
    title: "What is a primary key? What is a foreign key?",
    sections: [
      {
        heading: "Primary Key",
        text: "A primary key uniquely identifies each row in a table. It must be unique and cannot be null."
      },
      {
        heading: "Foreign Key",
        text: "A foreign key is a field in one table that references the primary key of another table. It establishes referential integrity between the two tables."
      }
    ]
  },
  "3": {
    title: "What is normalization?",
    sections: [
      {
        heading: "Normalization",
        text: "Normalization is the process of organizing data in a database to reduce redundancy and eliminate anomalies. It involves dividing tables and defining relationships to ensure data integrity and efficient storage."
      }
    ]
  },
  "4": {
    title: "Explain 1NF, 2NF, and 3NF.",
    sections: [
      {
        heading: "1NF",
        text: "1NF requires that each column contains atomic values and there are no repeating groups."
      },
      {
        heading: "2NF",
        text: "2NF requires that the table is in 1NF and that all non-key attributes are fully functionally dependent on the entire primary key."
      },
      {
        heading: "3NF",
        text: "3NF requires that the table is in 2NF and that there are no transitive dependencies, meaning non-key attributes depend only on the primary key."
      }
    ]
  },
  "5": {
    title: "What are anomalies in DBMS?",
    sections: [
      {
        heading: "Types of Anomalies",
        text: "Anomalies are problems that arise due to poor database design. Insertion anomaly occurs when data cannot be inserted without additional unrelated data. Deletion anomaly occurs when deleting data unintentionally removes other important data. Update anomaly occurs when the same data must be updated in multiple places."
      }
    ]
  },
  "6": {
    title: "What is functional dependency?",
    sections: [
      {
        heading: "Functional Dependency",
        text: "A functional dependency exists when one attribute uniquely determines another attribute. If A determines B, it means for each value of A, there is exactly one corresponding value of B."
      }
    ]
  },
  "7": {
    title: "What are joins? Explain types of joins.",
    sections: [
      {
        heading: "Joins",
        text: "Joins are used to retrieve data from multiple tables based on a related column. Common types include INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN."
      }
    ]
  },
  "8": {
    title: "Difference between INNER JOIN and LEFT JOIN.",
    sections: [
      {
        heading: "INNER JOIN",
        text: "INNER JOIN returns only the rows that have matching values in both tables."
      },
      {
        heading: "LEFT JOIN",
        text: "LEFT JOIN returns all rows from the left table and the matching rows from the right table. If there is no match, NULL values are returned for the right table."
      }
    ]
  },
  "9": {
    title: "What is indexing? How does it improve performance?",
    sections: [
      {
        heading: "Indexing",
        text: "Indexing is a data structure technique used to improve the speed of data retrieval operations. An index creates a separate structure, typically a B-tree, that allows the database to locate rows quickly without scanning the entire table."
      }
    ]
  },
  "10": {
    title: "What is the difference between clustered and non-clustered index?",
    sections: [
      {
        heading: "Clustered Index",
        text: "A clustered index determines the physical order of data in a table. A table can have only one clustered index."
      },
      {
        heading: "Non-Clustered Index",
        text: "A non-clustered index creates a separate structure that stores a reference to the actual data. A table can have multiple non-clustered indexes."
      }
    ]
  },
  "11": {
    title: "What is a transaction?",
    sections: [
      {
        heading: "Transaction",
        text: "A transaction is a sequence of one or more database operations treated as a single logical unit of work. It must either complete entirely or have no effect at all, ensuring data consistency."
      }
    ]
  },
  "12": {
    title: "Explain ACID properties.",
    sections: [
      {
        heading: "ACID",
        text: "ACID ensures reliable transaction processing. Atomicity means all operations in a transaction succeed or none do. Consistency means a transaction moves the database from one valid state to another. Isolation ensures concurrent transactions do not interfere in a way that violates consistency. Durability guarantees that once a transaction is committed, its changes persist even in case of failure."
      }
    ]
  },
  "13": {
    title: "What are isolation levels?",
    sections: [
      {
        heading: "Isolation Levels",
        text: "Isolation levels define the degree to which transactions are isolated from each other. They control how and when changes made by one transaction become visible to others. Common levels are: Read Uncommitted, Read Committed, Repeatable Read, and Serializable."
      }
    ]
  },
  "14": {
    title: "What is dirty read, non-repeatable read, and phantom read?",
    sections: [
      {
        heading: "Dirty Read",
        text: "A dirty read occurs when a transaction reads uncommitted data from another transaction."
      },
      {
        heading: "Non-Repeatable Read",
        text: "A non-repeatable read occurs when a row read twice within the same transaction returns different values due to another committed transaction."
      },
      {
        heading: "Phantom Read",
        text: "A phantom read occurs when new rows are inserted or deleted by another transaction, affecting the result set of a query executed again within the same transaction."
      }
    ]
  },
  "15": {
    title: "What is the difference between DELETE, TRUNCATE, and DROP?",
    sections: [
      {
        heading: "DELETE",
        text: "DELETE removes specific rows based on a condition and can be rolled back if used within a transaction."
      },
      {
        heading: "TRUNCATE",
        text: "TRUNCATE removes all rows from a table, is faster than DELETE, and typically cannot be rolled back in many systems."
      },
      {
        heading: "DROP",
        text: "DROP removes the entire table structure along with its data."
      }
    ]
  },
  "16": {
    title: "What is a view?",
    sections: [
      {
        heading: "View",
        text: "A view is a virtual table based on the result of a SELECT query. It does not store data physically but provides a way to simplify complex queries and restrict access to specific columns or rows."
      }
    ]
  }
};
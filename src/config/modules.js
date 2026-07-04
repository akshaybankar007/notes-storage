import { javaSyllabus } from '../data/javaSyllabus';
import { javaContent } from '../data/javaContent';
import { htmlSyllabus } from '../data/htmlSyllabus';
import { htmlContent } from '../data/htmlContent';
import { cssSyllabus } from '../data/cssSyllabus';
import { cssContent } from '../data/cssContent';
import { jsSyllabus } from '../data/jsSyllabus';
import { jsContent } from '../data/jsContent';
import { reactSyllabus } from '../data/reactSyllabus';
import { reactContent } from '../data/reactContent';
import { nodeSyllabus } from '../data/nodeSyllabus';
import { nodeContent } from '../data/nodeContent';
import { expressSyllabus } from '../data/expressSyllabus';
import { expressContent } from '../data/expressContent';
import { mongoSyllabus } from '../data/mongoSyllabus';
import { mongoContent } from '../data/mongoContent';
import { sqlSyllabus } from '../data/sqlSyllabus';
import { sqlContent } from '../data/sqlContent';

// Auth & Security (already existed)
import { authSyllabus } from '../data/authSyllabus';
import { authContent } from '../data/authContent';

// System Design (already existed)
import { systemSyllabus } from '../data/systemSyllabus';
import { systemContent } from '../data/systemContent';

// Newly generated modules:
import { gitSyllabus } from '../data/gitSyllabus';
import { gitContent } from '../data/gitContent';
import { testingSyllabus } from '../data/testingSyllabus';
import { testingContent } from '../data/testingContent';

// Operating Systems (generated earlier)
import { osSyllabus } from '../data/osSyllabus';
import { osContent } from '../data/osContent';

// Computer Networks (generated earlier)
import { cnSyllabus } from '../data/cnSyllabus';
import { cnContent } from '../data/cnContent';

// Linux (generated earlier)
import { linuxSyllabus } from '../data/linuxSyllabus';
import { linuxContent } from '../data/linuxContent';

// DBMS (generated earlier)
import { dbmsSyllabus } from '../data/dbmsSyllabus';
import { dbmsContent } from '../data/dbmsContent';

// OOPs (generated earlier)
import { oopsSyllabus } from '../data/oopsSyllabus';
import { oopsContent } from '../data/oopsContent';

export const modules = [
  { slug: 'java', label: 'Java', title: 'Java Preparation', description: 'Complete syllabus for Java.', syllabus: javaSyllabus, content: javaContent },
  { slug: 'html', label: 'HTML', title: 'HTML Preparation', description: 'Master semantic HTML and APIs.', syllabus: htmlSyllabus, content: htmlContent },
  { slug: 'css', label: 'CSS', title: 'CSS Preparation', description: 'Layout, responsive design, animations.', syllabus: cssSyllabus, content: cssContent },
  { slug: 'javascript', label: 'JavaScript', title: 'JavaScript Preparation', description: 'Core JS, ES6+, async programming.', syllabus: jsSyllabus, content: jsContent },
  { slug: 'react', label: 'React', title: 'React Preparation', description: 'Hooks, state management, optimization.', syllabus: reactSyllabus, content: reactContent },
  { slug: 'node', label: 'Node.js', title: 'Node.js Preparation', description: 'Server-side JS, event loop, streams.', syllabus: nodeSyllabus, content: nodeContent },
  { slug: 'express', label: 'Express.js', title: 'Express Preparation', description: 'REST APIs, middleware, routing.', syllabus: expressSyllabus, content: expressContent },
  { slug: 'mongodb', label: 'MongoDB', title: 'MongoDB Preparation', description: 'NoSQL, aggregation, Mongoose.', syllabus: mongoSyllabus, content: mongoContent },
  { slug: 'sql', label: 'SQL', title: 'SQL Preparation', description: 'Relational databases, queries, joins.', syllabus: sqlSyllabus, content: sqlContent },
  
  {
    slug: 'auth',
    label: 'Auth & Security',
    title: 'Authentication & Security',
    description: 'Master JWT, Cookies, XSS, CSRF, and secure backend architectures.',
    syllabus: authSyllabus,
    content: authContent,
  },
  {
    slug: 'system-design',
    label: 'System Design',
    title: 'System Design Basics',
    description: 'Scaling, Load Balancers, Caching, CAP Theorem, and Microservices.',
    syllabus: systemSyllabus,
    content: systemContent,
  },

  // Newly added modules:
  {
    slug: 'git',
    label: 'Git & GitHub',
    title: 'Git & GitHub Fundamentals',
    description: 'Version control, branching, merging, and collaboration workflows.',
    syllabus: gitSyllabus,
    content: gitContent,
  },
  {
    slug: 'testing',
    label: 'Testing',
    title: 'Software Testing',
    description: 'Unit, integration, E2E testing with Jest and React Testing Library.',
    syllabus: testingSyllabus,
    content: testingContent,
  },

  // Previously empty modules – now filled with generated content:
  {
    slug: 'os',
    label: 'OS',
    title: 'Operating Systems',
    description: 'Processes, Threads, Memory Management, and Concurrency.',
    syllabus: osSyllabus,
    content: osContent,
  },
  {
    slug: 'cn',
    label: 'Networks',
    title: 'Computer Networks',
    description: 'OSI Model, TCP/IP, Protocols, and Routing Architecture.',
    syllabus: cnSyllabus,
    content: cnContent,
  },
  {
    slug: 'linux',
    label: 'Linux',
    title: 'Linux Fundamentals',
    description: 'Commands, File Permissions, Bash Scripting, and Architecture.',
    syllabus: linuxSyllabus,
    content: linuxContent,
  },
  {
    slug: 'dbms',
    label: 'DBMS',
    title: 'Database Management Systems',
    description: 'Normalization, ACID Properties, Transactions, and Relational Theory.',
    syllabus: dbmsSyllabus,
    content: dbmsContent,
  },
  {
    slug: 'oops',
    label: 'OOPs',
    title: 'Object-Oriented Programming',
    description: 'Classes, Inheritance, Polymorphism, and Design Patterns.',
    syllabus: oopsSyllabus,
    content: oopsContent,
  }
];

export function getModule(slug) {
  return modules.find((m) => m.slug === slug);
}
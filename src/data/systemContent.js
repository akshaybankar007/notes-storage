export const systemContent = {
  "1": {
    title: "What is the CAP Theorem?",
    sections: [
      {
        heading: "The Three Properties",
        text: "In any distributed system, you can only guarantee two of three: Consistency — every read receives the most recent write[reference:86]. Availability — every request receives a non-error response[reference:87]. Partition Tolerance — the system continues despite network failures[reference:88]."
      },
      {
        heading: "The Trade-off",
        text: "Network partitions are unavoidable in distributed systems. You must choose: CP (Consistency + Partition Tolerance) — systems like MongoDB and Redis that may stop responding to ensure consistency. AP (Availability + Partition Tolerance) — systems like Cassandra that keep responding but might return stale data[reference:89]."
      }
    ]
  },
  "2": {
    title: "Horizontal vs Vertical Scaling — what's the difference?",
    sections: [
      {
        heading: "Vertical Scaling (Scaling Up)",
        text: "Adding more CPU, RAM, or storage to a single machine[reference:90]. Pros: Easy to implement, no code changes. Cons: Hardware limits, single point of failure, expensive at high levels[reference:91]."
      },
      {
        heading: "Horizontal Scaling (Scaling Out)",
        text: "Adding more machines to the resource pool and distributing traffic among them[reference:92]. Pros: Infinite scalability, high fault tolerance. Cons: Complex architecture, requires load balancers and stateless services[reference:93]."
      }
    ]
  },
  "3": {
    title: "What is a Load Balancer and why is it important?",
    sections: [
      {
        heading: "Purpose",
        text: "A Load Balancer sits in front of servers and distributes client requests across them. Prevents any single server from being overwhelmed[reference:94]."
      },
      {
        heading: "Algorithms",
        text: "Round Robin — distributes requests sequentially. Least Connections — sends to the server with fewest active connections. IP Hash — routes requests from the same IP to the same server consistently[reference:95]."
      }
    ]
  },
  "4": {
    title: "What are different caching strategies?",
    sections: [
      {
        heading: "Why Cache?",
        text: "Database queries and API calls are slow. Caching stores expensive operation results in fast RAM (Redis or Memcached), serving subsequent requests in milliseconds[reference:96]."
      },
      {
        heading: "Cache-Aside Pattern",
        text: "Application checks cache first. Cache Hit — return data. Cache Miss — query database, store result in cache, then return[reference:97]."
      },
      {
        heading: "Eviction Policies",
        text: "LRU (Least Recently Used) — evicts data not requested recently. TTL (Time To Live) — automatically deletes data after a set time[reference:98]."
      }
    ]
  },
  "5": {
    title: "What is a CDN and how does it improve performance?",
    sections: [
      {
        heading: "What is a CDN?",
        text: "A Content Delivery Network (like Cloudflare or AWS CloudFront) copies static assets (HTML, CSS, JS, images) to edge servers globally. Users fetch data from the physically closest node[reference:99]."
      },
      {
        heading: "Why It Matters",
        text: "Reduces physical latency — a user in India loading from a server in New York is slow. CDN brings content closer, dramatically improving load times[reference:100]."
      }
    ]
  },
  "6": {
    title: "Stateful vs Stateless — which one scales better?",
    sections: [
      {
        heading: "Stateful",
        text: "Server remembers client data between requests (e.g., session stored in RAM). Hard to scale — if a request hits a different server, the user appears unauthenticated[reference:101]."
      },
      {
        heading: "Stateless",
        text: "Server keeps no memory of previous requests. Every request contains all needed information (e.g., JWT in header). Any server can handle any request — scales horizontally with ease[reference:102]."
      }
    ]
  },
  "7": {
    title: "Monolithic vs Microservices — pros and cons?",
    sections: [
      {
        heading: "Monolith",
        text: "All application logic (Auth, Payments, Inventory) in a single codebase deployed as one unit. Easy to develop initially. Becomes a bottleneck as team grows — a bug in one module can crash the entire system[reference:103]."
      },
      {
        heading: "Microservices",
        text: "Split application into small, independent services communicating via APIs. Teams work independently, services scale individually, and failures are isolated. Cons: Increased operational complexity and network latency[reference:104]."
      }
    ]
  },
  "8": {
    title: "What are Message Queues and when do you use them?",
    sections: [
      {
        heading: "Purpose",
        text: "Message queues (RabbitMQ, Kafka, AWS SQS) enable asynchronous processing. Decouple services so they don't need to wait for each other[reference:105]."
      },
      {
        heading: "Pub/Sub Architecture",
        text: "Example: User uploads a video. API immediately returns 'success' and pushes an event to the queue. A background worker reads the message and processes the video at its own pace. If the worker crashes, the message stays in the queue to be retried[reference:106]."
      }
    ]
  }
};
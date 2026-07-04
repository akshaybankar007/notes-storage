export const authContent = {
  "1": {
    title: "Authentication vs Authorization",
    sections: [
      {
        heading: "Authentication",
        text: "Authentication verifies identity — it answers the question 'who are you?'[reference:0]. You prove who you are using credentials like passwords, biometrics, or MFA."
      },
      {
        heading: "Authorization",
        text: "Authorization determines permissions — it answers the question 'what can you do?'[reference:1]. Once authenticated, the system checks what resources or actions you're allowed to access. Authorization always comes after authentication[reference:2]."
      }
    ]
  },
  "2": {
    title: "What is JWT? Explain its structure and how refresh tokens work.",
    sections: [
      {
        heading: "JWT Structure",
        text: "A JWT (JSON Web Token) has three parts: Header (algorithm and token type), Payload (claims/user data), and Signature (HMAC or RSA). These are Base64Url encoded and concatenated with dots[reference:3]."
      },
      {
        heading: "Refresh Tokens",
        text: "Access tokens are short-lived (e.g., 15 minutes). When they expire, the client uses a long-lived refresh token to obtain a new access token without re-authentication[reference:4]. The refresh token is typically stored server-side and can be revoked[reference:5]."
      },
      {
        heading: "Important Note",
        text: "JWT is a token format, not an authentication protocol. It doesn't define how tokens are issued, stored, or refreshed — that's your responsibility to design[reference:6]."
      }
    ]
  },
  "3": {
    title: "Sessions vs JWT — which one would you choose and why?",
    sections: [
      {
        heading: "Session-Based Authentication",
        text: "Server stores session data in memory or a database (like Redis) and gives the client a session ID cookie. Stateful — requires session storage. Pros: easy to invalidate, fine-grained control. Cons: requires storage, harder to scale horizontally[reference:7]."
      },
      {
        heading: "JWT-Based Authentication",
        text: "Token is self-contained with all user data. Stateless — no server-side storage needed. Pros: scalable, no session store required. Cons: cannot be easily invalidated, token size can grow[reference:8][reference:9]."
      },
      {
        heading: "When to Choose",
        text: "Use sessions for complex C端 applications needing real-time control (like kicking users out). Use JWT for microservices, stateless APIs, or when you need cross-domain authentication[reference:10]."
      }
    ]
  },
  "4": {
    title: "Cookies — what are HttpOnly, Secure, and SameSite flags?",
    sections: [
      {
        heading: "HttpOnly",
        text: "Prevents client-side JavaScript from accessing the cookie[reference:11]. This mitigates XSS attacks because even if an attacker injects scripts, they can't steal the cookie. Always set for session cookies[reference:12]."
      },
      {
        heading: "Secure",
        text: "Cookie is only sent over HTTPS, protecting against man-in-the-middle attacks[reference:13]. Must be set in production[reference:14]."
      },
      {
        heading: "SameSite",
        text: "Controls when cookies are sent with cross-site requests[reference:15]. `Strict` — only same site. `Lax` — allowed for top-level navigation. `None` — cross-site allowed but requires Secure flag[reference:16]. Prevents CSRF attacks[reference:17]."
      }
    ]
  },
  "5": {
    title: "How does bcrypt work? What are salt rounds?",
    sections: [
      {
        heading: "Bcrypt Overview",
        text: "Bcrypt is a password hashing function designed to be slow and resistant to brute-force attacks. It's the gold standard for storing passwords[reference:18]."
      },
      {
        heading: "Salt",
        text: "A random string added to each password before hashing. This prevents rainbow table attacks — even if two users have the same password, their hashes will be different[reference:19]."
      },
      {
        heading: "Salt Rounds (Work Factor)",
        text: "The number of times the hashing algorithm iterates. Higher rounds = more secure but slower. A value of 10-12 is reasonable for most applications[reference:20][reference:21]. Each round doubles the computation time."
      }
    ]
  },
  "6": {
    title: "What is CORS and how do you fix CORS errors?",
    sections: [
      {
        heading: "What is CORS?",
        text: "CORS (Cross-Origin Resource Sharing) is a browser security mechanism that restricts web pages from making requests to a different origin (domain, protocol, or port) than the one that served the page[reference:22]."
      },
      {
        heading: "How It Works",
        text: "For non-simple requests, the browser sends a preflight OPTIONS request. The server must respond with appropriate `Access-Control-Allow-*` headers. CORS itself is not a vulnerability, but misconfigured CORS is[reference:23]."
      },
      {
        heading: "How to Fix",
        text: "Configure the server to set `Access-Control-Allow-Origin` to the allowed domain (or `*` for public APIs). For credentials, set `Access-Control-Allow-Credentials: true`. You can also use a proxy server[reference:24]."
      }
    ]
  },
  "7": {
    title: "What is XSS? How do you prevent it?",
    sections: [
      {
        heading: "What is XSS?",
        text: "Cross-Site Scripting (XSS) is a vulnerability where attackers inject malicious scripts into web pages viewed by other users[reference:25][reference:26]."
      },
      {
        heading: "Types of XSS",
        text: "Stored XSS — malicious script is permanently stored on the server (e.g., in a database). Reflected XSS — script is reflected off a web server via URL parameters. DOM-based XSS — client-side scripts manipulate the DOM unsafely[reference:27]."
      },
      {
        heading: "Prevention",
        text: "Sanitize all user input. Escape output using HTML entity encoding. Use Content Security Policy (CSP). Set HttpOnly cookies to prevent script access to session cookies[reference:28]."
      }
    ]
  },
  "8": {
    title: "What is CSRF? How do you prevent it?",
    sections: [
      {
        heading: "What is CSRF?",
        text: "Cross-Site Request Forgery (CSRF) tricks an authenticated user into performing unwanted actions on a trusted site[reference:29]. The attacker exploits the user's existing session to make unauthorized requests[reference:30]."
      },
      {
        heading: "CSRF vs XSS",
        text: "XSS injects scripts into a trusted site; CSRF forces a user to execute unwanted actions on a site where they're already authenticated[reference:31]."
      },
      {
        heading: "Prevention",
        text: "Use anti-CSRF tokens (synchronizer tokens) — random values included in forms and validated server-side. Set SameSite cookies to Lax or Strict[reference:32]. Validate the Referer header. Use CAPTCHA for sensitive operations[reference:33]."
      }
    ]
  },
  "9": {
    title: "What is SQL Injection and how do you prevent it?",
    sections: [
      {
        heading: "What is SQL Injection?",
        text: "SQL injection occurs when user input is concatenated directly into SQL queries, allowing attackers to execute malicious SQL. Example: `' OR '1'='1` bypasses authentication by always returning true."
      },
      {
        heading: "Prevention",
        text: "Always use parameterized queries (prepared statements) — this separates SQL logic from data. Use an ORM framework. Validate and sanitize all user input. Apply the principle of least privilege to database accounts."
      }
    ]
  },
  "10": {
    title: "What are Rate Limiting and Helmet.js?",
    sections: [
      {
        heading: "Rate Limiting",
        text: "Rate limiting controls how many requests a client can make in a given time window. Prevents brute-force attacks, DDoS, and API abuse. Implemented using middleware like `express-rate-limit` in Node.js, typically per IP or per user."
      },
      {
        heading: "Helmet.js",
        text: "Helmet.js is Express middleware that sets security HTTP headers automatically. It adds headers like `X-Frame-Options` (prevent clickjacking), `X-XSS-Protection`, `X-Content-Type-Options` (prevent MIME sniffing), and helps configure CSP[reference:34]."
      }
    ]
  }
};
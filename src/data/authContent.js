// authContent.js
export const authContent = {
  "1": {
    title: "Authentication vs Authorization",
    sections: [
      {
        heading: "Examples",
        text: "Login (authN) - you provide credentials. Then, access control (authZ) - you can access certain routes or resources."
      },
      {
        heading: "Common Approaches",
        text: "AuthN: passwords, MFA, biometrics. AuthZ: roles, policies, ACLs."
      }
    ]
  },
  "2": {
    title: "JWT (Structure + Refresh Tokens)",
    sections: [
      {
        heading: "Structure",
        text: "Three parts: Header (algorithm, type), Payload (claims), Signature (HMAC or RSA). Base64Url encoded, concatenated with dots."
      },
      {
        heading: "Refresh Tokens",
        text: "Access tokens are short-lived. Refresh tokens (stored securely) are used to obtain new access tokens without re-authentication."
      }
    ]
  },
  "3": {
    title: "Sessions vs JWT",
    sections: [
      {
        heading: "Sessions",
        text: "Server stores session ID, client stores cookie. Stateful, requires session store (e.g., Redis)."
      },
      {
        heading: "JWT",
        text: "Self-contained, no server storage. Stateless, scalable, but cannot be invalidated easily unless using blacklists."
      }
    ]
  },
  "4": {
    title: "Cookies (HttpOnly, Secure, SameSite)",
    sections: [
      {
        heading: "HttpOnly",
        text: "Prevents JavaScript access, mitigating XSS. Should be set for session cookies."
      },
      {
        heading: "Secure",
        text: "Cookie sent only over HTTPS, protecting against MITM attacks."
      },
      {
        heading: "SameSite",
        text: "Restricts cross-site requests. `Strict` (same site only), `Lax` (top-level navigation), `None` (requires Secure)."
      }
    ]
  },
  "5": {
    title: "Bcrypt (Password Hashing, Salt Rounds)",
    sections: [
      {
        heading: "Salt",
        text: "A random string added to each password before hashing, preventing rainbow table attacks."
      },
      {
        heading: "Salt Rounds",
        text: "Work factor controlling computational cost. Higher rounds (e.g., 12) increase security but also time."
      }
    ]
  },
  "6": {
    title: "CORS (Cross-Origin Resource Sharing)",
    sections: [
      {
        heading: "How It Works",
        text: "Browser sends preflight OPTIONS request for non-simple requests. Server responds with Access-Control-Allow-* headers."
      },
      {
        heading: "Configuration",
        text: "Server sets allowed origins, methods, headers. For credentials, `Access-Control-Allow-Credentials: true`."
      }
    ]
  },
  "7": {
    title: "XSS (Cross-Site Scripting) and Prevention",
    sections: [
      {
        heading: "Types",
        text: "Stored (database), Reflected (URL parameter), DOM-based (client-side)."
      },
      {
        heading: "Prevention",
        text: "Sanitize input, escape output (HTML entity encoding), use Content Security Policy (CSP), and HttpOnly cookies."
      }
    ]
  },
  "8": {
    title: "CSRF (Cross-Site Request Forgery) and Prevention",
    sections: [
      {
        heading: "Prevention",
        text: "Anti-CSRF tokens (synchronizer tokens), SameSite cookies (Lax/Strict), and checking Referer header."
      },
      {
        heading: "Example",
        text: "An attacker posts a form to bank.com/transfer using the victim's session. Token prevents this."
      }
    ]
  },
  "9": {
    title: "SQL Injection and Prevention",
    sections: [
      {
        heading: "Prevention",
        text: "Use parameterized queries (prepared statements) or ORM frameworks. Validate and sanitize input."
      },
      {
        heading: "Example",
        text: "`SELECT * FROM users WHERE username = 'admin' OR '1'='1'` - bypasses authentication."
      }
    ]
  },
  "10": {
    title: "Rate Limiting & Helmet.js",
    sections: [
      {
        heading: "Rate Limiting",
        text: "Implement with express-rate-limit (Node.js). Limits per IP or user; helps against brute-force and DDoS."
      },
      {
        heading: "Helmet.js",
        text: "Middleware that sets headers like X-Frame-Options, X-XSS-Protection, X-Content-Type-Options, and CSP."
      }
    ]
  }
};
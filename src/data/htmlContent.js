export const htmlContent = {
  1: {
    title: "Document Structure & Semantic HTML",
    sections: [
      {
        heading: "The Modern HTML5 Boilerplate",
        text: "Every HTML document begins with a strict structure. The <!DOCTYPE html> declaration is not an HTML tag; it is an instruction to the web browser about what version of HTML the page is written in, ensuring the browser renders it in standards mode rather than quirks mode. The <html> element is the root, and it must contain a 'lang' attribute for accessibility and SEO. The <head> contains metadata, while the <body> contains the rendered content.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Structure</title>
</head>
<body>
    </body>
</html>`
      },
      {
        heading: "Semantic HTML vs Non-Semantic HTML",
        text: "Semantic HTML introduces meaning to the web page rather than just presentation. Instead of using generic <div> or <span> tags for everything, semantic tags define the architecture of the content. This is critical for Screen Readers (accessibility) and Search Engine Crawlers (SEO).",
      },
      {
        heading: "Core Semantic Tags",
        text: "1. <header>: Introductory content or a set of navigational links.\n2. <nav>: Specifically for major block navigation.\n3. <main>: The dominant content of the <body>. There should only be one hidden <main> per page.\n4. <article>: A self-contained, independent piece of content (e.g., a blog post, a news widget).\n5. <section>: A thematic grouping of content, typically with a heading.\n6. <aside>: Content indirectly related to the main content (e.g., sidebars, call-out boxes).\n7. <footer>: Closing information, copyright data, or footer links.",
        code: `<main>
  <article>
    <header>
      <h1>Understanding Semantics</h1>
      <p>Published on Aug 12</p>
    </header>
    <section>
      <h2>Introduction</h2>
      <p>Content goes here...</p>
    </section>
  </article>
  <aside>
    <h3>Related Posts</h3>
    <nav>...</nav>
  </aside>
</main>`
      }
    ]
  },
  2: {
    title: "Elements, Attributes & Global Attributes",
    sections: [
      {
        heading: "Anatomy of an HTML Element",
        text: "An element consists of an opening tag, content, and a closing tag. Some elements are 'void' or 'empty' elements (like <img>, <br>, <input>) meaning they do not have a closing tag and cannot contain text or child elements. Attributes provide additional information about elements and always reside in the opening tag."
      },
      {
        heading: "Global Attributes",
        text: "Global attributes can be applied to virtually any HTML element. The most critical ones include:\n\n- id: A unique identifier. No two elements can share the same id.\n- class: A space-separated list of classes for CSS styling and JS targeting.\n- style: Inline CSS (generally avoided in favor of external stylesheets).\n- title: Additional information, often displayed as a tooltip on hover.\n- tabindex: Controls whether an element is focusable and its sequential focus navigation order. '0' makes it naturally focusable, '-1' removes it from keyboard flow but allows programmatic focus.\n- hidden: A boolean attribute indicating the element is not yet, or is no longer, relevant.",
        code: `<div id="unique-container" class="card primary-card">
  <button tabindex="0" title="Click to submit">Submit</button>
  <p hidden>This text is in the DOM but hidden from the user and screen readers.</p>
</div>`
      },
      {
        heading: "Data Attributes (data-*)",
        text: "The data-* attributes allow developers to store custom data directly on standard HTML elements without relying on non-standard attributes or extra DOM properties. This data can be easily accessed in JavaScript via the 'dataset' property.",
        code: `<article data-author-id="492" data-category="tech" id="post-1">
  <h2>Tech News</h2>
</article>

<script>
  const article = document.getElementById('post-1');
  console.log(article.dataset.authorId); // Outputs: "492"
  console.log(article.dataset.category); // Outputs: "tech"
</script>`
      }
    ]
  },
  3: {
    title: "Text Formatting, Links & Lists",
    sections: [
      {
        heading: "Semantic Text Formatting",
        text: "HTML5 deprecates purely presentational tags (like <b> and <i>) in favor of semantic ones. \n- <strong>: Indicates strong importance, seriousness, or urgency (usually rendered bold, read with emphasis by screen readers).\n- <em>: Indicates stress emphasis (usually rendered italicized).\n- <mark>: Represents text marked or highlighted for reference.\n- <small>: Represents side-comments or small print (like copyright).\n- <blockquote> and <q>: For block-level and inline quotations respectively."
      },
      {
        heading: "Anchor Tags and Links",
        text: "The <a> tag creates hyperlinks. The 'href' attribute dictates the destination (absolute URLs, relative paths, or fragment identifiers). Security/Performance note: When using target='_blank' to open links in a new tab, historically rel='noopener noreferrer' was required to prevent the new page from accessing the window.opener object, though modern browsers now implicitly set noopener for _blank links.",
        code: `<a href="https://example.com" target="_blank" rel="noopener">External Link</a>

<a href="#section-2">Jump to Section 2</a>

<a href="mailto:email@example.com">Send Email</a>
<a href="tel:+1234567890">Call Us</a>`
      },
      {
        heading: "Lists: Unordered, Ordered, and Description",
        text: "Lists group related items. \n- <ul> (Unordered): Items where order doesn't matter (bullet points).\n- <ol> (Ordered): Items where sequence is critical (numbered). Attributes like 'start' or 'reversed' can manipulate the numbering.\n- <dl> (Description List): Used for key-value pairs, dictionary definitions, or metadata. Consists of <dt> (terms) and <dd> (details).",
        code: `<ol start="5" reversed>
  <li>Fifth place</li>
  <li>Fourth place</li>
</ol>

<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>`
      }
    ]
  },
  4: {
    title: "Images, Audio, Video & Embedding",
    sections: [
      {
        heading: "Responsive Images: img and srcset",
        text: "The basic <img> tag requires a 'src' and an 'alt' attribute (crucial for screen readers and SEO). To make images responsive based on device resolution (like Retina displays) or viewport width, use the 'srcset' and 'sizes' attributes. This allows the browser to download the most appropriately sized image, saving bandwidth.",
        code: `<img 
  src="small.jpg" 
  srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 2000w" 
  sizes="(max-width: 600px) 100vw, 50vw" 
  alt="A detailed description of the image context"
  loading="lazy" 
/>`
      },
      {
        heading: "The Picture Element",
        text: "The <picture> element offers advanced art direction. It allows you to serve completely different image formats (like WebP) or different image crops based on media queries, falling back to a standard <img> if neither matches.",
        code: `<picture>
  <source srcset="image.webp" type="image/webp">
  <source media="(min-width: 800px)" srcset="wide-crop.jpg">
  <img src="fallback.jpg" alt="Description">
</picture>`
      },
      {
        heading: "Native Audio and Video",
        text: "HTML5 <audio> and <video> tags eliminate the need for third-party plugins. You can provide multiple <source> files for browser compatibility. Standard attributes include controls, autoplay, loop, and muted.",
        code: `<video width="640" height="360" controls poster="thumbnail.jpg" preload="metadata">
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  <track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English">
  Your browser does not support the video tag.
</video>`
      },
      {
        heading: "Iframes",
        text: "The <iframe> embeds another HTML page into the current one. Security is paramount here. Use the 'sandbox' attribute to restrict the embedded content's capabilities (e.g., preventing it from running scripts or submitting forms).",
        code: `<iframe src="https://example.com" width="100%" height="500" sandbox="allow-scripts allow-same-origin" title="External Widget"></iframe>`
      }
    ]
  },
  5: {
    title: "Tables",
    sections: [
      {
        heading: "Table Architecture",
        text: "HTML tables are designed for rendering tabular data (data with relationships across two axes), NOT for page layout. A semantically correct table consists of a <table> container, a <caption> for accessibility, and structural blocks: <thead> for headers, <tbody> for main data, and <tfoot> for summaries."
      },
      {
        heading: "Rows, Cells, and Scope",
        text: "Inside the structural blocks, <tr> defines a row. <th> defines a header cell, and <td> defines a standard data cell. The 'scope' attribute on <th> (row or col) is essential for screen readers to understand the relationship between headers and data cells.",
        code: `<table>
  <caption>Monthly Financial Report</caption>
  <thead>
    <tr>
      <th scope="col">Month</th>
      <th scope="col">Revenue</th>
      <th scope="col">Expenses</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">January</th>
      <td>$5,000</td>
      <td>$3,000</td>
    </tr>
    <tr>
      <th scope="row">February</th>
      <td>$6,200</td>
      <td>$3,100</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Total</th>
      <td>$11,200</td>
      <td>$6,100</td>
    </tr>
  </tfoot>
</table>`
      },
      {
        heading: "Spanning Columns and Rows",
        text: "Cells can merge across multiple columns or rows using 'colspan' and 'rowspan'. This is useful for complex data structures but requires careful attention to the grid alignment.",
        code: `<td colspan="2">This cell spans across two columns</td>
<td rowspan="3">This cell spans down three rows</td>`
      }
    ]
  },
  6: {
    title: "Forms & HTML5 Validation",
    sections: [
      {
        heading: "Form Basics and Accessibility",
        text: "The <form> element wraps input controls. Its 'action' attribute defines where data is sent, and 'method' (GET/POST) defines how. Every <input>, <select>, or <textarea> MUST have a corresponding <label>. The label's 'for' attribute must strictly match the input's 'id'. This allows users to click the text to focus the input and gives screen readers context.",
        code: `<form action="/api/submit" method="POST">
  <div class="input-group">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>
  </div>
</form>`
      },
      {
        heading: "Advanced Input Types",
        text: "HTML5 introduced semantic input types that trigger specialized mobile keyboards and native browser validation. Types include: email, url, tel, number, range, date, time, color, and password."
      },
      {
        heading: "Native Client-Side Validation",
        text: "Before relying on JavaScript, use native HTML5 validation attributes to prevent form submission on bad data:\n- required: Field cannot be empty.\n- min / max: Numeric boundaries for type='number' or type='date'.\n- minlength / maxlength: String length constraints.\n- pattern: A strict Regular Expression the input must match.\n\nYou can style these states in CSS using the :valid and :invalid pseudo-classes.",
        code: `<form>
  <label for="passcode">4-Digit PIN:</label>
  <input 
    type="text" 
    id="passcode" 
    name="passcode" 
    pattern="[0-9]{4}" 
    title="Must be exactly 4 digits" 
    required
  >
  <button type="submit">Verify</button>
</form>`
      }
    ]
  },
  7: {
    title: "HTML5 APIs & Storage",
    sections: [
      {
        heading: "Web Storage API (Local vs Session)",
        text: "The Web Storage API provides mechanisms to store key/value pairs in the browser, offering much larger capacity (usually 5MB) than cookies and without sending data to the server on every HTTP request.\n- localStorage: Data persists indefinitely until explicitly deleted. Survives browser restarts.\n- sessionStorage: Data is cleared when the page session ends (when the tab is closed).",
        code: `// Saving data
localStorage.setItem('theme', 'dark');
sessionStorage.setItem('tempState', 'active');

// Retrieving data
const theme = localStorage.getItem('theme');

// Removing data
localStorage.removeItem('theme');
localStorage.clear(); // Clears all local storage for the origin`
      },
      {
        heading: "Geolocation API",
        text: "Allows the web app to request the user's physical location coordinates. This requires explicit user permission and must be served over HTTPS.",
        code: `if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log("Lat:", position.coords.latitude);
      console.log("Lon:", position.coords.longitude);
    },
    (error) => {
      console.error("Location access denied or failed.");
    }
  );
}`
      },
      {
        heading: "Canvas API",
        text: "The <canvas> element provides a resolution-dependent bitmap canvas, which can be used for rendering 2D graphics, game graphics, or data visualization on the fly via JavaScript.",
        code: `<canvas id="myCanvas" width="200" height="100"></canvas>

<script>
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#17b5dc';
  ctx.fillRect(10, 10, 150, 80);
</script>`
      }
    ]
  },
  8: {
    title: "Accessibility (ARIA, Alt Text, Labels)",
    sections: [
      {
        heading: "What is Web Accessibility (a11y)?",
        text: "Accessibility ensures web applications are usable by people with disabilities (visual, auditory, motor, cognitive). Adhering to WCAG (Web Content Accessibility Guidelines) is both an ethical and often legal requirement. Semantic HTML is the foundation, but ARIA (Accessible Rich Internet Applications) attributes bridge the gap for complex, dynamic custom UI components."
      },
      {
        heading: "ARIA Roles and Attributes",
        text: "When you build a custom component (e.g., a div that acts like a button), screen readers don't know it's a button. ARIA fixes this:\n- role: Defines what the element is (e.g., role='button', role='dialog', role='tablist').\n- aria-label: Provides a string value that labels an interactive element if there is no visible text (e.g., an icon-only button).\n- aria-hidden='true': Hides decorative elements from screen readers so they don't cause clutter.\n- aria-expanded / aria-disabled: Communicates dynamic state changes to assistive tech.",
        code: `<button aria-label="Close modal" onclick="close()">
  <svg class="close-icon">...</svg>
</button>

<div role="combobox" aria-expanded="false" aria-controls="dropdown-list">
  Select Option
</div>
<ul id="dropdown-list" role="listbox" aria-hidden="true">
  <li role="option">Option 1</li>
</ul>`
      },
      {
        heading: "Focus Management",
        text: "Keyboard navigation is crucial. Users should be able to navigate via the 'Tab' key. Focus outlines (the default blue/black ring) should never be removed via CSS (outline: none) unless you provide a clear, custom visual alternative."
      }
    ]
  },
  9: {
    title: "Meta Tags & SEO Basics",
    sections: [
      {
        heading: "The Meta Viewport",
        text: "Without the viewport meta tag, mobile browsers will render the page at a desktop width (usually 980px) and zoom out, creating a terrible user experience. This tag forces the browser to set the width to the device's actual width and sets the initial zoom scale to 100%.",
        code: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
      },
      {
        heading: "SEO Meta Tags",
        text: "Search engines use meta tags to understand page content. \n- title: (In <head>) The most important SEO element. Dictates the clickable headline in search results.\n- meta description: Provides a brief summary of the page. Should be 150-160 characters to avoid truncation.\n- canonical link: Prevents duplicate content penalties if the same page is accessible via multiple URLs.",
        code: `<title>Complete Guide to Semantic HTML</title>
<meta name="description" content="Learn how to structure your web pages using HTML5 semantic elements to improve accessibility and SEO rankings.">
<link rel="canonical" href="https://example.com/html-guide" />`
      },
      {
        heading: "Open Graph (OG) and Twitter Cards",
        text: "When links are shared on social media (Facebook, LinkedIn, Twitter, Discord), platforms look for Open Graph tags to generate rich previews (image, title, description).",
        code: `<meta property="og:title" content="Complete Guide to Semantic HTML">
<meta property="og:description" content="Learn how to structure your web pages...">
<meta property="og:image" content="https://example.com/preview.jpg">
<meta property="og:url" content="https://example.com/html-guide">

<meta name="twitter:card" content="summary_large_image">`
      }
    ]
  },
  10: {
    title: "DOM Structure & Script Loading (async, defer)",
    sections: [
      {
        heading: "The Critical Rendering Path",
        text: "When a browser loads an HTML file, it parses it top-to-bottom, creating the Document Object Model (DOM) tree. Whenever the parser encounters a standard <script> tag, parsing is completely blocked. The browser stops building the DOM, downloads the script, executes it, and only then resumes HTML parsing. This causes a 'white screen' delay."
      },
      {
        heading: "Traditional Fix vs Modern Script Attributes",
        text: "Historically, developers placed scripts at the very bottom of the <body> to ensure the HTML loaded first. HTML5 introduced two boolean attributes for the <script> tag within the <head> to solve this elegantly: 'async' and 'defer'."
      },
      {
        heading: "async vs defer",
        text: "- async: The script is downloaded in the background (asynchronously) while HTML parses. As soon as the download finishes, HTML parsing is paused, and the script executes immediately. Execution order is NOT guaranteed (whichever script downloads fastest runs first). Best for independent scripts like Analytics.\n\n- defer: The script is downloaded in the background, but execution is deferred until the HTML parser has completely finished building the DOM. Execution order IS guaranteed to match the order in the document. This is the modern standard for application code.",
        code: `<script src="app.js"></script> 

<script async src="analytics.js"></script>

<script defer src="main-app.js"></script>`
      }
    ]
  }
};
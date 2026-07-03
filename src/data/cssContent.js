export const cssContent = {
  1: {
    title: "Selectors & Specificity",
    sections: [
      {
        heading: "CSS Selectors Overview",
        text: "Selectors determine which HTML elements CSS rules apply to. They range from broad (Universal `*`, Element `div`) to specific (Class `.card`, ID `#header`). Combinators refine selection based on relationships: Descendant (space) selects all nested matches, Child (`>`) selects direct children only, Adjacent Sibling (`+`) selects the immediate next sibling, and General Sibling (`~`) selects all following siblings."
      },
      {
        heading: "Pseudo-classes and Pseudo-elements",
        text: "Pseudo-classes target state or position (e.g., `:hover`, `:focus`, `:first-child`, `:nth-child(even)`). Pseudo-elements style specific parts of an element or insert virtual elements (e.g., `::before`, `::after`, `::first-letter`). Note: `::before` and `::after` require the `content` property to render.",
        code: `.btn:hover { background: blue; }
.list-item:nth-child(odd) { background: #eee; }
.card::before { content: "★"; color: gold; }`
      },
      {
        heading: "The Specificity Hierarchy",
        text: "When multiple conflicting rules target the same element, browsers calculate specificity using a four-category point system (Inline, ID, Class, Element). \n- Inline styles: 1000 points\n- IDs: 100 points\n- Classes, attributes, pseudo-classes: 10 points\n- Elements, pseudo-elements: 1 point\n\nThe `!important` declaration overrides all specificity, but should be used sparingly as it makes debugging difficult.",
        code: `/* Specificity: 0, 1, 1, 1 = 111 */
#main-nav .nav-link:hover { color: red; }

/* Specificity: 0, 0, 1, 0 = 10 */
.nav-link { color: blue; } 
/* The first rule wins due to higher specificity. */`
      }
    ]
  },
  2: {
    title: "Box Model",
    sections: [
      {
        heading: "Anatomy of the Box Model",
        text: "Every element in CSS is a rectangular box. From inside out:\n1. Content: The actual text or image.\n2. Padding: Transparent space inside the border, clearing area around content.\n3. Border: A line surrounding the padding.\n4. Margin: Transparent space outside the border, pushing other elements away."
      },
      {
        heading: "box-sizing: border-box",
        text: "By default, CSS uses `content-box`, meaning padding and border are ADDED to the specified width/height, often breaking layouts. Setting `box-sizing: border-box` includes padding and borders within the declared width/height, making sizing predictable. This is universally adopted as a best practice via a universal reset.",
        code: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.box {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  /* With border-box, the total width remains exactly 200px. */
}`
      },
      {
        heading: "Margin Collapsing",
        text: "When two vertical margins touch (top and bottom), they don't add together. Instead, they 'collapse' into a single margin equal to the largest of the two. This does not happen with horizontal margins, or in Flexbox/Grid containers."
      }
    ]
  },
  3: {
    title: "Layout Basics (display, position, z-index)",
    sections: [
      {
        heading: "The Display Property",
        text: "- block: Takes up full width, starts on a new line (e.g., `<div>`, `<p>`).\n- inline: Takes up only necessary width, does NOT respect top/bottom width, padding, or margins (e.g., `<span>`, `<a>`).\n- inline-block: Sits inline like text, but respects width, height, and vertical margins.\n- none: Removes the element entirely from the document flow (unlike `visibility: hidden` which leaves an empty space)."
      },
      {
        heading: "Positioning Contexts",
        text: "- static: Default. Element is in the normal document flow.\n- relative: Positioned relative to its normal position. Leaves a gap where it would have been.\n- absolute: Removed from normal flow. Positioned relative to its closest positioned ancestor (anything other than static).\n- fixed: Removed from normal flow. Positioned relative to the browser viewport. Doesn't move on scroll.\n- sticky: Toggles between relative and fixed depending on scroll position.",
        code: `.container {
  position: relative; /* Acts as anchor for absolute child */
}
.tooltip {
  position: absolute;
  top: -10px;
  right: 0;
}`
      },
      {
        heading: "Stacking Context and z-index",
        text: "`z-index` controls the Z-axis (front-to-back) ordering. It only works on positioned elements (relative, absolute, fixed, sticky). A child with `z-index: 999` is restricted by its parent's stacking context; it cannot appear above a sibling container if the sibling has a higher z-index than the parent."
      }
    ]
  },
  4: {
    title: "Flexbox",
    sections: [
      {
        heading: "Flex Container vs Flex Items",
        text: "Flexbox is a 1-dimensional layout model (handling rows OR columns). You initialize it by setting `display: flex;` on the parent container. The immediate children automatically become flex items."
      },
      {
        heading: "Main Axis and Cross Axis",
        text: "Flexbox relies on two axes. If `flex-direction: row` (default), the Main Axis is horizontal and Cross Axis is vertical. If `flex-direction: column`, they swap.\n- justify-content: Aligns items along the Main Axis (flex-start, center, space-between).\n- align-items: Aligns items along the Cross Axis (stretch, center, flex-end).",
        code: `.navbar {
  display: flex;
  justify-content: space-between; /* Spreads items left and right */
  align-items: center; /* Vertically centers items */
}`
      },
      {
        heading: "Flex Item Properties (Grow, Shrink, Basis)",
        text: "You can control individual children using the `flex` shorthand property (`flex: grow shrink basis`).\n- flex-grow: How much space an item should take up relative to others.\n- flex-shrink: How it shrinks when space is tight.\n- flex-basis: The initial ideal size before growing/shrinking.",
        code: `.sidebar {
  flex: 0 0 250px; /* Don't grow, don't shrink, stay exactly 250px */
}
.main-content {
  flex: 1; /* Grow to take up all remaining available space */
}`
      }
    ]
  },
  5: {
    title: "CSS Grid",
    sections: [
      {
        heading: "Grid: The 2D Layout System",
        text: "Unlike Flexbox, CSS Grid is designed for 2-dimensional layouts—handling both rows and columns simultaneously. Initialized with `display: grid;`."
      },
      {
        heading: "Defining Tracks and the fr Unit",
        text: "Use `grid-template-columns` and `grid-template-rows` to define track sizes. The `fr` (fractional) unit represents a fraction of the available space in the grid container. `gap` (previously grid-gap) adds spacing between rows and columns without complex margin math.",
        code: `.grid-container {
  display: grid;
  grid-template-columns: 200px 1fr 1fr; /* Sidebar, plus two equal columns */
  grid-template-rows: auto 100px; /* Content determines height, footer is 100px */
  gap: 20px;
}`
      },
      {
        heading: "Responsive Grids without Media Queries",
        text: "The combination of `repeat()`, `auto-fit` (or `auto-fill`), and `minmax()` allows grids to automatically wrap columns as the screen shrinks, achieving responsiveness without a single media query.",
        code: `.auto-grid {
  display: grid;
  /* Create as many columns as will fit, minimum 250px wide, max 1 fraction */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}`
      }
    ]
  },
  6: {
    title: "Responsive Design & Media Queries",
    sections: [
      {
        heading: "The Mobile-First Approach",
        text: "Best practice dictates writing default CSS for mobile screens first, then using `@media` queries to progressively enhance the layout for larger screens via `min-width`. This prevents mobile browsers from downloading complex desktop styles only to override them."
      },
      {
        heading: "Media Query Syntax",
        text: "Media queries check device parameters (width, height, orientation) and apply CSS conditionally. Breakpoints should ideally be based on content breaking points rather than specific device models.",
        code: `/* 1. Mobile First Base Styles */
.card-grid {
  display: flex;
  flex-direction: column;
}

/* 2. Tablet Breakpoint */
@media (min-width: 768px) {
  .card-grid {
    flex-direction: row;
    flex-wrap: wrap;
  }
}

/* 3. Desktop Breakpoint */
@media (min-width: 1024px) {
  .card-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
}`
      }
    ]
  },
  7: {
    title: "Units & Sizing (px, %, rem, vh, vw)",
    sections: [
      {
        heading: "Absolute vs Relative Units",
        text: "Absolute units like `px` (pixels) are fixed and do not scale based on the user's browser settings. Relative units scale based on other factors, making them essential for accessibility and responsive design."
      },
      {
        heading: "em vs rem",
        text: "- em: Relative to the font-size of its direct parent. Dangerous because nested `em` values multiply (compounding effect).\n- rem: Relative ONLY to the Root (`<html>`) font-size (default is usually 16px). 1rem = 16px, 2rem = 32px. `rem` is the gold standard for typography and padding.",
        code: `html { font-size: 100%; /* Respects user's browser settings, usually 16px */ }

h1 {
  font-size: 2rem; /* 32px */
  margin-bottom: 1.5rem; /* 24px */
}`
      },
      {
        heading: "Viewport Units",
        text: "Viewport Width (`vw`) and Viewport Height (`vh`) equal 1% of the browser's viewport. `100vh` ensures an element spans the exact height of the screen, perfect for hero sections."
      }
    ]
  },
  8: {
    title: "Typography",
    sections: [
      {
        heading: "Font Families and Fallbacks",
        text: "The `font-family` property should always include a stack of typefaces, ending with a generic family (sans-serif, serif, monospace) in case custom fonts fail to load. Use `@font-face` to host fonts locally, or link tags to use Google Fonts.",
        code: `body {
  font-family: "Inter", "Helvetica Neue", Arial, sans-serif;
}`
      },
      {
        heading: "Core Typography Properties",
        text: "- font-weight: Controls boldness (100 to 900, normal is 400, bold is 700).\n- line-height: Controls vertical spacing between lines. Always use unitless numbers (e.g., `1.5`) rather than pixels to ensure it scales relative to font-size.\n- letter-spacing: Controls horizontal tracking between characters.\n- text-transform: Changes casing (uppercase, lowercase, capitalize)."
      }
    ]
  },
  9: {
    title: "Colors, Backgrounds & Borders",
    sections: [
      {
        heading: "Color Formats",
        text: "- Hex: `#17b5dc` (Standard, but hard to manipulate).\n- RGB/RGBA: `rgba(23, 181, 220, 0.5)` (Allows alpha transparency).\n- HSL/HSLA: `hsla(192, 81%, 48%, 1)` (Hue, Saturation, Lightness. The easiest format for humans to read and manipulate programmatically)."
      },
      {
        heading: "Background Properties",
        text: "Backgrounds can take solid colors, images, or gradients. `background-size: cover` ensures the image fills the container without distortion (by cropping). `background-position: center` centers the image focus.",
        code: `.hero {
  /* Using a linear gradient overlaid on top of an image */
  background-image: 
    linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
    url('/hero-bg.jpg');
  background-size: cover;
  background-position: center;
}`
      },
      {
        heading: "Borders and Shadows",
        text: "`border-radius` curves the corners of the box. `box-shadow` adds depth. Syntax: `box-shadow: x-offset y-offset blur spread color`.",
        code: `.card {
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); /* Subtle depth */
}`
      }
    ]
  },
  10: {
    title: "Transitions, Transforms & Animations",
    sections: [
      {
        heading: "Transitions",
        text: "Transitions smoothly interpolate property changes on state change (like `:hover`). Syntax requires the property to animate, duration, timing function (easing), and an optional delay.",
        code: `.btn {
  background: blue;
  /* Animate background and transform over 0.3 seconds */
  transition: all 0.3s ease-in-out;
}
.btn:hover {
  background: darkblue;
}`
      },
      {
        heading: "Transforms (Hardware Acceleration)",
        text: "The `transform` property modifies the coordinate space. Functions include `translate()` (move X/Y), `scale()` (grow/shrink), and `rotate()`. Animating `transform` and `opacity` is vastly superior for performance because browsers offload them to the GPU, preventing layout recalculations (jank).",
        code: `.card:hover {
  /* Moves card up 5px and enlarges it slightly without disrupting the layout */
  transform: translateY(-5px) scale(1.02);
}`
      },
      {
        heading: "Keyframe Animations",
        text: "For complex animations that trigger on load or loop automatically, use `@keyframes`. You define the state at specific percentages, then bind the animation to an element using the `animation` property.",
        code: `@keyframes spinPulse {
  0% { transform: rotate(0deg) scale(1); opacity: 0.5; }
  50% { transform: rotate(180deg) scale(1.2); opacity: 1; }
  100% { transform: rotate(360deg) scale(1); opacity: 0.5; }
}

.loader {
  animation: spinPulse 2s infinite linear;
}`
      }
    ]
  }
};
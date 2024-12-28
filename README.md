# Stale Closure Bug in React's useEffect with setInterval
This repository demonstrates a common error in React: using setInterval within useEffect without proper dependency management, leading to stale closures.  The counter in the component doesn't update correctly due to this issue.

The `bug.js` file contains the buggy code. The `bugSolution.js` file provides the corrected implementation.

## How to Reproduce
1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Observe the unexpected behavior of the counter in the browser.

## Solution
The solution involves adding `count` to the dependency array of the useEffect hook. This ensures that the callback function within setInterval receives the latest value of `count`.
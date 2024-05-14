### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
First, callbacks, which allow you to provide functions to call once the asynchronous method has finished running. Second, promises, which allow you to chain methods together. Third, async/await keywords

- What is a Promise?
A promise is an object that may produce a single value some time in the future.

- What are the differences between an async function and a regular function?
Async function is, the latter always returns a promise

- What is the difference between Node.js and Express.js?
NodeJS is an event-driven, non-blocking I/O model using JavaScript as its main language.
Express is a minimal and flexible Node.js web application framework.

- What is the error-first callback pattern?
The error-first pattern consists of executing a function when the asynchronous operation ends which takes as first argument an error, if one occurred, and the result of the request as extra arguments.

- What is middleware?
It is a function that will have all the access for requesting an object, responding to an object, and moving to the next middleware function in the application request-response cycle.

- What does the `next` function do?
Keeping program keep running, not stop after one function runs.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
Naming is meaningless. It could await one time, three await is less performance.
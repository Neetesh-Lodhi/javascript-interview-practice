
console.log('Interview Started');

setTimeout(() => {
  console.log('First Question Asked');
  setTimeout(() => {
    console.log('First Question Answered');
    setTimeout(() => {
      console.log('Second Question Asked');
      setTimeout(() => {
        console.log('Second Question Answered');
        setTimeout(() => {
          console.log('Interview Finished');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

//Theory points for interview explanation

// Call stack: A data structure that stores information about the active subroutines of a computer program.
// Event loop: A construct that allows handling of multiple tasks in a single-threaded environment.
// Web APIs: Provide functionality for web applications to interact with the browser and other web-related objects.
// Job Queue: A data structure that stores tasks to be executed by the event loop.
// Macro task: A task that takes more than one iteration of the event loop to complete.
// Micro task: A task that takes less than one iteration of the event loop to complete.
// Tasks: Such as handling user input, updating the DOM, making network requests, etc.

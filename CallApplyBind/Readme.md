🔹 Why Are They Important in Interviews?
Interviewers want to test:

Do you understand how this works in JavaScript?

Can you change the context of a function?

Do you know when to use each method (call vs apply vs bind)?



🔹 Use Cases
Use Case	Use Which?
Borrowing method from another object	call() or apply()
Converting arguments to array (old way)	apply()
Event handler needs fixed this	bind()
Currying/partial application	bind()
Timer/callback with context	bind()

🔹 Interview Questions to Practice
✅ Difference between call, apply, and bind?

✅ Which one is used for function borrowing?

✅ What does bind() return?

✅ When to use apply() over call()?

✅ How do they relate to this?

🔹 Bonus: Function Borrowing Example

const user1 = {
  name: "Alice",
  getName() {
    return this.name;
  }
};

const user2 = { name: "Bob" };

console.log(user1.getName.call(user2)); // "Bob"
🔹 Summary (Sticky Notes 🗒️)
✅ call() – invoke with custom this and comma-separated args

✅ apply() – same, but args in an array

✅ bind() – returns a new function with bound this, doesn't call immediately

✅ Use these to control this, reuse functions, and delay execution
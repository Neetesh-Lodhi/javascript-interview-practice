🔁 Common Interview Question:
Q: What's the difference between shallow and deep copy?
Q: How do you implement deep copy in JS?
Q: What’s the problem with spread operator for copying nested objects?



🔹 Shallow Copy – Key Points
Copies only top-level properties.

Nested objects/arrays are still referenced (not cloned).

Changes in nested objects affect the original.

Common methods:

Spread operator (...)

Object.assign()

.slice() for arrays

🔹 Deep Copy – Key Points
Copies all levels, including nested structures.

No shared references with the original object.

Changes do not affect the original.

Common methods:

JSON.parse(JSON.stringify(obj)) (simple but limited)

Recursive manual copy

Lodash: _.cloneDeep(obj)

🔸 Shallow Copy is Faster, but Deep Copy is Safer for complex/nested data.
⚠️ JSON method limitations (for Deep Copy)
Cannot copy functions, Date, undefined, Symbol, Map, Set.
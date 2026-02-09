# Memory Management in JavaScript

## What is Memory Management in JavaScript?

JavaScript is a garbage-collected language, which means:

* Memory allocation happens automatically when values are created.
* Garbage Collector (GC) automatically frees up memory that is no longer reachable.

### How does JavaScript detect unreachable objects?

JavaScript uses techniques like Mark-and-Sweep Algorithm to detect unreachable objects and clear them from memory.

## What is a Memory Leak?

A memory leak occurs when your program retains memory that is no longer needed. This can slow down the app, crash it, or lead to performance issues over time.

## Common Causes of Memory Leaks

| Cause | Explanation |
| --- | --- |
| Unused global variables | Accidentally left variables in global scope persist in memory |
| Closures | Inner functions holding references to outer variables unnecessarily |
| Event listeners not removed | Especially on DOM elements that are deleted but still referenced |
| setInterval / setTimeout | Not cleared, keeps callback reference in memory |
| Caching too much data | Storing unbounded data in memory-heavy structures like arrays/objects/maps |

### Example of a Memory Leak
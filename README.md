# TypeScript: Missing Return Type in Function

This repository demonstrates a common but subtle error in TypeScript: the lack of type checking for missing return values in functions.

## The Problem

The `bug.ts` file contains a function that should return a number, but doesn't always. The TypeScript compiler fails to catch this.  This can lead to unexpected runtime behavior, where a function may return `undefined` instead of a number, causing potential errors later in your code.

## The Solution

The `bugSolution.ts` file corrects the issue by ensuring the function always returns a number, even in cases where the calculation might be problematic. In this example, a default value is provided.  In real-world scenarios, error handling (such as throwing an exception or returning null/undefined, with appropriate type handling) may be more appropriate.

## How to Reproduce

1. Clone this repository.
2. Compile the `bug.ts` file using the TypeScript compiler (tsc bug.ts).  Note that the compiler won't produce an error, even though the function can return undefined.
3. Compile and run the `bugSolution.ts` file to see the correct implementation. 

# Why TypeScript

There are two main goals of TypeScript

* Provide an optional type system for JavaScript
* Provide planned features from future JavaScript editions to current JavaScript engines.

## The TypeScript type system

You might be wondering "*Why add types to JavaScript?*"

Types have proven ability to enhance code quality and understandability. Large teams (Google, Microsoft, Facebook) have continually arrived at this conclusion. Specifically:

* Types increase your agility when doing refactoring. __It's better for the compiler to catch errors than to have things fail at run time.__
* Types are one of the best forms of documentation that you can have. __The function signature is a theorem and the function body is the proof.__

## Types can be Implicit

TypeScript will try to infer as much of the type informtaion as it can in order to give you type safety with minimal cost of productivity during code development.

The code below is a variable `foo` implicitly intialized with a type `number`. If the variable changes with a diffrernt type, in this example a `string`, an error will show.

```
var foo = 123;

foo = '456' //Error: cannot assign `string` to `number`

//Is foo a number or string?
```

If you do stuff like shown in this example, then, in the rest of your code you cannot be certain that `foo` is a `number` or a `string`. Such issues turn up in large, multi-file code bases.

## Types can be Explicit

TypeScript will infer as much as it can safely. However, you can use explicit annotations to:

* Help along the compiler, and more importantly document stuff for the next developer who has to read your code.
* Enforce that what the compiler sees, is what you thought it should see.

TypeScript uses postfix type annotations popular in __other optionally__ annotated languages

```
var foo: number = 123;
```

So if you do something wrong the compiler will thrown an error: 

```
var foo: number = '456'; // Error: cannot assign a `string` to a `number`
```

## TypeScript errors do not prevent JavaScript emit

To make it easier for you to migrate your JavaScript code to TypeScript, even if there are compilation errors, by default TypeScript __will emit valid JavaScript__ the best that it can:

```
var foo = 123;
foo = '456'; //Error: cannot assign a `string` to a `number`
```

will emit the following js:

```
var foo = 123;
foo = '456';
```

So you can incrementally upgrade your JavaScript code to TypeScript. This is very different from how many other language compilers work and yet another reason to move to TypeScript.

## Types are Structural 

In some languages static typing results in unnecessary ceremony because even though you know that the code will work fine the language semantics force you to copy stuff around. 

In TypeScript, types are __structural__. This means that __duck typing__ is a first class language construct. Consider the following example:

```
interface Point2D {
    x: number;
    y: number;
}
interface Point3D {
    x: number;
    y: number;
    z: number;
}
var point2D: Point2D = { x: 0, y: 10 }
var point3D: Point3D = { x: 0, y: 10, z: 20 }

function iTakePoint2D(point: Point2D) { /* do something */ }

iTakePoint2D(point2D); // exact match okay
iTakePoint2D(point3D); // extra information okay
iTakePoint2D({ x: 0 }); // Error: missing information `y`
```

The function iTakePoint2D will accept anything that contains all the things (x and y) it expects.

## Types can be ambient

TypeScript makes it possible to use JavaScript libraries safely and easily by means of __declarations__. TypeScript provides you with a sliding scale of how much or how little effort you want to put in your declarations, the more effort you put the more type safety + code intelligence you get.

Definitions for most of the popular JavaScript libraries can be found in the [DefinitelyTyped community](https://github.com/borisyankov/DefinitelyTyped)

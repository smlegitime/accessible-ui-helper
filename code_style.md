TypeScript Style Guide
=============================

This guide is based on the internal Google TypeScript style guide, but it has been adjusted to remove Google-internal sections and other styles and guides that are not relevant to our current project. 

Last Edit: October 22nd, 2024


Introduction
------------

### Terminology notes

This Style Guide uses [RFC 2119](https://tools.ietf.org/html/rfc2119) terminology when using the phrases _must_, _must not_, _should_, _should not_, and _may_. The terms _prefer_ and _avoid_ correspond to _should_ and _should not_, respectively. Imperative and declarative statements are prescriptive and correspond to _must_.


Source file basics
------------------

### File encoding: UTF-8

Source files are encoded in **UTF-8**.

#### Whitespace characters

Aside from the line terminator sequence, the ASCII horizontal space character (0x20) is the only whitespace character that appears anywhere in a source file. This implies that all other whitespace characters in string literals are escaped.

#### Special escape sequences

For any character that has a special escape sequence (`\'`, `\"`, `\\`, `\b`, `\f`, `\n`, `\r`, `\t`, `\v`), that sequence is used rather than the corresponding numeric escape (e.g `\x0a`, `\u000a`, or `\u{a}`). Legacy octal escapes are never used.

#### Non-ASCII characters

For the remaining non-ASCII characters, use the actual Unicode character (e.g. `∞`). For non-printable characters, the equivalent hex or Unicode escapes (e.g. `\u221e`) can be used along with an explanatory comment.

    // Perfectly clear, even without a comment.
    const units = 'μs';
    
    // Use escapes for non-printable characters.
    const output = '\ufeff' + content;  // byte order mark
    

    // Hard to read and prone to mistakes, even with the comment.
    const units = '\u03bcs'; // Greek letter mu, 's'
    
    // The reader has no idea what this is.
    const output = '\ufeff' + content;
    

Source file structure
---------------------

Files consist of the following, **in order**:

1.  Copyright information, if present
2.  JSDoc with `@fileoverview`, if present
3.  Imports, if present
4.  The file’s implementation

**Exactly one blank line** separates each section that is present.

### Copyright information

If license or copyright information is necessary in a file, add it in a JSDoc at the top of the file.

### `@fileoverview` JSDoc

A file may have a top-level `@fileoverview` JSDoc. If present, it may provide a description of the file's content, its uses, or information about its dependencies. Wrapped lines are not indented.

Example:

    /**
     * @fileoverview Description of file. Lorem ipsum dolor sit amet, consectetur
     * adipiscing elit, sed do eiusmod tempor incididunt.
     */
    

### Imports

There are four variants of import statements in ES6 and TypeScript:

Import type

Example

Use for

module\[module\_import\]

`import * as foo from '...';`

TypeScript imports

named\[destructuring\_import\]

`import {SomeThing} from '...';`

TypeScript imports

default

`import SomeThing from '...';`

Only for other external code that requires them

side-effect

`import '...';`

Only to import libraries for their side-effects on load (such as custom elements)

    // Good: choose between two options as appropriate (see below).
    import * as ng from '@angular/core';
    import {Foo} from './foo';
    
    // Only when needed: default imports.
    import Button from 'Button';
    
    // Sometimes needed to import libraries for their side effects:
    import 'jasmine';
    import '@polymer/paper-button';
    

#### Import paths

TypeScript code _must_ use paths to import other TypeScript code. Paths _may_ be relative, i.e. starting with `.` or `..`, or rooted at the base directory, e.g. `root/path/to/file`.

Code _should_ use relative imports (`./foo`) rather than absolute imports `path/to/foo` when referring to files within the same (logical) project as this allows to move the project around without introducing changes in these imports.

Consider limiting the number of parent steps (`../../../`) as those can make module and path structures hard to understand.

    import {Symbol1} from 'path/from/root';
    import {Symbol2} from '../parent/file';
    import {Symbol3} from './sibling';
    

#### Renaming imports

Code _should_ fix name collisions by using a namespace import or renaming the exports themselves. Code _may_ rename imports (`import {SomeThing as SomeOtherThing}`) if needed.

Three examples where renaming can be helpful:

1.  If it's necessary to avoid collisions with other imported symbols.
2.  If the imported symbol name is generated.
3.  If importing symbols whose names are unclear by themselves, renaming can improve code clarity. For example, when using RxJS the `from` function might be more readable when renamed to `observableFrom`.

### Exports

Use named exports in all code:

    // Use named exports:
    export class Foo { ... }
    

Do not use default exports. This ensures that all imports follow a uniform pattern.

    // Do not use default exports:
    export default class Foo { ... } // BAD!
    

Why?

Default exports provide no canonical name, which makes central maintenance difficult with relatively little benefit to code owners, including potentially decreased readability:

    import Foo from './bar';  // Legal.
    import Bar from './bar';  // Also legal.
    

Named exports have the benefit of erroring when import statements try to import something that hasn't been declared. In `foo.ts`:

    const foo = 'blah';
    export default foo;
    

And in `bar.ts`:

    import {fizz} from './foo';
    

Results in `error TS2614: Module '"./foo"' has no exported member 'fizz'.` While `bar.ts`:

    import fizz from './foo';
    

Results in `fizz === foo`, which is probably unexpected and difficult to debug.
    

With the above pattern, we have file scope, which can be used as a namespace. We also have a perhaps needless second scope (the class `Foo`) that can be ambiguously used as both a type and a value in other files.

Instead, prefer use of file scope for namespacing, as well as named exports:

    export const SOME_CONSTANT = ...
    export function someHelpfulFunction()
    export class Foo {
      // only class stuff here
    }
    

#### Export visibility

TypeScript does not support restricting the visibility for exported symbols. Only export symbols that are used outside of the module. Generally minimize the exported API surface of modules.
    

#### Container classes

Do not create container classes with static methods or properties for the sake of namespacing.

    export class Container {
      static FOO = 1;
      static bar() { return 1; }
    }
    

Instead, export individual constants and functions:

    export const FOO = 1;
    export function bar() { return 1; }
    

### Import and export type

#### Import type

You may use `import type {...}` when you use the imported symbol only as a type. Use regular imports for values:

    import type {Foo} from './foo';
    import {Bar} from './foo';
    
    import {type Foo, Bar} from './foo';
    


Note: If you need to force a runtime load for side effects, use `import '...';`. See

#### Export type

Use `export type` when re-exporting a type, e.g.:

    export type {AnInterface} from './foo';
    


    

Language features
-----------------

This section delineates which features may or may not be used, and any additional constraints on their use.

Language features which are not discussed in this style guide _may_ be used with no recommendations of their usage.

### Local variable declarations

#### Use const and let

Always use `const` or `let` to declare variables. Use `const` by default, unless a variable needs to be reassigned. Never use `var`.

    const foo = otherValue;  // Use if "foo" never changes.
    let bar = someValue;     // Use if "bar" is ever assigned into later on.
    

`const` and `let` are block scoped, like variables in most other languages. `var` in JavaScript is function scoped, which can cause difficult to understand bugs. Don't use it.

    var foo = someValue;     // Don't use - var scoping is complex and causes bugs.
    

Variables _must not_ be used before their declaration.

#### One variable per declaration

Every local variable declaration declares only one variable: declarations such as `let a = 1, b = 2;` are not used.


### Classes

#### Class declarations

Class declarations _must not_ be terminated with semicolons:

    class Foo {
    }
    

    class Foo {
    }; // Unnecessary semicolon
    

In contrast, statements that contain class expressions _must_ be terminated with a semicolon:

    export const Baz = class extends Bar {
      method(): number {
        return this.x;
      }
    }; // Semicolon here as this is a statement, not a declaration
    

    exports const Baz = class extends Bar {
      method(): number {
        return this.x;
      }
    }


#### Static methods

##### Avoid private static methods

Where it does not interfere with readability, prefer module-local functions over private static methods.

#### Class members

##### Use readonly

Mark properties that are never reassigned outside of the constructor with the `readonly` modifier (these need not be deeply immutable).
    


#### Visibility

Restricting visibility of properties, methods, and entire types helps with keeping code decoupled.

*   Limit symbol visibility as much as possible.
*   Consider converting private methods to non-exported functions within the same file but outside of any class, and moving private properties into a separate, non-exported class.


### Functions

#### Terminology

There are many different types of functions, with subtle distinctions between them. This guide uses the following terminology, which aligns with [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions):

*   function declaration: a declaration (i.e. not an expression) using the `function` keyword
*   function expression: an expression, typically used in an assignment or passed as a parameter, using the `function` keyword
*   arrow function: an expression using the `=>` syntax
*   block body: right hand side of an arrow function with braces
*   concise body: right hand side of an arrow function without braces

Methods and classes/constructors are not covered in this section.

#### Prefer function declarations for named functions

Prefer function declarations over arrow functions or function expressions when defining named functions.

    function foo() {
      return 42;
    }
    

    const foo = () => 42;
    

Arrow functions _may_ be used, for example, when an explicit type annotation is required.

    interface SearchFunction {
      (source: string, subString: string): boolean;
    }
    
    const fooSearch: SearchFunction = (source, subString) => { ... };


#### Arrow function bodies

Use arrow functions with concise bodies (i.e. expressions) or block bodies as appropriate.

    // Top level functions use function declarations.
    function someFunction() {
      // Block bodies are fine:
      const receipts = books.map((b: Book) => {
        const receipt = payMoney(b.price);
        recordTransaction(receipt);
        return receipt;
      });
    
      // Concise bodies are fine, too, if the return value is used:
      const longThings = myValues.filter(v => v.length > 1000).map(v => String(v));
    
      function payMoney(amount: number) {
        // function declarations are fine, but must not access `this`.
      }
    
      // Nested arrow functions may be assigned to a const.
      const computeTax = (amount: number) => amount * 0.12;
    }
    

#### Prefer passing arrow functions as callbacks

Callbacks can be invoked with unexpected arguments that can pass a type check but still result in logical errors.

Avoid passing a named callback to a higher-order function, unless you are sure of the stability of both functions' call signatures. Beware, in particular, of less-commonly-used optional parameters.

    // BAD: Arguments are not explicitly passed, leading to unintended behavior
    // when the optional `radix` argument gets the array indices 0, 1, and 2.
    const numbers = ['11', '5', '10'].map(parseInt);
    // > [11, NaN, 2];
    

Instead, prefer passing an arrow-function that explicitly forwards parameters to the named callback.

    // GOOD: Arguments are explicitly passed to the callback
    const numbers = ['11', '5', '3'].map((n) => parseInt(n));
    // > [11, 5, 3]
    
    // GOOD: Function is locally defined and is designed to be used as a callback
    function dayFilter(element: string|null|undefined) {
      return element != null && element.endsWith('day');
    }
    
    const days = ['tuesday', undefined, 'juice', 'wednesday'].filter(dayFilter);
        

### Interfaces

### Primitive literals


    

### Control structures

#### Exception handling

Exceptions are an important part of the language and should be used whenever exceptional cases occur.

Custom exceptions provide a great way to convey additional error information from functions. They should be defined and used wherever the native `Error` type is insufficient.

Prefer throwing exceptions over ad-hoc error-handling approaches (such as passing an error container reference type, or returning an object with an error property).

##### Error instantiating

Use `new Error()` or `Error()` when instantiating exceptions:

    throw new Error('Foo is not a valid bar.');
    

    throw Error('Foo is not a valid bar.');
    
##### Empty catch blocks

It is very rarely correct to do nothing in response to a caught exception. When it truly is appropriate to take no action whatsoever in a catch block, the reason this is justified is explained in a comment.

      try {
        return handleNumericResponse(response);
      } catch (e: unknown) {
        // Response is not numeric. Continue to handle as text.
      }
      return handleTextResponse(response);
    

Disallowed:

      try {
        shouldFail();
        fail('expected an error');
      } catch (expected: unknown) {
      }
    

Tip: Unlike in some other languages, patterns like the above simply don’t work since this will catch the error thrown by `fail`. Use `assertThrows()` instead.

#### Switch statements

All `switch` statements _must_ contain a `default` statement group, even if it contains no code. The `default` statement group must be last.

    switch (x) {
      case Y:
        doSomethingElse();
        break;
      default:
        // nothing to do.
    }

#### Equality checks

Always use triple equals (`===`) and not equals (`!==`). The double equality operators cause error prone type coercions that are hard to understand and slower to implement for JavaScript Virtual Machines. See also the [JavaScript equality table](https://dorey.github.io/JavaScript-Equality-Table/).

    if (foo == 'bar' || baz != bam) {
      // Hard to understand behaviour due to type coercion.
    }
    

    if (foo === 'bar' || baz !== bam) {
      // All good here.
    }
    

**Exception:** Comparisons to the literal `null` value _may_ use the `==` and `!=` operators to cover both `null` and `undefined` values.

    if (foo == null) {
      // Will trigger when foo is null or undefined.
    }
    

##### Type assertion syntax

Type assertions _must_ use the `as` syntax (as opposed to the angle brackets syntax). This enforces parentheses around the assertion when accessing a member.

    const x = (<Foo>z).length;
    const y = <Foo>z.length;
    

    // z must be Foo because ...
    const x = (z as Foo).length;
    
    

### Disallowed features


#### Modifying builtin objects

Never modify builtin types, either by adding methods to their constructors or to their prototypes. Avoid depending on libraries that do this.

Do not add symbols to the global object unless absolutely necessary (e.g. required by a third-party API).

Naming
------

### Identifiers

Identifiers _must_ use only ASCII letters, digits, underscores (for constants and structured test method names), and (rarely) the '$' sign.

#### Descriptive names

Names _must_ be descriptive and clear to a new reader. Do not use abbreviations that are ambiguous or unfamiliar to readers outside your project, and do not abbreviate by deleting letters within a word.
    
#### Camel case

Treat abbreviations like acronyms in names as whole words, i.e. use `loadHttpUrl`, not `loadHTTPURL`, unless required by a platform name (e.g. `XMLHttpRequest`).

#### Dollar sign

Identifiers _should not_ generally use `$`, except when required by naming conventions for third party frameworks. [See above](#naming-style) for more on using `$` with `Observable` values.

### Rules by identifier type

Most identifier names should follow the casing in the table below, based on the identifier's type.

Style

Category

`UpperCamelCase`

class / interface / type / enum / decorator / type parameters / component functions in TSX / JSXElement type parameter

`lowerCamelCase`

variable / parameter / function / method / property / module alias

`CONSTANT_CASE`

global constant values, including enum values. See [Constants](#identifiers-constants) below.

#### Type parameters

Type parameters, like in `Array<T>`, _may_ use a single upper case character (`T`) or `UpperCamelCase`.

#### Constants

**Immutable**: `CONSTANT_CASE` indicates that a value is _intended_ to not be changed, and _may_ be used for values that can technically be modified (i.e. values that are not deeply frozen) to indicate to users that they must not be modified.

    const UNIT_SUFFIXES = {
      'milliseconds': 'ms',
      'seconds': 's',
    };
    // Even though per the rules of JavaScript UNIT_SUFFIXES is
    // mutable, the uppercase shows users to not modify it.
    

    

Type system
-----------

### Type inference

Code _may_ rely on type inference as implemented by the TypeScript compiler for all type expressions (variables, fields, return types, etc).

    const x = 15;  // Type inferred.
    

Leave out type annotations for trivially inferred types: variables or parameters initialized to a `string`, `number`, `boolean`, `RegExp` literal or `new` expression.

    const x: boolean = true;  // Bad: 'boolean' here does not aid readability
    

    // Bad: 'Set' is trivially inferred from the initialization
    const x: Set<string> = new Set();
    

Explicitly specifying types may be required to prevent generic type parameters from being inferred as `unknown`. For example, initializing generic types with no values (e.g. empty arrays, objects, `Map`s, or `Set`s).

    const x = new Set<string>();

Whether an annotation is required is decided by the code reviewer.

### `any` Type

TypeScript's `any` type is a super and subtype of all other types, and allows dereferencing all properties. As such, `any` is dangerous - it can mask severe programming errors, and its use undermines the value of having static types in the first place.

**Consider _not_ to use `any`.** In circumstances where you want to use `any`, consider one of:

*   [Provide a more specific type](#any-specific)
*   [Use `unknown`](#any-unknown)
*   [Suppress the lint warning and document why](#any-suppress)

#### Providing a more specific type

Use interfaces , an inline object type, or a type alias:

    // Use declared interfaces to represent server-side JSON.
    declare interface MyUserJson {
      name: string;
      email: string;
    }
    
    // Use type aliases for types that are repetitive to write.
    type MyType = number|string;
    
    // Or use inline object types for complex returns.
    function getTwoThings(): {something: number, other: string} {
      // ...
      return {something, other};
    }
    
    // Use a generic type, where otherwise a library would say `any` to represent
    // they don't care what type the user is operating on (but note "Return type
    // only generics" below).
    function nicestElement<T>(items: T[]): T {
      // Find the nicest element in items.
      // Code can also put constraints on T, e.g. <T extends HTMLElement>.
    }
    


#### Suppressing `any` lint warnings

Sometimes using `any` is legitimate, for example in tests to construct a mock object. In such cases, add a comment that suppresses the lint warning, and document why it is legitimate.

    // This test only needs a partial implementation of BookService, and if
    // we overlooked something the test will fail in an obvious way.
    // This is an intentionally unsafe partial mock
    // tslint:disable-next-line:no-any
    const mockBookService = ({get() { return mockBook; }} as any) as BookService;
    // Shopping cart is not used in this test
    // tslint:disable-next-line:no-any
    const component = new MyComponent(mockBookService, /* unused ShoppingCart */ null as any);


Comments and documentation
--------------------------

#### JSDoc versus comments

There are two types of comments, JSDoc (`/** ... */`) and non-JSDoc ordinary comments (`// ...` or `/* ... */`).

*   Use `/** JSDoc */` comments for documentation, i.e. comments a user of the code should read.
*   Use `// line comments` for implementation comments, i.e. comments that only concern the implementation of the code itself.

JSDoc comments are understood by tools (such as editors and documentation generators), while ordinary comments are only for other humans.

#### Multi-line comments

Multi-line comments are indented at the same level as the surrounding code. They _must_ use multiple single-line comments (`//`\-style), not block comment style (`/* */`).

    // This is
    // fine
    

    /*
     * This should
     * use multiple
     * single-line comments
     */
    
    /* This should use // */

Comments are not enclosed in boxes drawn with asterisks or other characters.

### JSDoc general form

The basic formatting of JSDoc comments is as seen in this example:

    /**
     * Multiple lines of JSDoc text are written here,
     * wrapped normally.
     * @param arg A number to do something to.
     */
    function doSomething(arg: number) { … }
    

or in this single-line example:

    /** This short jsdoc describes the function. */
    function doSomething(arg: number) { … }
    

If a single-line comment overflows into multiple lines, it _must_ use the multi-line style with `/**` and `*/` on their own lines.

### Class comments

JSDoc comments for classes should provide the reader with enough information to know how and when to use the class, as well as any additional considerations necessary to correctly use the class. Textual descriptions may be omitted on the constructor.

### Method and function comments

Method, parameter, and return descriptions may be omitted if they are obvious from the rest of the method’s JSDoc or from the method name and type signature.

Method descriptions begin with a verb phrase that describes what the method does. This phrase is not an imperative sentence, but instead is written in the third person, as if there is an implied This method ... before it.
           

Policies
--------
### Deprecation

Mark deprecated methods, classes or interfaces with an `@deprecated` JSDoc annotation. A deprecation comment must include simple, clear directions for people to fix their call sites.


* * *

1.  Namespace imports are often called 'module imports' [↩](#fnref1)
    
2.  named imports are sometimes called 'destructuring imports' because they use similar syntax to destructuring assignments. [↩](#fnref2)

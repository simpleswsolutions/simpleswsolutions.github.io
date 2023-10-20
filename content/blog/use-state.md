---
title: "Demystifying the useState hook"
date: 2023-10-17T17:57:25-04:00
draft: true
---

The **useState** hook is perhaps the most widely used 
hook in React and React Native applications.  
This hook essentially adds state to a functional component. 
But, what does that mean?  Let's delve a bit deeper...

In a class component we can define _instance variables_ 
which store values that can be accessed
and modified by all methods for the lifetime of 
an instance of that class

For example:

```javascript

    // Class definition
    class MyClass {
        instanceVar = 1;

        method1() {
            instanceVar = 42;
        }

        method2() {
            console.log(`instanceVar: ${instanceVar}`);
        }
    }

    ...

    // Class use
    let myObject = new MyClass();

    myObject.method2(); // Outputs 'instanceVar: 1' to the console
    myObject.method1(); // Sets instanceVar to 42
    myObject.method2(); // Outputs 'instanceVar: 42' to the console
 
```

The variables defined inside of a JavaScript function are destroyed 
once the function terminates and exits.  As you probably know, a React 
functional component is just a simple JavaScript function, therefore any
variables declared inside the function are destroyed when the function exists.
Recall that a functional component's function is called many times, on every
single render cycle.

for example:

```javascript

    // Functional component definition
    function MyFunctionalComponent({text}) {
        let uppercased = text?.toUpperCase();
        return (
            <div>
                {uppercased}
            </div>
        );
    }

    // Functional component use
    <MyFunctionalComponent text="hello world" />
    // Renders HELLO WORLD
 
```
In the above somewhat-contrived example, function variable **uppercased** is assigned a value, 
then used to render a React Element, and immediately destroyed when the 
function returns.

But what if you need a variable to retain its value between invocations of the function?

##### That's when the **useState** hook comes in!







---
title: "React Native Interview: Ask this second!"
date: 2023-10-20T06:23:02-04:00
draft: false
---

In this earlier blog entry, "[React Native Interview: Ask this first!](/blog/react-native-interview)", 
we talked about a couple of very simple and direct questions to ask of your candidate 
that tend to reveal his/her depth of practical experience with React Native.  The same logic 
would apply to React JS, but we happen to be fixated and slightly obsessed with RN... ;)

Another very direct and simple question to ask of your candidate and which could reveal his/her
depth of knowledge is the following:

> **What exactly is the nature of the value returned by the render method of a React component class?**

Or, when applicable to functional components:

> **What exactly is the nature of the value returned by the execution of a functional component?**

I have been given all sorts of incorrect answers over the years, even from experienced developers 
who were not curious enough to place a call to ```console.log``` in their code or read Facebook's 
documentation in details.

Some will say: "_It returns a text string_"

Others will say: "_It returns JSX_"

And yet others will say : "_It returns an object_," but when pressed further they can't describe 
the object's structure, or even name it.

The correct answer is: "**IT RETURNS A REACT ELEMENT**"

## What is a React Element?

A **_React Element_** is the structural unit of the **_Virtual DOM_**.

In other words, the **_Virtual DOM_** is a nested structure of **_React Element_**'s that mirrors 
the actual **_Document Object Model_**, or **_DOM_**.

And Yes, even in React Native there is a **_DOM_**.

## What does a React Element look like?

Let's dissect a **_React Element_** by way of a very simple example of a functional
component that specifies a very simple **_JSX_** hierarchy:

```jsx

    function MyComponent() {
        return (
            <View>
                <Text>Hello World</Text>
            </View>
        );
    }
  
```
The simplified version of the **_React Element_** object returned by the
above functional component looks more or less like this:

```Javascript

    {
        props: {
            type: {
                displayName: 'View'
            },
            ref: null,
            key: null,
            children: {
                type: {
                    displayName: 'Text'
                }
                ref: null,
                key: null,
                children: 'Hello World',
                defaultProps: {
                    style: {
                        fontFamily: 'RobotoCondensed_400Regular'
                    }
                }
            },
        }
    }
 
```
You will be surprised to find how many developers, even experienced ones,
botch this question because they do not know this information.

While not knowing this information does not make you a bad programmer, having 
this level of awareness makes you understand better the implication of taking 
one approach or another when you lay out your JSX tags.

Those who answer the question correctly tend to show a level of professional
curiosity and attention to detail that may set them apart from others.

Keep this in mind the next time you interview a candidate for your projects.



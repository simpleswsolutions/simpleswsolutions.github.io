---
title: "React Native Interview: Ask this first!"
date: 2023-10-20T06:23:02-04:00
draft: false
---

<div style="margin: 10%;">

#### React Native Interview: Ask this first!
###### By Carlos Portela, Oct 20th, 2023

Determining a candidate's depth of knowledge can be a tricky endeavor.

Potential candidates have all sorts of resources available to them, and many of them
just a few clicks away.  They can research and memorize lists of _interview questions_ and _answers_,
watch YouTube videos that prepare them for the interview and follow all sorts of 
other approaches, some more gimmicky than others.

A candidate that provides reasonable answers to most, if not all, of your questions
may be a good candidate, 
even if he/she has little practical experience.

The fact is this candidate, by offering appropriate answers, was able to 
demonstrate mastery of the subject, to varying degrees of depth, and that in 
itself is a positive thing as it makes this candidate _trainable_, or 
at least very close to what you were looking for.

But oftentimes answering correctly your questions doesn't necessarily
reveal the candidate's depth of knowledge or practical experience with React Native.  
I say React Native because it is the focus of this article, but the same
applies to many other technology stacks.

In recent years I have adopted a strategy where I initially avoid the usual 
"What's a closure?" and "What's a React hook?" questions in favor of a more
pragmatic approach that paints an immediate picture of the candidate's standing;
I then proceed to ask "What's a closure?", etc., armed with a clear understanding 
of the candidate's practical knowledge.

I start the interview with a simple question:
**How do you create a new React Native application from scratch?**.
There are many valid answers to this question: 
**create-react-native-app**, **create-expo-app**, **react-native init**, 
hand-wire the folder structure, etc., etc., 
but the fluidity of the answer reveals a lot about the candidate's depth of 
practical knowledge.  In many projects the developer arrives after 
the application was created, but any hesitation in this area represents a red
flag because we have all created our own little **_TODO list_** type 
of apps at some point.

While flunking the above question is not necessarily a disqualifier, I proceed to ask 
**How do you set a breakpoint in a React Native app?**, and this is where
sometimes deeper problems are revealed.
As simple a question as that is, you would be surprised to learn how many people
struggle to respond correctly, or even get close to an appropriate answer.  This
is a major red flag unless I am looking for a trainable rookie, and in that case 
I move on to "What's a closure?" and so on.

If practical knowledge is an absolute requirement, and I am not sure about the 
candidate's level of practical knowledge, I start with the following simple request. 
Mind you, I would not ask this question to the creator of Yelp's mobile app; I would 
go in a totally different, more philosophical direction with him/her.

> Create a simple React Native app that shows a single button labeled "Tap me".  
> On the button's tap handler, add code that displays an alert that shows the 
> structure of the native event.  
> Place a breakpoint at the point right before the alert is shown.  
> Run the app on the simulator and be sure it stops on your breakpoint.

Ideally, the candidate is sharing his/her screen, but otherwise a detailed 
step-by-step description would suffice.

Too simple! you might say

But you will be surprised to find out how many candidates can't
even start, some start but can't get very far, and yet others come up with
the most creative ways of trying to mask their lack of practical experience
which in itself is a talent ;)

I am looking for a prompt approach to the creation of the app, promptly
locating ```App.js```, adding the button, inserting the call to ```alert```.  I
even pay attention to the use (or lack) of ```JSON.stringify``` to
properly format and display the native event.

Lastly I focus on their ability and skills to fire up the simulator/emulator,
run the app in debug mode, place the breakpoint before the ```alert``` call, and 
ultimately, break right before it.

Any hesitation on any of the steps above is cause for concern, but sometimes
you have to do with what you have and a little hand-holding during the interview,
and even after hiring, may be necessary.

It is not about humiliating the candidate, demeaning him/her, or even making 
yourself look wise and intelligent, it's all about efficiently determining 
the candidate's fitness for the project.

</div>



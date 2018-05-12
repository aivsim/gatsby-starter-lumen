---
title: Weekly development [2] 
date: "2018-05-12T11:34:00.000Z"
layout: post
draft: false
path: "/posts/weekly-development-2/"
category: "weekly development"
tags:
  - "weekly development"
  - "freelance"
  - "remote work"
  - "books"
  - "clean code"
  - ".net"
  - "visual studio code"
  - "testing"
  - "architecture"
  - "interview"
  - "docker"
  - "designmpostors syndrome"
  - "knowledge"
  - "ux"
  - ".net"
  - "psychology"
description: "I took more time and delved a bit deeper into cryptocurrencies - researched more about "RavenCoin". Solved a network location problem with FileSystemWatcher. Found one of the most interesting reads of the weeks from the "moretothat" blog about knowledge. Catch up with Silicon Valley TV series."

---
I took more time and delved a bit deeper into cryptocurrencies - researched more about "RavenCoin". Solved a network location problem with FileSystemWatcher. Found one of the most interesting reads of the weeks from the "moretothat" blog about knowledge. Catch up with Silicon Valley TV series.
---

### Work
* Web: Update users list filter clause;
* Cash register: Error message even price is correctly inserted;
* Cash register: Add additional polyfills for IE browser;
* Varis: Update varis-ui to 0.2.15;
* Cash register:  Catalog products don't have their codes showing near them;  
* Reports: Update models and sagas based on typescript 2.8.1;
* File sharing: Update fileSharing response logic, add log on fail;
* File sharing: Update Post request to request type string and response type string;
* File sharing: Update SendUnsentFiles to include file extension;  
* Reports: Add archive list;
* File sharing: Include demo ts file for build and error logging on file watcher start;
* File sharing: Add watcher.onError, update appropriate filters for network location, refactor unnecessary code;
* File sharing: Add temp file creation, additional logging and watcher.OnRenamed;
* Reports: Refactor administration codebase to en naming;
* Reports: setup development environment for Gytis;
* Web: nedarbingumas coaching for Paulius;
* Reports: Include user table script modification for authentication;  
* Web: Add logUserLoginSession and logUserPersonInteraction classes;
* Web: Discussion about new logging implementations;
* Web: Create Logs-Main context, add LogUserLoginSession and LogUserPersonInteraction models to specified contexts;
* Web: Create userLoginSession and userPersonInteraction API methods without inner logic;

##### What I learned:
1. The biggest challenge of the week was to make FileSystemWatcher service work with folders and files over the network. It had it's own specific requirements which works differently then with local directories; I will write about that in a separate blog post;
2. Added additional error handling and logging to file sharing service, from which we learned what service was missing and what service usages were not covered by our code;
3. Practised to create additional db contexts for logging, separate from the main application db context;
4. Again it was proven that documentation saves time and energy - we needed to setup development environment for one my colleagues to work on the projects which I am reworking. Instead of one day of work when I had to setup it for myself without documentation, now it was just a bit more than an hour; 
5. Coached colleague about Azure Blob Storage implementation, accessibility features, our own image service features, proper opportunities to implement CRM task board label functionality, react, redux listing component usage, etc. - more management and soft skills improvements;

### Books
[Clean Code: A Handbook of Agile Software Craftsmanship by Robert C. Martin](https://www.goodreads.com/book/show/3735293-clean-code) - Started to read chapter about Data structures and objects.

### Read articles
* https://scotch.io/bar-talk/write-less-code-by-creating-snippets-in-visual-studio-code - Learned to create "Visual Studio Code" code snippets and bind them to specific keyboard shortcuts which will help to increase my productivity by entering repeating code patterns more quickly;
* https://moretothat.com/framework-for-knowledge/ - four stages of knowledge: 1) Increase the quality of your awareness to find the best seeds. 2) Cultivate curiosity to sprout and strengthen your roots. 3) Dilligently mine information and build skill sets to grow your tree. 4) Produce and distribute seeds of your own to constantly iterate on what you think you know;
* http://interactions.acm.org/archive/view/may-june-2018/is-there-a-fix-for-impostor-syndrome - there a several types of impostor syndrome. Solutions: treat yourself well, create supportive group, manage work relationships, understand natural cycles of knowledge and culture;
* https://dev.to/iriskatastic/the-role-skills-and-duties-of-a-software-architect-413 - refreshed insights on what a software architect should accomplish;
* https://blogs.msdn.microsoft.com/dotnet/2018/05/07/net-core-3-and-support-for-windows-desktop-applications/ - learned about new upcoming features of .NET Core 3;
* https://dev.to/sam_ferree/why-i-think-cost-of-living-pay-for-remote-workers-is-bs-5b68?returning-user=true - gained some thoughts about remote work "Cost of Living" pay. Companies which negotiate salaries based on living locations is dead wrong and not striving for equality at all, just trying to pay the minimum they can get away with to get the skills they need;
* https://dev.to/oninross/the-art-of-minimalism-with-ux-4ppd - minimalism in UX design is one of the most preferable choices which evaluates many of the main UX laws. Familiarized with them.
* https://lawsofux.com/ - UX laws;
* http://cliffc.org/blog/wp-content/uploads/2018/05/AWarOfWords.pdf - a slideshow presentation, showing how to avoid abuse. It talks more deeply about emotional processing and verbal communication, salary negotiations.
* https://dev.to/gabeguz/good-practices---code-review-comments-455 - learned how to create code review comments document, which can help to define teams coding standards and style. Here is an example: https://github.com
* https://medium.com/swlh/why-ill-never-f-freelance-ever-again-4325889492df - the downside of freelancing. Constantly searching for clients. Lesson? Find a long-term remote job wih great company. It talks more about writing, so it is not very aplicable for developers.
* https://medium.com/thrive-global/this-fun-15-30-minute-strategy-will-make-your-brain-healthier-and-learn-faster-4a67e82dd81 - learned about different learning methods, how arey fun in their own way and how you should learn different things, not only tied to your profession as developer;
* https://medium.com/darius-foroux/how-i-work-hard-without-burning-out-4049f56c8d92 - love what you do, don't overestimate yourself, ask for help, don't feel guilty, you can't have it all, exercise, chill;
 
### Videos
* Silicon valley S05E01-E07 - watched mainly for fun and interesting references to the real world themes;
* https://www.twitch.tv/csharpfritz/videos/all - watched a bit of live coding sessions, which used AZURE vision API;
* https://www.youtube.com/watch?v=0277AINk5xk&t=0s&list=PLWKjhJtqVAbmSg8HtUEs0SJ-mzBIN3nEm&index=5 - A day at Amazon with developer;
* https://www.youtube.com/watch?v=FXfYSn8qaUE&t=0s&index=4&list=PLWKjhJtqVAbmSg8HtUEs0SJ-mzBIN3nEm - A day at IBM;

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTgwNjQ3MTY5NSw5MTI3MjkwMzUsMjAzNj
U5OTM4MywtMzAxMjAwMjkxLC0zMTUyNzUzMDQsMTEwNDE1NzA3
Ml19
-->
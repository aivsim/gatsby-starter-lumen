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
  - "design"
description: "This week was a bit shorter work-wise because of the one holiday day on Thursday. Therefore I managed to read a whole book about system architecture. On Monday I was working from home and I was amazed how much work I managed to get done. It was easier to get into the flow without any distractions. Also, I made a bit of progress on Clean Code book - a realy interesting read, confirming my own opinions about the clean code principles. And on top of that, here and there managed to cram in a few articles."
---

This week was a bit shorter work-wise because of the one holiday day on Thursday. Therefore I managed to read a whole book about system architecture. On Monday I was working from home and I was amazed how much work I managed to get done. It was easier to get into the flow without any distractions. Also, I made a bit of progress on Clean Code book - a realy interesting read, confirming my own opinions about the clean code principles. And on top of that, here and there managed to cram in a few articles.

### Work 
* Add BIR.Api project, refactor BIR.Web;
* Add signalR implementation;
* BIReports web project refactor and basic view implementation;
* Add Navbar, system info, home page;
* Update Typescript version, refactor models;
* BIReports: Update login page welcome page structure;
* BIReports: Add Naudotojai list;
* VARIS: fix errors with error tab message viewing;
* BIReports: Add Naudotojai edit;
* BIReports: Add Grupes list;
* BIReports: Add Grupes edit;

1. Practised making some of the learned new architecture decisions rewriting legacy ASP.NET 4.x projects to .NET Core 2.x. 
2. Kept the old and the new system working along side at the same time, next to each other without interupting each other using proxy configurations. 
3. Setup a working solution for the new web implementation and api calls project, gained more practise starting and implementing new projects.
4. Digged much deeper into .net core project configuration side of things in Startup.cs, gained more needed insights how system is configured and working uder the hood. 
5. Rewritten administration module with user and group handling logic using react, redux, redux sagas, typescript, bootstrap, ASP.NET Core technologies stack - already witnessed big performance improvement comparing with the old system.
6. Coached colleagues on various topics about project structure, client side technologies, system configurations, settings, REST Api, CRUD operations, react components, using redux saga and creating actions - helped them to achieve their tasks quicker and with a good reason why we are doing it in the needed way;

### Books

[Clean Code: A Handbook of Agile Software Craftsmanship by Robert C. Martin](https://www.goodreads.com/book/show/3735293-clean-code) - Read from 48 to 104 page. Completed chapters about Comments and Formatting;

Read [Architecting Modern Web Applications with ASP.NET Core and Azure](https://www.goodreads.com/book/show/35699060-architecting-modern-web-applications-with-asp-net-core-and-azure) by Steve Smith.
"...with proper design, the features come cheaply. This approach is arduous, but continues to succeed." - Dennis Ritchie
Topics:
* Introduction
* Characteristics of Modern Web Applications
* Choosing Between Traditional Web Apps and SPAs
* Architectural Principles
* Common Web Application Architectures
* Common Client Side Technologies
* Developing ASP.NET Core MVC Apps
* Working with Data in ASP.NET Core Apps
* Testing ASP.NET Core MVC Apps
* Development Process for Azure-Hosted ASP.NET Core Apps
* Azure Hosting Recommendations for ASP.NET Core Web Apps

![Architecting Modern Web Applications with ASP.NET Core and Azure](architecting-modern-web-applications-with-asp-net-core.jpg)

### Programming
* https://github.com/dotnet-architecture/eShopOnWeb - example project for the architecture book; 
* https://mastery.games/p/flexbox-zombies - Flexbox tutorial (first 3 chapters: flex-direction, justify-content, align-items); 

### Read articles
* https://dev.to/spboyer/getting-started-with-net-core-2bf9
* https://dev.to/drminnaar/docker-guide---part-1--57c8
* https://medium.com/the-mission/14-days-to-transform-your-life-growth-hack-your-way-to-the-life-youve-always-wanted-681253e97ed7
* https://dev.to/theobendixson/why-i-only-work-remotely-156d
* https://medium.com/svilenk/the-1-000-floor-elevator-why-most-designers-fail-googles-infamous-interview-design-challenge-a5ff9ad91741
* https://dev.to/fernandosmonter_80/thinking-your-profession-is-about-work-2nkn
* https://dev.to/lhuria94/keeping-it-clean-coding-standards-that-matter--4e5p
* https://dev.to/acro5piano/5-reasons-why-git-based-resume-is-awesome-127
* https://dev.to/kttravers/how-to-work-with-developers---a-guide-for-non-developers-35hk
* https://dev.to/renascent479/technical-interview-teardown-5b1c
* https://medium.com/the-mission/14-days-to-transform-your-life-growth-hack-your-way-to-the-life-youve-always-wanted-681253e97ed7
* https://dev.to/agazaboklicka/how-to-write-a-solid-dev-resume-to-be-2018-star-3h8a
* https://dev.to/joshuaswift/coding-warmups--44oc
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTMxNTI3NTMwNCwxMTA0MTU3MDcyXX0=
-->
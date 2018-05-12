---


---

<hr>
<p>title: Weekly development [2]<br>
date: "2018-05-12T11:34:00.000Z"<br>
layout: post<br>
draft: false<br>
path: "/posts/weekly-development-2/"<br>
category: "weekly development"<br>
tags:</p>
<ul>
<li>“weekly development”</li>
<li>“freelance”</li>
<li>“remote work”</li>
<li>“books”</li>
<li>“clean code”</li>
<li>“.net”</li>
<li>“visual studio code”</li>
<li>“testing”</li>
<li>“architecture”</li>
<li>“interview”</li>
<li>“docker”</li>
<li>“designmpostors syndrome”</li>
<li>“knowledge”</li>
<li>“ux”</li>
<li>“.net”</li>
<li>“psychology”</li>
<li>"services"<br>
description: “”</li>
</ul>
<hr>
<h2 id="this-week-was-a-bit-shorter-work-wise-because-of-the-one-holiday-day-on-thursday.-therefore-i-managed-to-read-a-whole-book-about-system-architecture.-on-monday-i-was-working-from-home-and-i-was-amazed-how-much-work-i-managed-to-get-done.-it-was-easier-to-get-into-the-flow-without-any-distractions.-also-i-made-a-bit-of-progress-on-clean-code-book---a-realy-interesting-read-confirming-my-own-opinions-about-the-clean-code-principles.-and-on-top-of-that-here-and-there-managed-to-cram-in-a-few-articles.">This week was a bit shorter work-wise because of the one holiday day on Thursday. Therefore I managed to read a whole book about system architecture. On Monday I was working from home and I was amazed how much work I managed to get done. It was easier to get into the flow without any distractions. Also, I made a bit of progress on Clean Code book - a realy interesting read, confirming my own opinions about the clean code principles. And on top of that, here and there managed to cram in a few articles."</h2>
<h3 id="read-articles">Read articles</h3>
<ul>
<li><a href="https://scotch.io/bar-talk/write-less-code-by-creating-snippets-in-visual-studio-code">https://scotch.io/bar-talk/write-less-code-by-creating-snippets-in-visual-studio-code</a> - Learned to create “Visual Studio Code” code snippets and bind them to specific keyboard shortcuts which will help to increase my productivity by entering repeating code patterns more quicklyI took more time and delved a bit deeper into cryptocurrencies - researched more about “RavenCoin”. Solved a network location problem with FileSystemWatcher. Found one of the most interesting reads of the weeks from the “moretothat” blog about knowledge. Catch up with Silicon Valley TV series.</li>
</ul>
<h3 id="work">Work</h3>
<ul>
<li>Web: Update asmens list filter clause;</li>
<li>Cash register: Error message even price is correctly inserted;</li>
<li>Cash register: Add additional polyfills for IE browser;</li>
<li>Varis: Update varis-ui to 0.2.15;</li>
<li>Cash register:  Catalog products don’t have their codes showing near them;</li>
<li>Reports: Update models and sagas based on typescript 2.8.1;</li>
<li>File sharing: Update fileSharing response logic, add log on fail;</li>
<li>File sharing: Update Post request to request type string and response type string;</li>
<li>File sharing: Update SendUnsentFiles to include file extension;</li>
<li>Reports: Add archive list;</li>
<li>File sharing: Include demo ts file for build and error logging on file watcher start;</li>
<li>File sharing: Add watcher.onError, update appropriate filters for network location, refactor unnecessary code;</li>
<li>File sharing: Add temp file creation, additional logging and watcher.OnRenamed;</li>
<li>Reports: Refactor administration codebase to en naming;</li>
<li>Reports: setup development environment for Gytis;</li>
<li>Web: nedarbingumas coaching for Paulius;</li>
<li>Reports: Include user table script modification for authentication;</li>
<li>Web: Add logUserLoginSession and logUserPersonInteraction classes;</li>
<li>Web: Discussion about new logging implementations;</li>
<li>Web: Create Logs-Main context, add LogUserLoginSession and LogUserPersonInteraction models to specified contexts;</li>
<li>Web: Create userLoginSession and userPersonInteraction API methods without inner logic;</li>
</ul>
<h5 id="what-i-learned">What I learned:</h5>
<ol>
<li>The biggest challenge of the week was to make FileSystemWatcher service work with folders and files over the network. It had it’s own specific requirements which works differently then with local directories; I will write about that in a separate blog post;</li>
<li>Added additional error handling and logging to file sharing service, from which we learned what service was missing and what service usages were not covered by our code;</li>
<li>Practised to create additional db contexts for logging, separate from the main application db context;</li>
<li>Again it was proven that documentation saves time and energy - we needed to setup development environment for one my colleagues to work on the projects which I am reworking. Instead of one day of work when I had to setup it for myself without documentation, now it was just a bit more than an hour;</li>
<li>Coached colleague about Azure Blob Storage implementation, accessibility features, our own image service features, proper opportunities to implement CRM task board label functionality, react, redux listing component usage, etc. - more management and soft skills improvements;</li>
</ol>
<h3 id="books">Books</h3>
<p><a href="https://www.goodreads.com/book/show/3735293-clean-code">Clean Code: A Handbook of Agile Software Craftsmanship by Robert C. Martin</a> - Started to read chapter about Data structures and objects.</p>
<h3 id="read-articles-1">Read articles</h3>
<ul>
<li><a href="https://scotch.io/bar-talk/write-less-code-by-creating-snippets-in-visual-studio-code">https://scotch.io/bar-talk/write-less-code-by-creating-snippets-in-visual-studio-code</a> - Learned to create “Visual Studio Code” code snippets and bind them to specific keyboard shortcuts which will help to increase my productivity by entering repeating code patterns more quickly;</li>
<li><a href="https://moretothat.com/framework-for-knowledge/">https://moretothat.com/framework-for-knowledge/</a> - four stages of knowledge: 1) Increase the quality of your awareness to find the best seeds. 2) Cultivate curiosity to sprout and strengthen your roots. 3) Dilligently mine information and build skill sets to grow your tree. 4) Produce and distribute seeds of your own to constantly iterate on what you think you know;</li>
<li><a href="http://interactions.acm.org/archive/view/may-june-2018/is-there-a-fix-for-impostor-syndrome">http://interactions.acm.org/archive/view/may-june-2018/is-there-a-fix-for-impostor-syndrome</a> - there a several types of impostor syndrome. Solutions: treat yourself well, create supportive group, manage work relationships, understand natural cycles of knowledge and culture;</li>
<li><a href="https://dev.to/iriskatastic/the-role-skills-and-duties-of-a-software-architect-413">https://dev.to/iriskatastic/the-role-skills-and-duties-of-a-software-architect-413</a> - refreshed insights on what a software architect should accomplish;</li>
<li><a href="https://blogs.msdn.microsoft.com/dotnet/2018/05/07/net-core-3-and-support-for-windows-desktop-applications/">https://blogs.msdn.microsoft.com/dotnet/2018/05/07/net-core-3-and-support-for-windows-desktop-applications/</a> - learned about new upcoming features of .NET Core 3;</li>
<li><a href="https://dev.to/sam_ferree/why-i-think-cost-of-living-pay-for-remote-workers-is-bs-5b68?returning-user=true">https://dev.to/sam_ferree/why-i-think-cost-of-living-pay-for-remote-workers-is-bs-5b68?returning-user=true</a> - gained some thoughts about remote work “Cost of Living” pay. Companies which negotiate salaries based on living locations is dead wrong and not striving for equality at all, just trying to pay the minimum they can get away with to get the skills they need;</li>
<li><a href="https://dev.to/oninross/the-art-of-minimalism-with-ux-4ppd">https://dev.to/oninross/the-art-of-minimalism-with-ux-4ppd</a> - minimalism in UX design is one of the most preferable choices which evaluates many of the main UX laws. Familiarized with them.</li>
<li><a href="https://lawsofux.com/">https://lawsofux.com/</a> - UX laws;</li>
<li><a href="http://cliffc.org/blog/wp-content/uploads/2018/05/AWarOfWords.pdf">http://cliffc.org/blog/wp-content/uploads/2018/05/AWarOfWords.pdf</a> - a slideshow presentation, showing how to avoid abuse. It talks more deeply about emotional processing and verbal communication, salary negotiations.</li>
<li><a href="https://dev.to/gabeguz/good-practices---code-review-comments-455">https://dev.to/gabeguz/good-practices---code-review-comments-455</a> - learned how to create code review comments document, which can help to define teams coding standards and style. Here is an example: <a href="https://github.com/golang/go/wiki/CodeReviewComments;">https://github.com/golang/go/wiki/CodeReviewComments;</a></li>
<li><a href="https://medium.com/swlh/why-ill-never-f-freelance-ever-again-4325889492df">https://medium.com/swlh/why-ill-never-f-freelance-ever-again-4325889492df</a> - the downside of freelancing. Constantly searching for clients. Lesson? Find a long-term remote job wih great company. It talks more about writing, so it is not very aplicable for developers.</li>
<li><a href="https://medium.com/thrive-global/this-fun-15-30-minute-strategy-will-make-your-brain-healthier-and-learn-faster-4a67e82dd81">https://medium.com/thrive-global/this-fun-15-30-minute-strategy-will-make-your-brain-healthier-and-learn-faster-4a67e82dd81</a> - learned about different learning methods, how arey fun in their own way and how you should learn different things, not only tied to your profession as developer;</li>
<li><a href="https://medium.com/darius-foroux/how-i-work-hard-without-burning-out-4049f56c8d92">https://medium.com/darius-foroux/how-i-work-hard-without-burning-out-4049f56c8d92</a> - love what you do, don’t overestimate yourself, ask for help, don’t feel guilty, you can’t have it all, exercise, chill;</li>
</ul>
<h3 id="videos">Videos</h3>
<ul>
<li>Silicon valley S05E01-E07 - watched mainly for fun and interesting references to the real world themes;</li>
<li><a href="https://www.twitch.tv/csharpfritz/videos/all">https://www.twitch.tv/csharpfritz/videos/all</a> - watched a bit of live coding sessions, which used AZURE vision API;</li>
<li><a href="https://www.youtube.com/watch?v=0277AINk5xk&amp;t=0s&amp;list=PLWKjhJtqVAbmSg8HtUEs0SJ-mzBIN3nEm&amp;index=5">https://www.youtube.com/watch?v=0277AINk5xk&amp;t=0s&amp;list=PLWKjhJtqVAbmSg8HtUEs0SJ-mzBIN3nEm&amp;index=5</a> - A day at Amazon with developer;</li>
<li><a href="https://www.youtube.com/watch?v=FXfYSn8qaUE&amp;t=0s&amp;index=4&amp;list=PLWKjhJtqVAbmSg8HtUEs0SJ-mzBIN3nEm">https://www.youtube.com/watch?v=FXfYSn8qaUE&amp;t=0s&amp;index=4&amp;list=PLWKjhJtqVAbmSg8HtUEs0SJ-mzBIN3nEm</a> - A day at IBM;</li>
</ul>


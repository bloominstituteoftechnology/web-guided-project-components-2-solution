# Lesson Plan

## 1- Preliminaries

* Walk the class through the clone, install and start process of the GP repo.
* ES6 Imports and NPM installation of Axios depend on NPM working correctly.
* Students with a broken Node/NPM who can't `npm start` will need to move all data to `index.js`.
* These students will also have to install Axios using the CDN.

## 2- Instructor's Checklist of Things to Cover

* Studying an endpoint with a command-line client.
* Studying an endpoint with Postman/Insomnia.
* Studying an endpoint with Chrome and the Network Tab.
* The HTTP request, response, and the response body.
* The native fetch (optional).
* Review of components.
* Importing modules installed in the node_modules folder.
* Importing other modules: top-level in the script, unconditionally.
* Installing Axios with a CDN and a script tag in the HTML.
* Installing Axios with NPM.
* Using Axios to GET data from an endpoint.
* Using template literals to add parameters to a URL.
* Async code: promises vs callbacks (callback hell and problems handling errors).
* Scheduling success and failure handlers with .then and .catch.
* Checking the .then and the .catch with log statements and breakpoints.
* The importance of inspecting the data put together by Axios.
* The importance of good variable/parameter names.

## 3- Demo Part I (Kicking the Tires of Endpoints)

* Demo `👉 TASK 1` inside `index.js` following the instructions in the comments.
* This serves the purpose of making students understand the importance of studying an enpdoint before writing code.
* HTTPie can be used online (but it's advisable that students install it).

## 4- Demo Part II (Fetching Dog JSON Data and Creating Dog Cards)

* Use `designs/design.png` to show students what they're building.
* Starting at `👉 TASK 2` inside `index.js` follow the instructions in the comments.
* Play with console logs so students understand the order of events in the code.
* Make sure to demo debugging of the work in progress, using log statements or breakpoints.
* Make bugs on purpose and have students guide you through the debugging process.
* Demo the VSCode shortcuts and tricks you like that help you work more effectively.

## 5- Links of Interest

* [HTTPie](https://httpie.org/run)
* [Axios](https://axios-http.com/docs/intro)
* [Postman](https://www.postman.com/downloads/)
* [Promises](http://jamesknelson.com/grokking-es6-promises-the-four-functions-you-need-to-avoid-callback-hell/)
* [Visualizing the Event Loop](https://bit.ly/1Btu0Iy)

## 6- Following Along and Catching Up

* The instructor should make sure students clone the starter repo without forking it.
* The instructor must make commits to a `lecture` branch and push them regularly (or use a script to do it).
* If the students work on their own named branch, `main` is kept clean so they can re-do the demo later.
* In order to catch up, the students can reset their branch to the instructor's last pushed commit:

  ```bash
    git fetch && git reset --hard origin/lecture
  ```

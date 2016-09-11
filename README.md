### Website Performance Optimization portfolio project

##Optimizations were made to **index.html** allowing it to achieve a PageSpeed score of 90 and above.
Steps taken:
*removing rendering blocking css from style.css and making the CSS inline, adding media query attribute to print.css
*minify the JS files using Grunt (not including the main.js file)
*compress and optimize the images using Grunt

##Optimizations were made to **views/js/main.js** and **views/pizza.html** allowing page to render with optimal speed and with a consistent frame-rate at 60fps when scrolling.
Steps taken:
*removing the code that was executed to adjust the background pizza images when scrolling
*rewriting the code for resizing the pizza, simplying it by removing the code that triggers jank, e.g. layout calls and styling calls.
*optimize images by resizing and compressing them via Grunt
*removing rendering blocking css from style.css and making the CSS inline

##Information about running the site
Because Grunt is used to build the optimized code,i.e. minifying JS and compressing and resizing the images, the folder **dist** contains the code for final evaluation.  The **src** contains the source code.
To see the optimized code in action, open index.html file in dist folder in browser.  Similarly, if the project is hosted on a webserver, make sure the url points to the index.html within the dist folder.
Running ```grunt``` at command line from within the root project folder will clean and rebuild the code within dist folder.
**NOTE** Before running ```grunt``` command, make sure to run ```npm install``` command as it will install each dependency plugin listed within **package.json** file.



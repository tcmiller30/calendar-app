# Work Day Scheduler

## Description

This website can be used as a simple daily planner to schedule out your work day. Time management is a skill many struggle with, but having a way to plan out your day can be a great help in keeping productive. Users will be able to block out what they intend to accomplish for the day hour to hour. Thanks to Day.Js implementation, the time blocks are helpfully color coded to help the user keep track of where they are in there day, letting them know if they are on, behind, or ahead of schedule. 

Working on this website helped be get more familiar with the use of third party API's like JQuery and Day.Js. I also got some additional practice storing and pulling information from local storage. I had to make use of dot notation to chain methods more than I ever have in past projects which helped me get more comfortable navigation longer lines of code. 

## Installation
  
N/A

## Usage
In order to use this website, open the webpage (https://tcmiller30.github.io/work-day-scheduler/) in your browser. 

The user will be presented with a series of time blocks that represent the hours of 9am-5pm, or regular business hours. Day.Js is used to both display the current date to the user, but also track the current hour of the day which allows the time blocks to be color coded depending on the current time of day. If the time the block represents has already passed, the block will be shaded grey. The block will be shaded green if it represents a future timeframe and shaded red if the time block represents the present.

For example, if the current time were 12pm, the time blocks would appear as follows:
  -9am-11am: Grey (Past)
  -12pm: Red (Present)
  -1pm-5pm: Green (Future)

Users can input text within each time block up to 3 lines. If the user would like to save their planned tasks for future reference, they can press the save button to the right of the time block. This button will log the data inputted to the textarea to Local Storage. So long as the user saves their changes, they will find that their plans persist upon refreshing the page.

Below is a screenshot of what the website looks like at full size.

![Screenshot of the Work Day Scheduler with a Basic Day Plan](/assets/images/work-day-scheduler-example.png)  

## Credits

MDN Web Docs
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN


    

## License

MIT License

Copyright (c) [2022] [Travis Miller]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


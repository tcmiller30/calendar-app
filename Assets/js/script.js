// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDayEl = $('#currentDay')
var timeBlockArray = $('.time-block')
var textAreaEl = $('textarea')



$(function () {
  var hour = dayjs().hour();
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $('button').on('click', function(){
    // gets id of button's parent div to use as a key
    var blockKey = $(this).parent().attr('id');
    // writes inputted textarea content to localStorage using the time block id as a key
    localStorage.setItem(blockKey, $(this).prev().val());
  })
  
  
  // compares time block id numbers to current hour to determine if block is past, present, or future
   // uses jquery to iterate over the divs in the HTML with id's (the time blocks)
  $('div[id]').each(function(){
        // replace() removes text from string, parseInt converts string to number
        var timeBlockHour = parseInt($(this)
        .attr('id')
        .replace('hour-', '')
        );
        console.log(timeBlockHour);

        // logic that removes time-indicator classes and replaces it with the correct class based on the current hour
        if(timeBlockHour === hour){
          $(this).removeClass('past future').addClass('present');
        }
        else if(timeBlockHour > hour){
          $(this).removeClass('past present').addClass('future');
        }
        else if(timeBlockHour < hour){
          $(this).removeClass('present future').addClass('past');
        }
       });
  
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?+

  $('.description').each(function(){
    $(this).val(localStorage.getItem($(this)
      .parents('.time-block')
      .attr('id'))
      );
  })
// Displays current date to page
  var date = dayjs().format('dddd, MMMM D, YYYY');
  console.log(date);
  currentDayEl.text('Scheduling for: ' + date);
  })
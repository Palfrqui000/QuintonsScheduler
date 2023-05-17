// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

  var rightNow = dayjs();


  var current = $('#currentDay');
  current.text(rightNow.format('dddd, MMMM D, YYYY h:mm A')); 

  var calander = new Date();
  var hour = calander.getHours();

  for(var i = 9; i < 18; i++) {
    if(i < hour) {
      document.getElementById(i.toString()).classList.add('past');
    } else if (i === hour) {
      document.getElementById(i.toString()).classList.add('present');
    } else if (i > hour) {
      document.getElementById(i.toString()).classList.add('future');
    };
  };

  });


    $('.saveBtn').click(function() {

        console.log(document.getElementById('hr9').value);

      var nineBox = document.getElementById('hr9').value;
      localStorage.setItem('9oclock', nineBox);

      var tenBox = document.getElementById('hr10').value;
      localStorage.setItem('10oclock', tenBox);

      var elevenBox = document.getElementById('hr11').value;
      localStorage.setItem('11oclock', elevenBox);

      var twelveBox = document.getElementById('hr12').value;
      localStorage.setItem('12oclock', twelveBox);

      var oneBox = document.getElementById('hr1').value;
      localStorage.setItem('1oclock', oneBox);

      var twoBox = document.getElementById('hr2').value;
      localStorage.setItem('2oclock', twoBox);

      var threeBox = document.getElementById('hr3').value;
      localStorage.setItem('3oclock', threeBox);

      var fourBox = document.getElementById('hr4').value;
      localStorage.setItem('4oclock', fourBox);

      var fiveBox = document.getElementById('hr5').value;
      localStorage.setItem('5oclock', fiveBox);

    })
  
    var nineSaved = localStorage.getItem('9oclock');
    document.getElementById('hr9').value = nineSaved;

    var tenSaved = localStorage.getItem('10oclock');
    document.getElementById('hr10').value = tenSaved;

    var elevenSaved = localStorage.getItem('11oclock');
    document.getElementById('hr11').value = elevenSaved;

    var twelveSaved = localStorage.getItem('12oclock');
    document.getElementById('hr12').value = twelveSaved;

    var oneSaved = localStorage.getItem('1oclock');
    document.getElementById('hr1').value = oneSaved;

    var twoSaved = localStorage.getItem('2oclock');
    document.getElementById('hr2').value = twoSaved;

    var threeSaved = localStorage.getItem('3oclock');
    document.getElementById('hr3').value = threeSaved;

    var fourSaved = localStorage.getItem('4oclock');
    document.getElementById('hr4').value = fourSaved;

    var fiveSaved = localStorage.getItem('5oclock');
    document.getElementById('hr5').value = fiveSaved;

      // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  
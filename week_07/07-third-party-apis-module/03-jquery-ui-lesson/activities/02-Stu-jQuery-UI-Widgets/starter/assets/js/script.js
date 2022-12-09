var formEl = $('#skills-form');
var nameInputEl = $('#skill-name');
var dateInputEl = $('#datepicker');
var skillsListEl = $('#skills-list');

var printSkills = function (name, date) {
  var listEl = $('<li>');
  var listDetail = name.concat(' on ', date);
  listEl.addClass('list-group-item').text(listDetail);
  listEl.appendTo(skillsListEl);
};

var handleFormSubmit = function (event) {
  event.preventDefault();

  var nameInput = nameInputEl.val();
  var dateInput = dateInputEl.val();

  if (!nameInput || !dateInput) {
    console.log('You need to fill out the form!');
    return;
  }

  printSkills(nameInput, dateInput);

  nameInputEl.val('');
  dateInputEl.val('');
};

formEl.on('submit', handleFormSubmit);

// Add Autocomplete widget here

  var availableTags = [
    "Data",
    "Coding",
    "jQuery",
    "CSS",
  ];

  nameInputEl.autocomplete({
    source: availableTags
  });



dateInputEl.datepicker();

skillsListEl.sortable( {
  update: function() {
    var item = $('#skills-list li');
    var skills = [];

    item.each(function () {
      var li = $(this);

      skills.push(li.text());
    })

    localStorage.setItem('skills', JSON.stringify(skills));
  }
});



var date = new Date();
var weekdays = ['monday', 'tuesday', 'wed']
var previousDate = moment('18/12/1985');

//  using moment

var date = moment();

moment().format("MMM Do YYYY"); 
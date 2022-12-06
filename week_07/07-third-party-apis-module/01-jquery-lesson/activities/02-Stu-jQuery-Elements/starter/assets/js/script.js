// TODO: Select the existing DOM element, <div id="root">, and assign to a new variable
var rootEl = $('#root');

// Hint: Visit the documentation https://api.jquery.com/

// TODO: Create a `<p>` element that will store an author's name and assign that created element to a new variable

var authorEl = $("<p></p>");


// TODO: Add the following text to the newly created `<p>` element: "~ Carol Dweck"

authorEl.text('~ Carol Dweck');

// TODO: Add the class `plain` to the author element

authorEl.addClass('plain');

// TODO: Create a new `<h1>` element that will store an author's quote and assign it to new variable

var quoteEl = $('<h1></h>');

// TODO: Add the following quote text to the quote element, "Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning."
quoteEl.text('Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning.');
// TODO: Apply the class `fancy` to the quote element
quoteEl.addClass('fancy');
// TODO: Append the author element to the quote element
// quote.append.child('vanillaElement')
quoteEl.append('authorEl');
// TODO: Append the quote element to the HTML element with an ID of `root` in `index.html`
rootEl.append(quoteEl);

// you can chain the jquery statement to each other to make things neater
// 

var form = S('form')

form.submit(function(event) {
    event.preventDefault;

    var input = $('#name');

    console.log(input.val);

})
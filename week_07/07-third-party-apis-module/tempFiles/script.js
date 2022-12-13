$(document).ready(function() {
$('#currentDay').text(moment().format('dddd MMMM Do YYYY, HH:mm'));
// Moment Current time 
var currHour = moment().hour();
console.log('log: currHour ', currHour);

//on click of save button store values in Local Storage using LocalStorage.setItem()
$('.saveBtn').on('click', function(){
    //grab hour.
    var hour = $(this).siblings('.hour').text();
    console.log(hour);
    //grab the information from textarea.
    var event = $(this).siblings('.event-text').val();
    console.log(event);
    //Store event in localStorage in key,value format.
    localStorage.setItem(hour, event);
    // Fade notification out then clear.
    $("#notification").fadeIn().append('Appointment Saved to localStorage').delay(2000).fadeOut();
    $('#notification').val('');
    // });
});





$('.hour').each(function(i){
    var hour = $(this).text()
    console.log(i + ': ' + $(this).text())
       
    //grab the stored value from localStorage and show inside the textarea
    console.log('log: hour ', hour);
    var text = localStorage.getItem(hour);
    console.log('Grab value from LS', text);
    $(this).siblings('.event-text').val(text)   
});


//Change background colour based on the time of day.
$('.time-block').each(function(i){

    var schedTime = $(this).attr('id');
    console.log('log: schedTime ', schedTime);
        
    if(currHour < schedTime ){
        console.log('currHour > schedTime', currHour, schedTime)
        $(this).children('.event-text').addClass('future')
    }
    
    else if(currHour > schedTime ){
        console.log('currHour > schedTime', currHour, schedTime)
        $(this).children('.event-text').addClass('past');  
    }
    else{
        console.log('currHour = schedTime', currHour, schedTime)
        $(this).children('.event-text').addClass('present');
    }  
})
})
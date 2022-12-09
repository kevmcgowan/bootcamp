$(document).ready(function(){
    $('#btn').click(function(){
        var entered = $('input[name=dateEntered]').val();
        var add = $('input[name=AddItem]').val();
        var time = $('input[name=dateDue]').val();
        var space = ' '
        $('ol').append('<li>' + entered + space + add + space + time + '</li>');
    });
  
    $('input[name=AddItem]').keyup(function(event){
        $("#date")[0].value = new Date();
        if(event.keyCode == 13){
            
            $('#btn').click();    
        }
    });

    
    $(document).on('click', 'li', function(){
        $(this).toggleClass('cross_line').fadeOut('slow');
    });

    $('input').focus(function(){
        $(this).val('');
    });


});

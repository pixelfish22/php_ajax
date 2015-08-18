// JavaScript File
$(document).ready(function(){
    $('#getAnswer').on('click',function(e){
        e.preventDefault();
        $.ajax({
            url:'eightball_randomizer.php',
            type:'get',
            success:function(response, status){
                console.log('response', JSON.parse(response));
                var answer = JSON.parse(response).answer;
                $('#target').html(answer);
            }
        })
    })
});
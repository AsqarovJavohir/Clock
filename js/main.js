$(function(){

    function clockShow(){
        let date = new Date();
        
        $('.hours').html(date.getHours());
        $('.minutes').html(date.getMinutes());
        $('.seconds').html(date.getSeconds());
    }
    setInterval(clockShow,1000)
    
    });
    
    
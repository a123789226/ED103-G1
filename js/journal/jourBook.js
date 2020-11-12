$(document).ready(function(){
    
    let divWidth = $('#jourSliderBoard').width();
    let imgCount = $('#jourContent li').length;
    // alert(1234);
    // console.log(divWidth);

    for(let i=0; i<imgCount; i++){
        $('#jourContentButton').append('<li></li>');
    }
    $('#jourContentButton li:nth-child(1)').addClass('clickMe');

    $('#jourContent').width(divWidth * imgCount);       //ul的寬度
    $('#jourContent li').width(divWidth);               //li的寬度

    let index;
    $('#jourContentButton li').click(function(){
        index = $(this).index();
        
        $('#jourContent').animate({
            left: divWidth * index * -1,
        });

        $(this).addClass('clickMe');
        $('#jourContentButton li').not(this).removeClass('clickMe');
    });
});
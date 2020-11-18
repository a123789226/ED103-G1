// $(document).ready(function(){
//     let divWidth = $('#jourSliderBoard').width();
//     let imgCount = $('#jourContentRwd li').length;
    
//     for(let i=0; i<imgCount; i++){
//         $('#jourContentButton').append('<li></li>');
//     }
//     $('#jourContentButton li:nth-child(1)').addClass('clickMe');

//     $('#jourContentRwd').width(divWidth * imgCount);       //ul的寬度
//     $('#jourContentRwd li').width(divWidth);               //li的寬度

//     let index;
//     $('#jourContentButton li').click(function(){
//         index = $(this).index();
        
//         $('#jourContentRwd').animate({
//             left: divWidth * index * -1,
//         });

//         $(this).addClass('clickMe');
//         $('#jourContentButton li').not(this).removeClass('clickMe');
//     });
// });
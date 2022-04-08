$(document).ready(function(){
// save text color on localstorg
    let mainColor=localStorage.getItem("color-option")
// بقله لو لقيت حاجه متخزنه هتها 
if(mainColor!==null){
    // document.documentElement.style.setProperty("color-Item",mainColor)
    $("body").css("color",localStorage.getItem("color-option"))
}

// options color
colorItem=$(".color-item");
colorItem.eq(0).css("backgroundColor","black");
colorItem.eq(1).css("backgroundColor","tomato");
colorItem.eq(2).css("backgroundColor","#09c");
colorItem.eq(3).css("backgroundColor","orange");
colorItem.eq(4).css("backgroundColor","teal");

colorItem.click(function(){
    let color  = $(this).css("backgroundColor");
    $("body,html").css("color",color)
    localStorage.setItem("color-option",color)
})

// animate seting box
$("#change i").click(function(){
    let colorboxWidth= $(".color-box").outerWidth();
    if($("#change").css('left') == "-199.156px")
    {
        
        $("#change").animate({left:`0`} , 1000); 
    }   else {
        $("#change").animate({left:`-${colorboxWidth}`} , 1000);
    } 
}) 

// change background navbar and fedin botton when i start scroll
$(window).scroll(function(){
    if($(window).scrollTop() > $("#navbar").height()){
        $("#btnup").fadeIn(500)
        $("#navbar").css("backgroundColor","rgba(0,0,0,0.5)");
        
    }
    else{
        $("#btnup").fadeOut(500)
        $("#navbar").css("backgroundColor","transparent");
    }
})
//smooth scroll to section with navbar

$("nav li a").click(function(){
        let href=$(this).attr("href")
        $("html,body").animate({scrollTop:$(href).offset().top},2000)
     })

 
// when i click in boton scroll
    $("#btnup").click(function(){
        $("html,body").animate({scrollTop :` 0`}, 500)
    }) 

// GALLERY Slids
$(".img-item").click(function(e){

    let imgSrc = $(this).attr('src');

    $("#main-img").attr('src',imgSrc); 
})
//way to fedin and fed out menu items
var mixer=mixitup('.mm')
/* //anther way to fedin and fed out menu items by jqury
 $("#All").click(function(){
    $(".off,.hom").fadeIn(500)
    // $(".off,.hom").animate({display:`block`},2000)
})
$("#Home").click(function(){
    //$("div").filter(".off").css("display","none")
    $(".off").fadeOut(1000)
    $(".hom").fadeIn(1000)

})

$("#Office").click(function(){
    //$("div").filter(".hom").css("display","none")
    $(".hom").fadeOut(1000)
    $(".off").fadeIn(1000)
})  
 */

// nice scroll
/* $("a").click(function(){
    let aref=$(this).attr("href");
    let secrionoffset=$(aref).offset();
    $("html body").animate({scrollTop:secrionoffset},2000)

}) */
//active botton
$("#MENU .container-fluid  li").click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    
})
 // loading

    $("#loading").fadeOut(3000,function(){
        $("body").css("overflow","auto")
    })
}) 






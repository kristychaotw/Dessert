$(".group1").on("click", function(){
    if ($(this).hasClass("active")){
        $(this).removeClass("active")
        $(this).siblings().show()
    }else{
        $(this).addClass("active")
        $(this).siblings().hide()
    }

})//group1 click end


//mene-icon按鈕
$(".menu-icon").on("click", function(){
     
    if ($(this).hasClass("active")){
        $(this).removeClass("active")
        $("#pri-nav").slideUp()
    }else{
        $(this).addClass("active")
        $("#pri-nav").slideDown()
    }
})//menu-icon click end

$(window).resize(function(){
    if( $(window).width() >= 768 ){
        // 當視窗寬度大於等於768時執行
        $("#pri-nav").show()
    }else{
        // 當視窗寬度小於768時執行
        $("#pri_nav").hide()
    }
})//window resize end



//休假日輪播
$(".child").hover(function(){
    $(this).addClass("active")
    $(this).siblings().addClass("other")
    $(".relaxtxt").text( $(this).find("img").attr("alt") )
}, function(){
    $(this).removeClass("active")
    $(this).siblings().removeClass("other")
    $(".relaxtxt").text("海之日" )
})//child hover end


//休假日標籤移動-mobile

//定義
// var childtop  = $("thetag").scrollTop();
// console.log("我是"+childtop);


var elmnt = document.getElementById("child1");
var y = elmnt.scrollTop;

$(window).scroll(function(){
    //捲軸捲動時執行
    console.log(y);
  });

  





//甜點輪播
$(".slide:last-child").clone().prependTo(".dessert .slide-content")
$(".slide").eq(1).clone().appendTo(".dessert .slide-content")
let currentSlideOffset = -400

function next(){
    currentSlideOffset = currentSlideOffset - 400
    console.log(currentSlideOffset);

    if(currentSlideOffset != -2400){
        $(".dessert .slide-content").animate({"margin-left": currentSlideOffset},400)

    }else{
        //callback
        $(".dessert .slide-content").animate({"margin-left": currentSlideOffset},400,function(){
            //動畫執行完才執行
            $(".dessert .slide-content").css({"margin-left":-400})
        })
        currentSlideOffset = -400
         }//if cuttentSlideOffset end 
}//#next click end

function prev(){
    // 輪播的座標累加子項目寬度
    currentSlideOffset = currentSlideOffset + 400
    console.log(currentSlideOffset)
   
    if (currentSlideOffset == 0){
        $(".dessert .slide-content").animate({"margin-left": currentSlideOffset},600,function(){
            $(".dessert .slide-content").css({"margin-left":-1600})
        })//$(".slide_content").animate end
        currentSlideOffset = -1600
    }else{
        $(".dessert .slide-content").animate({"margin-left": currentSlideOffset },600)     
    }

}//#prev click end

//前進、後退按鈕事件，要放入click&計時器
$("#next").on("click",function(){
    next()
})//#next click end
$("#prev").on("click",function(){
    prev()
})//#prev click end

//暫停按鈕
let timer = setInterval(next,2000)
$("#pause").on("click",function(){
    clearInterval(timer);
})//#prev click end


// //跑馬燈
// $('.slide-content').slick({
//     infinite: true,
//     arrows:false,
//     dots:false,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     autoplay:true,
//     autoplaySpeed: 0,
//     pauseOnFocus: false,
//     pauseOnHover: false,
//     pauseOnDotsHover: false,
//     cssEase: 'linear',
//     speed:4000,
//     responsive: [{
//             breakpoint: 1024,
//             settings: {
//                 arrows:false,
//                 dots:false,
//                 slidesToShow: 5,
//                 slidesToScroll: 1,
//                 autoplay:true,
//                 autoplaySpeed: 0,
//                 pauseOnFocus: false,
//                 pauseOnHover: false,
//                 pauseOnDotsHover: false,
//                 cssEase: 'linear',
//                 speed:4000,
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }
//         // You can unslick at a given breakpoint now by adding:
//         // settings: "unslick"
//         // instead of a settings object
//     ]
// });

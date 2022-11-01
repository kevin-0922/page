$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() == 0) {
      $(".navbar").removeClass("bg-light nav_scroll");
    } else {
      $(".navbar").addClass("bg-light nav_scroll");
    }
  });

  //點選時發生
  $(".scrollTop").click(function (e) {
    e.preventDefault();
    var target = $(this).attr("href"); //抓取選取的scrollTop id
    var targetPos = $(target).offset().top - $(".navheight").outerHeight(); //用抓取到的id來判別位置
    $("body, html").animate(
      { scrollTop: targetPos },
      1000 //用抓取到的位置來讓螢幕跑到定位
    );
  });

  //抓取螢幕目前位置
  $(window).scroll(function () {
    var scrollPos = $(window).scrollTop(); //抓取現在螢幕的位址
    var windowHeight = $(window).height(); //抓取現在螢幕的高度

    $(".scrollTop").each(function () {
      var target = $(this).attr("href"); //抓取選取的scrollTop id
      var targetPosition = $(target).offset().top; //用抓取到的id來判別位置
      var targetHeight = $(target).outerHeight(); //用抓取到的id來判別高度
      var navHeight = $(".navheight").outerHeight(); //用抓取到的navheight來nav判別高度
      if (
        targetPosition - 1 - navHeight <= scrollPos &&
        targetHeight + targetPosition > scrollPos
      ) {
        //第一個條件：是 div 到最上面的高度小於等於我目前滑到的高度比較
        //第二個條件：是 div 高度 +div 到頂部的高度大於我目前滑到的高度比較
        $(".scrollTop").removeClass("nav-active");
        $(this).addClass("nav-active");
      } else {
        $(this).removeClass("nav-active");
      }
    });
    //滑到哪就出現效果
    $(".animated").each(function () {
      //選取所有的.animated
      var thisPos = $(this).offset().top; //抓取.animated的位置ps因為前面沒有position: relative;所以和position一樣效果
      if (windowHeight + scrollPos >= thisPos) {
        //判斷如果螢幕高度+螢幕現在的位置超過 抓取的thisPos 就顯示
        $(this).addClass("fadeIn"); //加入class-fadeIn
      }
    });
  });

  $("#Grid").mixitup();

  $(function () {
    $('.masonry').masonry({
      itemSelector: '.item'
    })
  });

  $(".filter").click(function () {
    $('.mix').removeClass("item");
    $('.mix').addClass("item");
  });
  
});

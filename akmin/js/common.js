$(function () {
  $(".menu-toggle_btn").on('click', function () {
    $(this).toggleClass('active');
    $('.menu-inner').toggleClass('active');
    $('menu__item').toggleClass('active');
  });

  $('.js-open').click(function () {
    $("body").addClass("no_scroll"); // 背景固定させるクラス付与
    var id = $(this).data('id'); // 何番目のキャプション（モーダルウィンドウ）か認識
    $('#overlay, .modal-window[data-id="modal' + id + '"]').fadeIn();
    var main_img = $('.modal-window[data-id="modal' + id + '"] .image_list li img').eq(0).attr("src");
    $('.main_img img').attr("src", main_img);
  });
  // オーバーレイクリックでもモーダルを閉じるように
  $('.js-close , #overlay').click(function () {
    $("body").removeClass("no_scroll"); // 背景固定させるクラス削除
    $('#overlay, .modal-window').fadeOut();
  });
   
  
  
  $(".image_list img").click(function () {
    var img = $(this).attr("src");

    $(".image_list li").removeClass("select");
    $(this).parent().addClass("select");

    $(".main_img img").fadeOut(500, function () {
      $(this).attr("src", img),
        $(this).fadeIn(500)
    });
  });
  /*-----------------任天堂スイッチのボタン動作------------*/
  var num = 0;
  var a = [];
  $('#bottom').on('click', function () {
    $(this).data("click", ++num);
    $('li[data-list="' + num + '"]').css('color', '#EC6015');
    $('li[data-list="' + num + '"]>a').css('color', '#EC6015');
    $('li[data-list="' + (num-1) + '"]>a').css('color', 'white');
    $('li[data-list="' + (num-1) + '"]').css('color', 'white');
    a.push(num); console.log(a);
  })
  $('#top').on('click', function () {
    $(this).data("click", --num);
    $('li[data-list="' + num + '"]>a').css('color', '#EC6015');
    $('li[data-list="' + num + '"]').css('color', '#EC6015');
    $('li[data-list="' + (num+1) + '"]>a').css('color', 'white');
    $('li[data-list="' + (num+1) + '"]').css('color', 'white');
    a.push(num);
    console.log(a);
  })
  $('#decision').on('click', function () {
    var s = a.pop();
      //スクロールのスピード
      var speed = 500;
      //リンク元を取得
      var href=  $('li[data-list="' + s + '"]>a').attr("href");
      //リンク先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      //リンク先までの距離を取得
      var position = target.offset().top;
      //スムーススクロール
      $("html, body").animate({scrollTop:position}, speed, "swing");
  })
  /*---------------------スクロール--------------*/
  $(window).scroll(function () {
    $(".effect-fade").each(function () {
      var elemPos = $(this).offset().top; /* 要素の位置を取得 */
      var scroll = $(window).scrollTop(); /* スクロール位置を取得 */
      var windowHeight = $(window).height(); /* 画面幅を取得（画面の下側に入ったときに動作させるため） */
      if (scroll > elemPos - windowHeight) {
        /* 要素位置までスクロール出来たときに動作する */
        $(this).addClass("effect-scroll");
      }
    });
  });
  jQuery(window).scroll();
});
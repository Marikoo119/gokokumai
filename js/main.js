// 画像をふわっと出す(recipe.htmlに利用)
$(window).on('scroll load',function () {


  $('.scroll-effect').each(function(){


    //ターゲットの高さを取得
    let targetPos = $(this).offset().top;

    //スクロールの値
    let scroll = $(window).scrollTop();

    //ウィンドウの高さ
    let windowHeight = $(window).height();

    // ターゲットが可視範囲に入ったらscroll-inクラスを付与
    if (scroll > targetPos - windowHeight){
      $(this).addClass('scroll-in');
  }

  });

});
//画像をふわっと出す↑







var swiper = new Swiper('.swiper-container', {

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    disableOnInteraction: false, // クリックしてもループし続けるように
  },
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
     delay: 2000, // 次スライドまでの待機時間
  },
   speed: 3000, // スライドするスピード
   loop:true,
   observer: true, // ローディング後のうまく行かない挙動対策
   observeParents: true,
   effect: 'fade', 
   
});

$(function(){
  // .drawer-itemをクリックしたら
  $('.drawer-item').on('click',function(){
      // チェックボックス外す
      $("#drawer-check").prop("checked", false);
  });
});





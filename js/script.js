new WOW().init();

jQuery(function ($) {
  var topBtn = $(".js-pagetop");
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });

  //ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300,
      "swing"
    );
    return false;
  });

  //ドロワーメニュー
  $(".js-hamburger").on("click", function () {
    if ($(".js-hamburger").hasClass("is-open")) {
      $(".js-drawer-menu").removeClass("is-open");
      $(this).removeClass("is-open");
    } else {
      $(".js-drawer-menu").addClass("is-open");
      $(this).addClass("is-open");
    }
  });

  //メニューと背景クリックでドロワーを閉じる
  $(".js-drawer-link,.js-drawer-menu").click(function () {
    $(".js-drawer-menu").removeClass("is-open");
    $(".js-hamburger").removeClass("is-open");
  });

  // スクロールでハンバーガーの色変化
  $(window).on("scroll", function () {
    var height = $(window).height();
    if (height < $(this).scrollTop()) {
      $(".js-hamburger").addClass("is-change");
    } else {
      $(".js-hamburger").removeClass("is-change");
    }
  });

  // swiper
  var swiper = new Swiper(".js-swiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2000,
    },
    loop: true,
  });

  // スムーススクロール
  $(document).on("click", 'a[href*="#"]', function () {
    let time = 400;
    let header = $("header").innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $("html,body").animate({ scrollTop: targetY }, time, "swing");
    return false;
  });

  //loader
  $(function () {
    const h = $(window).height();
    $(".js-loader-bg ,.js-loader").height(h).css("display", "block");
  });
  $(window).on("load", function () {
    $(".js-loader").delay(600).fadeOut(300);
    $(".js-loader-bg").delay(800).fadeOut(700);
  });
});

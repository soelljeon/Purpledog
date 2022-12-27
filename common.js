$(function () {
  // 보이기 | 숨기기
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      //250 넘으면 버튼이 보여짐니다.
      $(".btn_top").fadeIn();
    } else {
      $(".btn_top").fadeOut();
    }
  });
  // 버튼 클릭시
  $(".btn_top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0, // 0 까지 animation 이동합니다.
      },
      400
    ); // 속도 400
    return false;
  });
});

$(function () {
  $(".ham").click(function () {
    // toggle->addClase와 한번에 처리하는 것(클릭,떼기)
    $(".hd_top").toggleClass("on");
  });

  $(window).resize(function () {
    // setTimeout 시간차 주기
    setTimeout(function () {
      $(".hd_top").removeClass("on");
    }, 3000);
  });
});

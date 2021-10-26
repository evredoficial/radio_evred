// ! Botão de Voltar ao topo
jQuery(document).ready(function ($) {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $("#top").fadeIn();
    } else {
      $("#top").fadeOut();
    }
  });
  //Scroll body para 0px ao clicar
  $("#top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });
});
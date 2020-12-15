// console.log($('.ui.sidebar.left'))
// $('.ui.sidebar.left').sidebar('setting', 'transition', 'overlay');
//     $('.botLEFT').click(function () {
//     $('.ui.sidebar.left').sidebar('toggle');
// });

$('.ui.accordion')
    .accordion()
;
$('.ui.modal.historia-pizza')
        .modal('attach events', '.historia-pizza-link', 'show')
    ;
$('.ui.modal.receita-pizza')
    .modal('attach events', '.receita-pizza-link', 'show')
;
$('.ui.modal.mini.horario')
    .modal('attach events', '.horario-link', 'show')
      

var swiper = new Swiper('.swiper-container-banner', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var swiper = new Swiper('.swiper-container-banner-image', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var swiper = new Swiper('.swiper-container-depoiment', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var swiper = new Swiper('.swiper-container', {
    
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
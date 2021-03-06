$(document).ready(function(){

  /*main menu*/
  function fixedElements(scrollHeight,elementId,defaultClass,fixedClass){
    $(window).scroll(function(){
      if ( $(this).scrollTop() > scrollHeight && $(elementId).hasClass(defaultClass)){
        $(elementId).removeClass(defaultClass).addClass(fixedClass);
      }
      else if($(this).scrollTop() <= scrollHeight && $(elementId).hasClass(fixedClass)){
        $(elementId).removeClass(fixedClass).addClass(defaultClass);
      }
    });
  }
  if ($(window).width()>480){
    fixedElements(98,"#top-menu","top-menu-default","top-menu-fixed");
  }
  $("a.menu_item").click(function(){
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    },{
      duration: 500,
      easing: "swing"
    });
    return false;
  });
  $("#open_menu").click(function(){
    $('.main_menu').slideToggle("fast");
  });

  /*slider*/
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });

  /*masked input*/
  $(".inp_phone").mask("+7 (999) 999-9999");
   
  /*send form*/
  $("#send_form").submit(function(e){
    e.preventDefault();
    var form_data = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "sendmail.php",
      data: form_data,
      success: function(){
        $('#outmessage').html('Your message was successfully sent!').fadeIn().delay(3000).fadeOut("slow");
        $('#outmessage').css('color', 'white');},
      error: function(){
        $('#outmessage').html('Error!').fadeIn().delay(3000).fadeOut("slow");
        $('#outmessage').css('color', 'red');}
      });
  });
  
  /*paragraph resize*/
  $(".resizetext").hide();
  $(".resizebutton").click(function(){
    $(this).parent().children(".resizetext").slideToggle(200);
  });
  
  /*scroll infinity*/
  $(window).scroll(function(){
    var endofpage = 100;
    if (($(window).scrollTop() + $(window).height()) > ($(document).height() - endofpage))
    {
      $("#endofpage").append("<img src='img/scarlett"+randomint(1,5)+".jpg'>");
    } 
  });
  
  /*numcounter*/
  var numcounter_time = 2, scroll_counter = 1;
  $(window).scroll(function(){
    $('#numcounter').each(function(){
      var
      counter_position = $(this).offset().top,
      topwindow = $(window).scrollTop();
      if (counter_position < topwindow + ($(document).height() / 2) && scroll_counter < 2)
      {
        $('div').each(function(){
          $('.numcounter_number').addClass('numcounter_visible');
          var
          i = 1,
          num = $(this).data('num'),
          step = 1000 * numcounter_time / num,
          that = $(this),
          int = setInterval(function(){
            if (i <= num)
            {
              that.html(i);
            }
            else
            {
              scroll_counter = scroll_counter + 2;
              clearInterval(int);
            }
            i++;
          },step);
        });
      }
    });
  });
});
/*form name*/
function formname(name)
{
  document.getElementById("formname").value = name;
}
/*random integer*/
function randomint(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
/*animate.css scroll*/
wow = new WOW({mobile:false});
wow.init();
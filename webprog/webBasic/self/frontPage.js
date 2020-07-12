$(document).ready(function () {
    $("#tokyomain").click(function(){
      $("#paris").slideUp(1000);
        $("#tokyo").slideDown(1000);
        $("#plane").animate({
          height: 'toggle'
        });
      });
      $("#parismain").click(function(){
        $("#tokyo").slideUp(1000);
        $("#paris").slideDown(1000);
      });
      $('#closelogin').click(function(){
        $('#login').hide();
      })
      $('#loginmenu').click(function(){
        $('#login').show();
      })
});

// $("h4").click(function(){
//     $("h4").css("color", "red").slideUp(2000).slideDown(1000);
// });
//         $("div:gt(0)").click(function(){
//     $("div:gt(0)").slideUp(2000).slideDown(1000);
//   });
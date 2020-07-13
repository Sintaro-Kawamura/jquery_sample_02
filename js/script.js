// Fade Sample ////////////
$( function() {

  $(".fade").fadeTo(0,0.0); // 初期状態 20%

  $(".fade").hover(
    function(){
      $(this).fadeTo("slow", 1.0); // マウスが載ったら100%までフェードする
    },
    function(){
      $(this).fadeTo("slow", 0.2); // マウスが離れたら20%に戻す
    }
  );

});

// Animate Sample //////////
$( function(){
  $("#left").click( function(){
    $('#move').animate( { 'left': '-=200px' } , { 'duration': 1000 } );
  });
  $("#right").click( function(){
    $('#move').animate( { 'left': '+=200px' } , { 'duration': 1000 } );
  });
  $("#down").click( function(){
    $('#move').animate( { 'top': '+=200px' } , { 'duration': 1000 } );
  });
   $("#up").click( function(){
    $('#move').animate( { 'top': '-=200px' } , { 'duration': 1000 } );
  });
});

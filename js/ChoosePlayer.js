var newsrc = "jordan_solo_king.png";
function changeImage() {
  
  if ( newsrc == "jordan_solo_king.png" ) {
    document.images["pic"].src = "images/jordan_solo_king.png";
    document.images["pic2"].src = "images/lebron_solo_preking.png";
    $('#pic2').css('opacity',0);
    newsrc  = "jordan_solo_preking.png";
  }
  else {
    document.images["pic"].src = "images/jordan_solo_preking.png";
    $('#pic2').css('opacity',1);
    newsrc  = "jordan_solo_king.png";
  }
}
var newsrc2 = "lebron_solo_king.png";
function changeImage2() {
  
  if ( newsrc2 == "lebron_solo_king.png" ) {
    document.images["pic2"].src = "images/lebron_solo_king.png";
    document.images["pic"].src = "images/jordan_solo_preking.png";
    $('#pic').css('opacity',0);
    newsrc2  = "lebron_solo_preking.png";
  }
  else {
    document.images["pic2"].src = "images/lebron_solo_preking.png";
    $('#pic').css('opacity',1);
    newsrc2  = "lebron_solo_king.png";
  }
}

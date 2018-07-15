var score = 0;

function addScore(obj, win){
  score++;
  if ( score >= win ) {
    alert('Ура! Вы нашли все предметы!');
  }
  $(obj).hide();
}

function showAnswer(obj){
  var answer_id = $(obj).data('answer');
  $(obj).hide();
  $('.'+answer_id).show();
}

function showAfisha(obj){
  $('[id^='+obj.id+'-]').show();
  $(obj).hide();
}

function showArt(obj){
  $('[id^='+obj.id+']').hide();
}

function showCards(obj){
  $('.card div:last-child').css('color','#502d16');
  $(obj).hide();
}

function showImage(obj, url){
  $('.img_answer').attr('src',url);
  $(obj).hide();
}

function showPart(obj, page_number){
  var image_url = "../files/013/"+obj.id+".png"
  console.log(image_url);
  //$('.image-grid > div > div').css('');
  obj.style.backgroundImage = "url("+image_url+")";
}

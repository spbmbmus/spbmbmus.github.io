var score = 0;

function addScore(obj, win){
  score++;
  if ( score >= win ) {
    alert('Ура вы нашли все предметы');
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

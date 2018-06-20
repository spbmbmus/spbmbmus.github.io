var score = 0,
    win = 6;

function addScore(obj){
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

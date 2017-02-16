$(document).ready(function(){
  getUsers();
});

  function getUsers(){
  $.get('/users', function(data){
    console.loge(data);
    renderData(data);
  });

  function renderData(data){
    for (var i = 0; i < data.length; i++){
      $('ul').append('<li>' + data[i].idea + '</li>');
    }
  }
}

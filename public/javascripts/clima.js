function pedirClima(){

  $.get('/clima', function(data){
        if (data != [])
            mostrarClima(data);
      }

/*
  $.ajax({
      url: '/clima',
      type: 'get',
      dataType: "json",
      success: function(data){
        mostrarClima(data);
      },
  });*/


}


function mostrarClima(data){

  //aca va el swal con los case, o podria simplemente mostrar el mensaje que me da accu.
}
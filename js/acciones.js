// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	

$('#btncalcular').on ('click', function(){
	navigator.vibrate(1000);
	alert('vibro')
        var resultado
		var edad
		var nombre=$('#txtnombre').val();
		var dias=$('#txtdia').val();
		var mes=$('#txtmes').val();
	    var anio=$('#txtanio').val();
		
		var fecha_actual=new Date();
		alert (fecha_actual);
		var fecha_proximo_cumple = new Date(fecha_actual.getFullYear(),mes-1, dias);
		alert(fecha_proximo_cumple);
fecha_actual = new Date (fecha_actual.getFullYear(),fecha_actual.getMonth(),fecha_actual.getDate());
		alert (fecha_actual);
		
		var fecha_nacimiento = new Date (anio, mes-1,dias);
		alert (fecha_nacimiento);
		
		
		if(fecha_proximo_cumple<=fecha_actual)
		
		{
		 fecha_proximo_cumple= new Date(fecha_proximo_cumple.getFullYear()+1,fecha_proximo_cumple.getMonth(),fecha_proximo_cumple.getDate());	
		}
		dias=(fecha_proximo_cumple-fecha_actual)/1000/60/60/24;
	
		$('#nombre').html(' hola '+ nombre);
		$('#dias').text('faltan'+dias+'para tu cumpleaños')
		edad=fecha_actual.getFullYear()-anio
		resultado= edad-1
		alert(resultado)
		$('#anios').html('<h1> AHORA TIENES ' + resultado + ' AÑOS </h1>');
		if (dias<=7)
		{
			$('#ya_viene_tu_cumple').html('<h1>FELICIDADES</h1>')
			$('#ya_viene_tu_cumple').html(' <img src="images/pastel.jpg" style="width:30%">')
		}
		 
		$('#txtdia').val('');
		$('#txtnombre').val('')
	    $('#txtmes').val('');
	    $('#txtanio').val('');
		
	});
		 

}); 


  
	
	

  

  
	
});


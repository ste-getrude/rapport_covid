
/* 
* https://phppot.com/jquery/jquery-ajax-autocomplete-country-example/ 
*/

$(document).ready(function(){
	$(".search-box").keyup(function(){
			
			$.ajax({
			url: "ajax",
			dataType: "json",
			data:'term='+$(this).val(),
			
			
			success: function(data){
				
				var eleve_str ;
				eleve_str = '<ul class="list-group" id="country-list">';
				
				for (let key in data) {
				  let value = data[key];
				  
				  for (student_id in value){
				  	let info=value[student_id];
				  		var student_name = info.nom + ', ' + info.prénom + ' gr. ' + info.groupe;
				  		var data_array = student_name + "_" + student_id;
				  		eleve_str +=  '<li class="list-group-item list-group-flush" onClick="selectCountry(\'' + data_array + '\')">' + info.nom + ', '+ info.prénom + ' gr. '+ info.groupe +'</li>';
				  } 
				}	
					
				eleve_str += '</ul>';	
				$(".suggesstion-box").show();
				$(".suggesstion-box").html(eleve_str);
				$(".search-box").css("background","#FFF");
			}
		});
	
	});
});

//To select country name

function selectCountry(val) {
	
	let student_info = val.slice(0, val.indexOf("_") );
	let student_id = val.slice(val.indexOf("_") + 1, val.length)
	//console.log(typeof val);
	$(".student_id").val(student_id);
	$('input[class="student_id"]').val(student_id);
	$(".search-box").val(student_info);
	$(".suggesstion-box").hide();
}

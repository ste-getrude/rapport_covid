/**
 * https://www.bootstrapfriendly.com/blog/dynamically-add-or-remove-form-input-fields-using-jquery/
 * https://mattstauffer.com/blog/a-little-trick-for-grouping-fields-in-an-html-form/
 */
$(document).ready(function(){
	$("#search-box_no_1").keyup(function(){
		$.ajax({
		url: "ajax",
		dataType: "json",
		data:'term='+$(this).val(),
		
			success: function(data){
				//console.log(index)
				var eleve_str ;
				eleve_str = '<ul class="list-group" id="country-list">';
				
				for (let key in data) {
				  let value = data[key];
				  
				  for (student_id in value){
				  	let info=value[student_id];
				  		var student_name = info.nom.replace("'", ' ') + ' - ' + info.prénom + ' gr1. ' + info.groupe;
				  		//var data_array = student_name + "_" + student_id;
						console.log('<li class="list-group-item list-group-flush" onClick="selectSudent1( \''+ student_name + '\', ' + student_id + ', 1)">' + info.nom + ' - '+ info.prénom + ' gr3. '+ info.groupe +'</li>')
				  		eleve_str +=  '<li class="list-group-item list-group-flush" onClick="selectSudent1(\''+ student_name + '\', ' + student_id + ', 1)">' + info.nom + ' - '+ info.prénom + ' gr. '+ info.groupe +'</li>';
				  } 
				}	
					
				eleve_str += '</ul>';	
				
				$("#suggesstion-box_no_1").show();
				$("#suggesstion-box_no_1").html(eleve_str);
					
			}
		});	
	});
});

function selectSudent1(student_name, student_id) {
	//console.log(typeof val);
	$("#student_Id_no_1").val(student_id);
	//$('input[class="student_id"]').val(student_id);
	$("#search-box_no_1").val(student_name);
	$("#suggesstion-box_no_1").hide();
}




$(document).ready(function(){ $("body").on("click",".add_new_frm_field_btn", function (){ console.log("cliked"); var index = $(".form_field_outer").find(".form_field_outer_row").length + 1; $(".form_field_outer").append(`
<div class="row form_field_outer_row">

	<div class="form-group col-sm-6">
		<div class='col-sm-6 border'>	
			<input type="text" class="search-box form-control" name="search-box[${student_id}]" id="search-box_no_` + index + `" placeholder="Nom de l'élève" />
			<div class="suggesstion-box" name="suggesstion-box_no" id="suggesstion-box_no_` + index + `"></div>
			<input type="hidden"  name="student_Id_no_` + index + `" class="hidden_student_id" id="student_Id_no_` + index + `" value="N/A">
		</div>
	</div>
	
	<div class="form-group col-md-2 add_del_btn_outer">
		
        <button type="button" class="btn_round add_new_frm_field_btn" title="Copy or clone this row">
        	<i class="fas fa-copy"></i>
        </button>
        <button type="button" class="btn_round remove_node_btn_frm_field" disabled>
        	<i class="fas fa-trash-alt"></i>
        </button>
         
    </div>
    
</div>

`); 

$("#search-box_no_" + index).keyup(function(){
	$.ajax({
	url: "ajax",
	dataType: "json",
	data:'term='+$(this).val(),
	
		success: function(data){
			console.log(index)
			var eleve_str ;
			eleve_str = '<ul class="list-group" id="country-list">';
			
			for (let key in data) {
			  let value = data[key];
			  
			  for (student_id in value){
			  	let info=value[student_id];
			  		var student_name = info.nom + ' - ' + info.prénom + ' gr. ' + info.groupe;
			  		//var data_array = student_name + "_" + student_id;
					//console.log('<li class="list-group-item list-group-flush" onClick="selectSudent(\''+ student_name + '\',' + student_id + ',' + index + ')"> ' + info.nom + ' - '+ info.prénom + ' gr2. '+ info.groupe +'</li>')
			  		eleve_str +=  '<li class="list-group-item list-group-flush" onClick="selectSudent(\''+ student_name + '\', ' + student_id + ', ' + index + ')">' + info.nom + ' - '+ info.prénom + ' gr. '+ info.groupe +'</li>';
			  } 
			}	
				
			eleve_str += '</ul>';	
			
			$("#suggesstion-box_no_" + index).show();
			$("#suggesstion-box_no_" + index).html(eleve_str);
				
		}
	});	
});

$(".form_field_outer").find(".remove_node_btn_frm_field:not(:first)").prop("disabled", false); $(".form_field_outer").find(".remove_node_btn_frm_field").first().prop("disabled", true); }); });

function selectSudent(student_name, student_id, index) {
	//console.log(typeof val);
	$("#student_Id_no_" + index).val(student_id);
	//$('input[class="student_id"]').val(student_id);
	$("#search-box_no_" + index).val(student_name);
	$("#suggesstion-box_no_" + index).hide();
}

$(document).ready(function () {
  //===== delete the form fieed row
  $("body").on("click", ".remove_node_btn_frm_field", function () {
    $(this).closest(".form_field_outer_row").remove();
    console.log("success");
  });
});
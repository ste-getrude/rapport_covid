/**
 * https://www.bootstrapfriendly.com/blog/dynamically-add-or-remove-form-input-fields-using-jquery/
 * https://phppot.com/jquery/jquery-ajax-autocomplete-country-example/ 
 */

///======Clone method
$(document).ready(function () {
  $("body").on("click", ".add_node_btn_frm_field", function (e) {
    var index = $(e.target).closest(".form_field_outer").find(".form_field_outer_row").length + 1;
    var cloned_el = $(e.target).closest(".form_field_outer_row").clone(true);

    $(e.target).closest(".form_field_outer").last().append(cloned_el).find(".remove_node_btn_frm_field:not(:first)").prop("disabled", false);

    $(e.target).closest(".form_field_outer").find(".remove_node_btn_frm_field").first().prop("disabled", true);

    //change id
    $(e.target)
      .closest(".form_field_outer")
      .find(".form_field_outer_row")
      .last()
      .find("input[type='text']")
      .attr("id", "mobileb_no_" + index);

    $(e.target)
      .closest(".form_field_outer")
      .find(".form_field_outer_row")
      .last()
      .find("#no_type_1")
      .attr("id", "no_type_" + index);

	$(e.target)
      .closest(".form_field_outer")
      .find(".form_field_outer_row")
      .last()
      .find("input[type='hidden']")
      .attr("id", "custId_" + index);

    console.log(cloned_el);
    //count++;
  });
});

$(document).ready(function(){ $("body").on("click",".add_new_frm_field_btn", function (){ console.log("clicked"); var index = $(".form_field_outer").find(".form_field_outer_row").length + 1; $(".form_field_outer").append(`

<div class="row form_field_outer_row">
			
	<div class="col-sm-4 ">
		<input type="text" name="mobileb_no[]" id="mobileb_no_${index}" class="form-control search-box" placeholder="Nom de l'élève" />
		<div name="no_type[]" id="no_type_${index}" class="suggesstion-box"></div>
		<input type="hidden" name="custId_no[]" id="custId_${index}"  class="student_id">
	</div>

	<div class="form-group col-md-2 add_del_btn_outer">
        <button class="btn_round add_node_btn_frm_field" title="Copy or clone this row">
        	<i class="fas fa-copy"></i>
        </button>

        <button class="btn_round remove_node_btn_frm_field" disabled>
        	<i class="fas fa-trash-alt"></i>
        </button>
	</div>
	
</div>
`); $(".form_field_outer").find(".remove_node_btn_frm_field:not(:first)").prop("disabled", false); $(".form_field_outer").find(".remove_node_btn_frm_field").first().prop("disabled", true); }); });



$(document).ready(function () {
  //===== delete the form fieed row
  $("body").on("click", ".remove_node_btn_frm_field", function () {
    $(this).closest(".form_field_outer_row").remove();
    console.log("success");
  });
});


$(document).ready(function(){
	$("#mobileb_no_2").keyup(function(){
			
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
				$("#no_type_1").show();
				$("#no_type_1").html(eleve_str);
				$("#mobileb_no_1").css("background","#FFF");
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
	$("#mobileb_no_1").val(student_info);
	$("#no_type_1").hide();
}

/**
 *  Creates a transparent overlay by
 *  making the background elements not interactive and
 *  disabling scrolling.
 */
function createCurtain () {
	var curtain = document.body.appendChild( document.createElement('div') );
	curtain.id = "curtain";
    curtain.onkeypress = curtain.onclick = curtain.onmousedown = function() { 
		return false; 
	}
    $('body').addClass('stop-scrolling');
}

/**
 *  Removes the overlay  
 */
function removeCurtain() {
	$('#curtain').remove();
}
/**
 *  Displays default note form :
 *  -selector : id or class of the form  
 */
function displayForm(selector) {
	 createCurtain ();
	 // display default set of schools based on the county selected
	 // on every change of county the list of schools will change accordingly.
	 var county = returnArrayOfSchools( $("#county option:selected").html() );
	 $('#school').empty();
	 for(var i=0; i<county.length; i++) {
	  	 var option  = '<option>';
		 	 option += county[i];
			 option += '</option>';
			 $('#school').append(option);
	 }
	 $(selector).css('display','block'); 
}
/**
 *  Hides the form
 */
function closeForm() {
	 // clear error list
	 $('#errorDiv').remove();
	 // clear the fields
	 $('#name').val('');
	 $('#email').val('');
     // close
	 $('#form').css('display','none');
	 removeCurtain();
}
/**
 * Validates e-mail addresses.
 * Regex taken from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
 * -true : if the e-mail is valid, false otherwise
 */
function validEmail(email) { 
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}
/**
 * Validates names by checking if the name provided is empty.
 * Assumption: name can never be empty
 * -true: if the name is empty or composed of newline characters, spaces or tabs; false otherwise
 */
function emptyName(name) { 
	var regex = /^(\s)+$/;
    if(name.length == 0) {
		return true;
	}
	else if (regex.test(name)){
		return true;
	}
	else {
		return false;
	}
}
/**
 * Creates JSON Object based on information provided by the user
 * and submits the data along with the solution via ajax call.
 */
function submitData() {
     var errors = [];
     if ( emptyName(($('#name').val())) ) {
		 errors.push("Name field is empty! Please provide your name.");
	 }
	 if( !validEmail($('#email').val()) ) {
		 errors.push("E-mail address provided is invalid! Please double check your input.");
	 }
	 if ( errors.length == 0 ) {
		var leftSet = [];
		var leftSetElements = document.getElementById('leftPool').getElementsByClassName('element');
		for(var i=0; i<leftSetElements.length; i++) {
			leftSet.push(getPrecision(parseInt($(leftSetElements[i]).text())));
		}
		var rightSet = [];
		var rightSetElements = document.getElementById('rightPool').getElementsByClassName('element');
		for(var i=0; i<rightSetElements.length; i++) {
			rightSet.push(getPrecision(parseInt($(rightSetElements[i]).text())));
		} 
		var completeSolution = {
			 'difference' : $('#realDifference').text(),
			 'name' : $('#name').val(),
			 'county' : $('#county').val(),
			 'school' : $('#school').val(),
			 'year' : $('#year').val(),
			 'email' : $('#email').val(),
			 'set1' : leftSet,
			 'set2' : rightSet,
		};
	 $.ajax({
		 type: "POST",
		 dataType: "json",
		 data: "completeSolution="+JSON.stringify(completeSolution),
		 async : true,
		 url: 'someURL',
		 success: function(data){
			 reset();
			 closeForm();
			 alert("Your solution has been successfully submitted. Thank you.");
		 },
		 error: function() {
				 reset();
				 closeForm();
				 alert("Something went wrong on the server. Please try again later");
		 }
	});
	}
	else {
		if($('#errorDiv').length > 0) {
			// if the div exists: erase the errors
			$('#errorDiv').empty();
		}
		else {
			// if it doesn't exist create one
			$('<div class="error" id="errorDiv" />').appendTo('#form');
		}
		// create paragraphs containing error entries 
		var paragraphs = '';
		$.each(errors,function(count,item) {
			paragraphs += '<p>'+item+'</p>';  
		})
		$('#errorDiv').append(paragraphs);
	}
}

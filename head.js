$(document).ready(function() {
	// sort the numbers in ascending order
	numbers.sort(function(a,b){return a-b});
	
	// display the numbers
	for(var i=0; i<numbers.length; i++) {
		var paragraph  = '<span class="element">';
			paragraph += numbers[i];
			paragraph += '</span>';
			$('#num').append(paragraph);
	}
	
	// populate the county dropdown
	for(var i=0; i<counties.length; i++) {
		var option  = '<option>';
			option += counties[i];
			option += '</option>';
			$('#county').append(option);
	}
	// settings for draggable
	$(".element").draggable({
		helper:"clone",
		containment:"document",
		opacity: 0.5	
	});
	
	/**
	*	This function ensures updating the subsums
	*	should the user move a number back to the 
	*	top.
	*/
	$("#num").droppable({
		drop:function(event, ui) {
			// number that has been moved
			var numberMoved = ui.draggable[0].innerHTML;
			if(!doubleDrop ('num', numberMoved)) {
				// booleans: true if the particular side should be 
				// recalculated, eg the sequence of numbers has
				// changed
				var recalculateLeft = false;
				var recalculateRight = false;
				// move the object
				ui.draggable.detach().appendTo($(this));
				// double check left side
				var leftSum = 0;
				var leftPool = document.getElementById('leftPool')
				var elements = leftPool.getElementsByClassName('element');
				for(var i=0; i<elements.length; i++) {
					if (parseInt($(elements[i]).text()) != numberMoved) {
						leftSum += getPrecision(parseInt($(elements[i]).text()));
					}
					// if the sequence has changed set the left boolean to true
					else if (parseInt($(elements[i]).text()) == numberMoved) {
						recalculateLeft = true;
					}
				}
				// double check right side
				var rightSum = 0;
				var rightPool = document.getElementById('rightPool')
				var elements = rightPool.getElementsByClassName('element');
				for(var i=0; i<elements.length; i++) {
					if (parseInt($(elements[i]).text()) != numberMoved) {
						rightSum += getPrecision(parseInt($(elements[i]).text()));
					}
					else if (parseInt($(elements[i]).text()) == numberMoved) {
						recalculateRight = true;
					}
				}		
				if(recalculateLeft === true) {	
					// clear left counter
					clearCounter('#LR');
					// update the left subsum
					var leftResult = '<span id="LR">';
						leftResult += leftSum;
						leftResult += '</span>';
					$('#leftCounter').append(leftResult);
				}
				if(recalculateRight === true) {
					// clear right counter
					clearCounter('#RR');
					// update the right subsum
					var rightResult = '<span id="RR">';
						rightResult += rightSum;
						rightResult += '</span>';
					$('#rightCounter').append(rightResult);
				}
			}
			// update the difference
			getTheDifference();
		},
		// makes both pools light up when an element starts to drag
		activate: function( event, ui ) {
			$('#leftPool').css('background-color','#ffffcc');
			$('#rightPool').css('background-color','#ffffcc');
		},
		// removes the background colour of both pool when an element
		// stops to drag (eg. the light-up effect is gone)
		deactivate: function( event, ui ) {
			$('#leftPool').css('background-color','transparent');
			$('#rightPool').css('background-color','transparent');
		}
	});
	
	
	// left pool
	$("#leftPool").droppable({
		drop:function(event, ui) {
			var numberMoved = ui.draggable[0].innerHTML;
			if(!doubleDrop ('leftPool', numberMoved)) {
				// clear left subsum 
				clearCounter('#LR');
				// move the object
				ui.draggable.detach().appendTo($(this));
				// booleans: true if the particular side should be 
				// recalculated, eg the sequence of numbers has
				// changed
				var recalculateRight = false;
				var sum = 0;
				var leftPool = document.getElementById('leftPool')
				var elements = leftPool.getElementsByClassName('element');
				for(var i=0; i<elements.length; i++) {
					sum += getPrecision(parseInt($(elements[i]).text()));
				}
				// update the left subsum
				var leftResult = '<span id="LR">';
					leftResult += sum;
					leftResult += '</span>';
				$('#leftCounter').append(leftResult);
				
				// double check right side
				var rightSum = 0;
				var rightPool = document.getElementById('rightPool')
				var elements = rightPool.getElementsByClassName('element');
				for(var i=0; i<elements.length; i++) {
					if (parseInt($(elements[i]).text()) != numberMoved) {
						rightSum += getPrecision(parseInt($(elements[i]).text()));
					}
					else if (parseInt($(elements[i]).text()) == numberMoved) {
						recalculateRight = true;
					}
				}
				if(recalculateRight === true) {
					// clear right counter
					clearCounter('#RR');
					// update the right subsum
					var rightResult = '<span id="RR">';
						rightResult += rightSum;
						rightResult += '</span>';
					$('#rightCounter').append(rightResult);
				}
			}
			// update the difference
			getTheDifference();
		}
	});
	// right pool
	$("#rightPool").droppable({
		drop:function(event, ui) {
			var numberMoved = ui.draggable[0].innerHTML;
			if(!doubleDrop ('rightPool', numberMoved)) {
				// clear right subsum
				clearCounter('#RR');
				// move the object
				ui.draggable.detach().appendTo($(this));
				// booleans: true if the particular side should be 
				// recalculated, eg the sequence of numbers has
				// changed
				var recalculateLeft = false;
				var sum = 0;
				var rightPool = document.getElementById('rightPool')
				var elements = rightPool.getElementsByClassName('element');
				for(var i=0; i<elements.length; i++) {
					sum += getPrecision(parseInt($(elements[i]).text()));
				}
				// update the right subsum
				var rightResult = '<span id="RR">';
					rightResult += sum;
					rightResult += '</span>';
				$('#rightCounter').append(rightResult);	
					
				// double check left side
				var leftSum = 0;
				var leftPool = document.getElementById('leftPool')
				var elements = leftPool.getElementsByClassName('element');
				for(var i=0; i<elements.length; i++) {
					if (parseInt($(elements[i]).text()) != numberMoved) {
						leftSum += getPrecision(parseInt($(elements[i]).text()));
					}
					// if the sequence has changed set the left boolean to true
					else if (parseInt($(elements[i]).text()) == numberMoved) {
						recalculateLeft = true;
					}
				}
				if(recalculateLeft === true) {	
					// clear left counter
					clearCounter('#LR');
					// update the left subsum
					var leftResult = '<span id="LR">';
						leftResult += leftSum;
						leftResult += '</span>';
					$('#leftCounter').append(leftResult);
				}		
			}
			// update the difference
			getTheDifference();
		}
	});
});

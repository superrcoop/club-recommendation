
//var club = ["Football","Cricket","UWI Choir","Uwi Dance society","Uwi Visual Arts society","Uwi Computing society","Uwi Law society","Rotaract Club"]
window.onload=function(){
	//showFrontSectionOnly()
	hideAllSections()			
	$('#homePage').removeClass('hide');
	//Add event listener
	/*document.body.addEventListener('click', function (this) {
		hideAllSections()
		console.log(this.getElementById());
		showSection(event)
	});*/

	document.getElementById('surveyButton').click("click", function(){
		hideAllSections()
		$('#survey').removeClass('hide');

	});

	//survey analysis 
	$('[data-loading-start]').click(function() {
	  $(this).addClass('hide');
	  $(this).parent().find('[data-loading-end]').removeClass('hide');
	  setTimeout(function() {
	    $('[data-loading-start]').removeClass('hide');
	    $('[data-loading-end]').addClass('hide');
	    $('[data-success-message]').removeClass('hide')
	  }, 5000)
	});

		// Open Card Reveal Click
	$('.open-button').click(function(){
	  $(this).siblings('.card-reveal').toggleClass('open');
	});

	// Close Card Reveal Click
	$('.close-button').click(function(){
	  $(this).parent().parent('.card-reveal').toggleClass('open');
	});


}

// hides all sections from view
function hideAllSections(){
	//document.querySelector('#' + 'section').hide()	
}

//show section on click
function showSection(event){
	hideAllSections()
	const sectionId = event.target.dataset.section
	$('#' + sectionId).removeClass('hide');
}


function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}




//var club = ["Football","Cricket","UWI Choir","Uwi Dance society","Uwi Visual Arts society","Uwi Computing society","Uwi Law society","Rotaract Club"]
window.onload=function(){
	//showFrontSectionOnly()
	
	//Add event listener
	document.body.addEventListener('click', function (event) {
		if (event.target.dataset.section) {
			hideAllSections()
			showSection(event)
		}
	})
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
	//document.querySelector(#) + ' section').hide()
}

//show section on click
function showSection(event){
	const sectionId = event.target.dataset.section
	$('#' + sectionId).show()
	$('#' + sectionId + ' section').show()
}

// show main window only on window.load()
function showHomeSectionOnly(){
	//..
}

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}



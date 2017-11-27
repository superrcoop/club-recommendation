window.onload=function(){
	//showHomeSection()

	//Add event listener
	document.body.addEventListener('click', function (event) {
		if (event.target.dataset.section) {
			hideAllSections()
			showSection(event)
		}
	})

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
function showHomeSection(){
	//..
}


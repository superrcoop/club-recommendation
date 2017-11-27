// This file is required by the index.html file and will
// be executed in the renderer process for that window.

const links = document.querySelectorAll('link[rel="import"]')

// Import and add each page to the DOM
Array.prototype.forEach.call(links, function (link) {
	let template = link.import.querySelector('.win-template')
	let clone = document.importNode(template.content, true)
	document.querySelector('#window').appendChild(clone)
})


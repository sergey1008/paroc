import $ from "jquery"


window.$ = $;
window.jQuery = $;

window.get$ = (element) => {
	return $(element)
}

let isFancyboxReady = false;

import("./jquery.fancybox.js")
	.then(() => {
		const event = document.createEvent("HTMLEvents");

		event.initEvent("fancyboxReady", false, true)

		document.dispatchEvent(event);
		isFancyboxReady = true

	})

require("../css/jquery.fancybox.css")

window.fancyboxReady = callback => {
	if (isFancyboxReady)
		callback()
	else
		document.addEventListener("fancyboxReady", callback)
}


document.addEventListener("DOMContentLoaded", function(){
	fancyboxReady(initFancybox)
})

const initFancybox = () => {
	$(".fancybox").fancybox({
		trapFocus: false,
		touch: false, 
		loop: true,
		buttons: ["fullscreen", "slideShow", "close", "thumbs"],
		image: {
			preload: true,
		},
		transitionEffect: "slide",
	});
}

document.addEventListener("DOMContentLoaded",  () => {
	const phoneInputs = document.querySelectorAll("input.phone, .input-phone, .mask--phone-ru"),
		timeInputs = document.querySelectorAll('input.time'),
		dateInputs = document.querySelectorAll("input.MaskDate");

	if (phoneInputs.length || timeInputs.length || dateInputs.length)
		import("imask").then(function() {
			for (const phoneInput of phoneInputs)
				new IMask(phoneInput, {
					mask: "+{7} (900) 000-00-00"
				})
		});

	
	$(".characteristic__item-title").height(Math.max(...$(".characteristic__item-title").map(function(){
		return $(this).height();
	})));



})
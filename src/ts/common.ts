import "./forms"
import "./textPage/text-page"

import {domReady} from "./xpage/index"

declare global {
    interface Window {
    	animateScroll: Function; 
    	isScrolledIntoView: Function;
    	get$: Function;
    	preloaderTimer: NodeJS.Timeout;
    	is: any;
    }
}

domReady(() => {
	document.body.classList.add("loaded")
	document.body.classList.remove("loading")
})
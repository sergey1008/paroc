import App from "./core"
import Element from "./Element"

interface EventOtions{
	capture?: boolean,
	once?: boolean,
	passive?: boolean
}

export default class EventListener extends Element{

	/** 
	* Метод для подписки на событие
	* @param event: string - название js события
	* @param callback: function
	* @param options: object
	* @return EventListener
	*/
	public add(event: string, callback: any, options?: EventOtions): EventListener{
		const self = this;
		if (this._selector)
			document.body.addEventListener(event, function(e){
				App.each(self._selector, function(el:HTMLElement, i: number){
					const target = e.target as HTMLElement;

					if (el.contains(target)
						|| el == target)
						callback(el, e, i)
				})
			}, options)
		else
			App.each(this.els, function(el:HTMLElement, i: number){
				document.body.addEventListener(event, function(e){
					const target = e.target as HTMLElement;

					if (el.contains(target)
						|| el == target)
						callback(el, e, i)
				}, options)
			})

		return this
	}

	/** 
	* Метод для вызова события
	* @param event: string - название js события
	* @return EventListener
	*/
	public trigger(event: string): EventListener{
		App.each(this.els, function(el: HTMLElement){
			let evt: Event = document.createEvent("HTMLEvents");

			evt.initEvent(event, false, true)
			el.dispatchEvent(evt)
		})

		return this
	}
}
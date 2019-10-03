import randomInt from "../functions/randomInt"
// import {TweenLite} from "gsap"
// import Counter from "./counter"
import partitionNumber from "../functions/partNumber"

document.addEventListener("DOMContentLoaded", () => {
	const loadStepsCount = randomInt(4, 10), // Количество шагов в загрузчике
		loadingTime = randomInt(1, 4), // Время работы загрузчика
		progressLine = document.querySelector(".l-line__line-progress") as HTMLElement,
		progressCounter = document.querySelector(".l-line__text span") as HTMLElement;

	let loadPercentsForSteps: number[] = new Array(loadStepsCount), // Массив процентов загрузки для каждого шага
		timeForSteps: number[] = new Array(loadStepsCount); // Время прохода каждого шага
	
	// последний элемент всегда 100
	loadPercentsForSteps[loadPercentsForSteps.length - 1] = 100
	timeForSteps[timeForSteps.length - 1] = .1

	for (let i = 0; i < loadPercentsForSteps.length - 1; i++){
		loadPercentsForSteps[i] = (i > 0 
									? randomInt(
										loadPercentsForSteps[i - 1] + 1, 
										parseInt((100 / loadStepsCount * i).toString())
									  ) 
									: randomInt(
										parseInt((document.querySelector(".l-line__text span") as HTMLElement).innerText), 
										parseInt((100 / loadStepsCount).toString())
									  )
								)

		timeForSteps[i] = randomInt(50, 200) / 1000
	}

	console.log(loadPercentsForSteps)

	let curStep = 0;
	const loadingAnimate = (step: number, time: number) => {
		curStep++

		progressLine.style.transitionDuration = `${time}s`;
		progressLine.style.transform = `scaleX(${step / 100})`;

		const timerInterval = setInterval(function(){
			let curNumber = parseInt(progressCounter.innerText);

			progressCounter.innerText = `${curNumber < 100 ? curNumber+=1 : 100}`

			if (curNumber == loadPercentsForSteps[curStep - 1])
				clearInterval(timerInterval)
		}, time / loadPercentsForSteps[curStep - 1]);

		// console.log(time / loadPercentsForSteps[curStep - 1])

		setTimeout(function(){
			if (curStep < loadStepsCount){
				loadingAnimate(loadPercentsForSteps[curStep], timeForSteps[curStep]);
			}else{
				document.body.classList.remove("loading")
				document.body.classList.add("loaded")
			}
		}, time)

		// TweenLite.to(progressLine, time, {
		// 	scaleX: step / 100,
		// 	onComplete(){
		// 		if (curStep < loadStepsCount)
		// 			loadingAnimate(loadPercentsForSteps[curStep], timeForSteps[curStep])
		// 		else{
		// 			document.body.classList.remove("loading")
		// 			document.body.classList.add("loaded")
		// 		}
		// 	}
		// })

		// Counter(progressCounter, time, loadPercentsForSteps[curStep - 1])
	};

	loadingAnimate(loadPercentsForSteps[0], timeForSteps[0])
})
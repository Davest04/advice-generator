function getAdvice(){
	fetch("https://api.adviceslip.com/advice")
	.then((resp) => resp.json())
	.then((data) => {
		document.querySelector(".advice-container__advice").innerHTML = `"${data.slip.advice}"`
		document.querySelector(".advice-container__advice-counter").innerHTML = `ADVICE # ${data.slip.id}`
	})
}
window.onload = getAdvice()
document.querySelector(".advice-container__button").addEventListener("click", () => getAdvice())
alert("Get Advice On issues You Want to resolve Created By Davest");
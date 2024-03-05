//your code here
function swapTheme() {
	const appDiv = document.getElementById("app");
	const btn = document.getElementById("swap");
	if(appDiv.classList.contains("day")){
		appDiv.classList.remove("day");
		appDiv.classList.add("night");
		btn.classList.remove("button_day");
		btn.classList.add("button_night");
	}else{
		appDiv.classList.remove("night");
		appDiv.classList.add("day");
		btn.classList.remove("button_night");
		btn.classList.add("button_day");
	}
}

var santoTower = document.getElementById("a");
var williamsTower = document.getElementById("b");
var beerButton1 = document.getElementById("btna");
var beerButton2 = document.getElementById("btnb");

function beerToggle1() {
	if (beerButton1.classList.contains("active")) {
		return
	} else {
		beerButton1.classList.add("active");
		santoTower.classList.add("active");
		williamsTower.classList.remove("active");
		beerButton2.classList.remove("active");
	}
}

function beerToggle2() {
	if (beerButton2.classList.contains("active")) {
		return
	} else {
		williamsTower.classList.add("active");
		beerButton2.classList.add("active");
		santoTower.classList.remove("active");
		beerButton1.classList.remove("active");
	}
 }


beerButton1.addEventListener("click", beerToggle1);
beerButton2.addEventListener("click", beerToggle2);

/*Probably need to add a "forEach" here to make the listener apply to both of the buttons*/
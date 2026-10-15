const TEXTE_DEFAUT =
	"Mouse over the sun and the planets and see the different descriptions.";

function writeText(txt)
{
	document.getElementById("desc").innerHTML = txt;
}

function showPlanet(src)
{
	const img = document.getElementById("image_planete");
	img.src = src;
	img.style.display = "inline-block";
}

function writeDefault()
{
	writeText(TEXTE_DEFAUT);
	const img = document.getElementById("image_planete");
	img.removeAttribute("src");
	img.style.display = "none";
}

function writeSun()
{
	writeText("The Sun and the gas giant planets like Jupiter are by far the largest objects in our Solar System.");
	showPlanet("images/sun.gif");
}

function writeMercury()
{
	writeText("The planet Mercury is very difficult to study from the Earth because it is always so close to the Sun.");
	showPlanet("images/merglobe.gif");
}

function writeVenus()
{
	writeText("Until the 1960s, Venus was often considered a twin sister to the Earth because Venus is the nearest planet to us, and because the two planets seem to share many characteristics.");
	showPlanet("images/venglobe.gif");
}

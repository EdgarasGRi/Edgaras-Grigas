
//tuscias masyvas alsbuamns
album = [];



//Gauti visu grupiu rezultatus paspaudus mygtuka
let txt_Atlikejas = document.getElementById("Atlikejas");
let txt_Albumas = document.getElementById("Albumas");
let txt_Metai = document.getElementById("Metai");
let txt_Kaina = document.getElementById("Kaina");
 

//TODO apsirasyti mygtuka
let btn_submit = document.getElementById("Register");
btn_submit.addEventListener("click", addAlbum);

//sukuariam funkcija  kuris bus vygdoma paspaudus mygtukui
function addAlbum() {

	//surenkam visus elementus is formos
	let Atlikejas = txt_Atlikejas.value;
	let Albumas = txt_Albumas.value;
	let Metai = txt_Metai.value;
	let Kaina = txt_Kaina.value;

	//sukuriam objekta
	let c = {
		Atlikejas: Atlikejas, 
		Albumas: Albumas,
		Metai: Metai,
		Kaina: Kaina
	};

	album.push(c);

	Array_Album(album);
	console.log(album.length);
	
}

//Sukuriam kad atspausdinti albumus y ekrana
function printAlbum(Albums){
	var r = "";
		r = r + "<h3>" + Albums.Atlikejas +" "+ Albums.Albumas + "</h3>" ;
		r = r + "<h3>"+"Isleidimo metai" + " " + Albums.Metai + ".m" + "</h3>";
		r = r + "<h3>"+"Albumo kaina" + " " + Albums.Kaina + "$" + "</h3>";
		r = r + "<hr>";
	return r; 
}

//padarom kad rezultata kauptu y masyva
function  Array_Album (x) {
	var res = "";
	
	for(var i=0; i<x.length; i++){
		
		res = res + printAlbum(x[i]);
	}
	document.getElementById("result").innerHTML = res;
}


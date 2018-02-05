
$( document ).ready(function() {
	$(".btn").click(function(){
		// apsirasom ka pasirenkame is galima masinu
		let brand = $("#brandselect").val();

		filterbrand(brand);
		
	});
	
});

//apsirasom funkcija kuri filtruotu pasirinkta masina
function filterbrand(brand){
	let brandArray = CARS.filter(function (cars) {
		//console.log(car.brand +" ir "+brand);
		return cars.brand.toLowerCase() == brand.toLowerCase();
	});
	
	//console.log(brandArray);
	//Atvaizduoti brandArray
	displayArray(brandArray);

}
//sukuriam funkcija kad pereitu per vissas masinas
function displayArray(a){
	let h = "";
	
	for(var i = 0;i<a.length;i++){
		h = h + PrintCars(a[i]);
	}
	$(".result").html(h);
	
	//atvaizduoti naujausia masina
	showNewest(a);
}

//sukuriam funkcija, atspausdinti masina y ekrana
function PrintCars(a){
	h = "<h5>"+a.brand+" "+a.model+"</h3>";
	h = h + "<div class='brandImg'><img src='img/"+a.brand+".png' alt='"+a.brand+" "+a.model+"' /></div>";
	h = h + "<table class='car_table'>";
	h = h + "<tr><th>Seats:</th><td>"+a.seats+"</td></tr>";
	h = h + "<tr><th>HP:</th><td>"+a.power+"</td></tr>";
	h = h + "<tr><th>Mileage:</th><td>"+a.mileage+"</td></tr>";
	h = h + "<tr><th>Date:</th><td>"+a.date+"</td></tr>";
	h = h + "</table>";
	h = h + "<hr>";
	return h;
}

// pasirinkti kad spausdintu naujausia masina
function showNewest(a){
	let newestCar = a[0];
	for(var i = 0;i<a.length;i++){
		if(newestCar.date < a[i].date ){
			newestCar = a[i];
		}
	}
	
	$(".result1").html(PrintCars(newestCar));
}

$( document ).ready(function() {
	$("#btn_search").click(function(){
		var errors = [];

		$(".numeric").each(function () {
			$(this).removeClass("is-invalid");
			let field_rel = $(this).attr("rel"); // gauna HP from  ir HP to pavadinimus
			let _val = $(this).val();   // gauna rezultatus is HP from ir  HP ka yvedame
			
			
			if(_val){			
				if(isNaN(_val)){ // jaigu _val nera skaicius tai veikai sitas
					errors.push(field_rel +" turi but numeris."); 
					$(this).addClass("s-invaliid");
				}				
			}else{
				$(this).addClass("is-invalid");
				errors.push(field_rel+" yra privalomas."); // jaigu nieko neyrasai veikia sitas
			}

		});

		if(errors.length > 0){
			showErrors(errors);
		}else{
			let car_mass = CARS;
			
			if($("#Brand").val()){
				let brand = $("#Brand").val();
				cars_mass = BrandCars(car_mass, brand);
				
			}

			if($("#Model").val()){			
				let model = $("#Model").val();
				cars_mass = ModelCars(cars_mass, model);
			}

			let hp_from_val = $("#hp_from").val();
			let hp_to_val = $("#hp_to").val();
			cars_mass= findCarsByHP(cars_mass, hp_from_val, hp_to_val);

			printCars(cars_mass);
			getLowerMilage(cars_mass);
		}
		
	});
});

//Susikuriam funkcija kuri kaupia erorus

function showErrors(errors){
	var h = "";
	for(var i = 0;i<errors.length;i++){
		h = h + "<p class='error_msg'>"+errors[i]+"</p>";
	}
	$("#result").html(h);
}

//Sukuriam funkcija kuri eitu per visa masyva ir tikrintu masinu brandus
function BrandCars(mass, brand){
	let brandArray= mass.filter(function(car) {
		return car.brand.toLowerCase() == brand.toLowerCase();
	});
	return brandArray;
}


//Sukuriam funkcija kuri eitu per visa masyva ir tikrintu masinu modeliu
function ModelCars(array, model){	
	let modelArray = array.filter(function (car) {
		return car.model.toLowerCase() == model.toLowerCase();
	});
	return modelArray;
}

//Sukuriam funkcija kuri eitu per visa masyva ir tikrintu masinu kilometraza
function findCarsByHP(array, hp_from_val, hp_to_val){
	let hp_from = 0;
	let hp_to = 9999999;
	
	if(hp_from_val){
		hp_from = parseInt(hp_from_val);		
	}
	
	if(hp_to_val){		
		hp_to = parseInt(hp_to_val);		
	}
	
	let cararray = array.filter(function (car) {
		return car.power >= hp_from && car.power <= hp_to;
	});	
	return cararray;
}

//sukuriam funkcija  atspausdinti masina kurios killometrazas didziausias
function getLowerMilage(cars){
	if(cars.length > 0){
		var car = cars[0];
		
		for(var i = 0;i<cars.length;i++){
			if(car.mileage > cars[i].mileage){
				car = cars[i];
			}
		}
		$("#result").html(displayCars(car));
	}	
}


// sukuriam funkcija kad spausdinti masinas
function printCars(array){
	let h = "";
	for(var i=0; i<array.length; i++){
		h = h + displayCars(array[i]);
	}
	$("#SearchRez").html(h);
}


// sukuriam funkcija kad spausdinti masina y ekrana
function displayCars(c){
	let h = "";
			h = h + "<h2>"+c.brand+" "+c.model+"</h2>";
			h = h + "<img class='carImg' src='img/"+c.brand+".png'  alt='"+c.brand+"' />";
			h = h + "<table>";
			h = h + "<tr><th>HP:</th><td>"+c.power+"</td></tr>";
			h = h + "<tr><th>Seats:</th><td>"+c.seats+"</td></tr>";
			h = h + "<tr><th>Mileage:</th><td>"+c.mileage+"</td></tr>";
			h = h + "<tr><th>Date:</th><td>"+c.date+"</td></tr>";
			h = h + "<tr><th>Region:</th><td>";
			h = h + "</table>";
			h = h + "<div class='separator'></div>";
	return h;
}








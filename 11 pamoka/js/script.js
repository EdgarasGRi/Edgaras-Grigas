var cars = [];

var car = {
	type:"Fiat",
	model:"500",
	year: 2005,
	color:"white",
	milage:100000,

	print: function () {
		console.log(this.type+" "+this.model+" "+" .Production date:"+this.year);
	},

	startengine: function () {
		console.log("Vroom-vroom-vrom...");
	}
/*drive : function (){}
stop: function () {}*/

};

var car2 = {
type:"BMW",
model:"5",
year: 2017,
color:"black",
milage:10,

print: function () {
	console.log(this.type+" "+this.model+" "+" .Production date:"+this.year);
},

startengine: function () {
	console.log("Vr...");
}

};

var car3 = {
type:"Lada",
model:"10",
year: 1973,
color:"orange",
milage:500000,

	print: function () {
		console.log(this.type+" "+this.model+" "+" .Production date:"+this.year);
	},

	startengine: function () {
		console.log("Vroom-Vroom-Vroom-Vroom-Vroom...");
	}

};

cars.push(car);
cars.push(car2);
cars.push(car3);

for(var i = 0;i<cars.length;i++){
	console.log(cars[i].print());
}

//console.log(JSON.stringify(cars));

//console.log(cars.length);

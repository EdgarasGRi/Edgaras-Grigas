var rainbow = [];
		
function addToArray(){
	//console.log("Gorainbow works!");	
	var newColor = document.getElementById("color").value;			
	//console.log(newColor);			
	rainbow.push(newColor);
	
	//console.log(rainbow);
	printarray(rainbow);
	
	document.getElementById("color").value = "";
	// random number between 0-8
	//var r = Math.floor(8*Math.random());
	//console.log(r);
	//document.body.style.background = rainbow[r];	

	//rainbow = swapcolors(rainbow,"orange","red");					
}

function removeFromArray(){
	//console.log("Gorainbow works!");	
	var removecolor = document.getElementById("color").value;			
	//console.log(newColor);			
	//rainbow.pop(removecolor); 			
	printarray();
}

function swapcolors(array, color1, color2){
	
}

function printarray(rainbow){
	console.log("masivo dydis:"+rainbow.length);
	for(var i = 0; i<rainbow.length;i++){
		console.log(rainbow[i]);
	}
}
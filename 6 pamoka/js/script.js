var array = [];	

//var btn_add = document.getElementById("add");


function addToList(){
	
	var product = document.getElementById("product").value;
	//console.log (product);
	array.push(product);
//	document.getElementById("result").innerHTML = product;
	PrintArray(array);
	
	

}

function PrintArray(arr){
	var h = "";
	h = "<ul>";
	for(var i = 0;i < arr.length;i++){
		h = h + "<li>" + arr[i] + "</li>";
	}
	h = h + "</ul>";
	document.getElementById("result").innerHTML = h;
	
}
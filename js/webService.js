window.onload=function(){
	document.getElementById("fromAmount").onkeyup = function() {cambiarDivisa()};
	document.getElementById("from").onchange = function() {cambiarDivisa()};
	document.getElementById("to").onchange = function() {cambiarDivisa()};
    cambiarDivisa();
};
function cambiarDivisa(){
	var api_key ="7a335f954509c0e156512f9513f0e9c3";
	var from = document.getElementById("from").value;
	var to = document.getElementById("to").value;
	var xmlHttp = new XMLHttpRequest();
	//
	//var url = "http://api.fixer.io/latest?symbols="+from+","+to;
	//
	// Nueva implementación Del Api
	//http://data.fixer.io/api/latest?access_key=7a335f954509c0e156512f9513f0e9c3&symbols=USD,MXN,COP&format=1
	var url = "	http://data.fixer.io/api/latest?access_key="+api_key+"&symbols="+from+","+to;
	xmlHttp.open("GET", url, true);
	xmlHttp.send();
	xmlHttp.onreadystatechange = function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			var result = xmlHttp.responseText;
			//alert(result);
			var jsResult = JSON.parse(result);
			var oneUnit = jsResult.rates[to]/jsResult.rates[from];
			var amount = document.getElementById("fromAmount").value;
			document.getElementById("toAmount").value = (oneUnit*amount).toFixed(6);
		}
	}
}
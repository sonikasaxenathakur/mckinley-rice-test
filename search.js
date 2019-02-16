$(document).ready(function(){
	$('#search').off().on('click', function(){
		$('popup').addClass('popon');
	});


	$('#record_search').off().on('click', function(){
		loadJson()
	});


});

var element = document.getElementById("jsondata");

function loadJson(){
	var request = new XMLHttpRequest();
	request.open('GET','search.json');
	request.onload = function(){
		//var data = request.responseText;

		var data = JSON.parse(request.responseText);

		fetchdata(data);

		
	};
	request.send();
}


function fetchdata(data1){

	var string = "";

	// var len = data1.length;

	//console.log(len + " >> " + data1.length)

	string += "<div>"
	for(i=0; i < data1.length; i++){
		//string  += "<p>" + data1[i].name + " occupation is " + data1[i].occupation + ".</p>"

		if(data1[i].name == "sonika")
		{
			string  += "<p> Occupation is " + data1[i].occupation;
		}

		string  += "</p>";

	}
	 
	string += "</div>"
	element.insertAdjacentHTML("beforeend", string)
}
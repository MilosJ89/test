const weatherData = {
	tempUnit: 'C',
	windSpeedUnit: 'm/s',
	days: [
	{day: 'Mon', temp: 22, windDirection: 'northEast', windSpeed: 10, type: 'suny'},
	{day: 'Tue', temp: 14, windDirection: 'northWest', windSpeed: 14, type: 'rainy'},
	{day: 'Wed', temp: 17, windDirection: 'southEast', windSpeed: 20, type: 'cloudy'},
	{day: 'Thu', temp: 20, windDirection: 'south', windSpeed: 15, type: 'suny'},
	{day: 'Fri', temp: 18, windDirection: 'northWest', windSpeed: 25, type: 'cloudy'},
	{day: 'Sat', temp: 25, windDirection: 'west', windSpeed: 8, type: 'suny'},
	{day: 'Sun', temp: 15, windDirection: 'southWest', windSpeed: 22, type: 'rainy'}
	]
}

//Function for display weather data
function displayWeather (){

	clearAll();

	var main = document.getElementById("main");

			var list1 = document.createElement("UL");
			list1.setAttribute("class","lista");
			main.appendChild(list1);

				var monday = document.createElement("LI");
				monday.innerHTML = "Day: " + weatherData.days[0].day;
				list1.appendChild(monday);

				var monTemp = document.createElement("LI");
				monTemp.innerHTML = "Temperature: "+ weatherData.days[0].temp + weatherData.tempUnit;
				list1.appendChild(monTemp);	

				var monDetails = document.createElement("LI");
				list1.appendChild(monDetails);

					monDetailsButton = document.createElement("BUTTON");
					monDetailsButton.innerHTML = "Details";
					monDetailsButton.setAttribute("onclick", "detailsWeatherMon ()"); 
					monDetails.appendChild(monDetailsButton);


				var list2 = document.createElement("UL");
				list2.setAttribute("class","lista");
				main.appendChild(list2);

					var tuesday = document.createElement("LI");
					tuesday.innerHTML = "Day: "+ weatherData.days[1].day;
					list2.appendChild(tuesday);

					var tueTemp = document.createElement("LI");
					tueTemp.innerHTML = "Temperature: "+ weatherData.days[1].temp + weatherData.tempUnit;
					list2.appendChild(tueTemp);	

					var tueDetails = document.createElement("LI");
					list2.appendChild(tueDetails);

						tueDetailsButton = document.createElement("BUTTON");
						tueDetailsButton.innerHTML = "Details";
						tueDetailsButton.setAttribute("onclick", "detailsWeatherTue ()"); 
						tueDetails.appendChild(tueDetailsButton);

				var list3 = document.createElement("UL");
				list3.setAttribute("class","lista");
				main.appendChild(list3);

					var wednesday = document.createElement("LI");
					wednesday.innerHTML = "Day: "+ weatherData.days[2].day;
					list3.appendChild(wednesday);

					var wedTemp = document.createElement("LI");
					wedTemp.innerHTML = "Temperature: "+ weatherData.days[2].temp + weatherData.tempUnit;
					list3.appendChild(wedTemp);	

					var wedDetails = document.createElement("LI");
					list3.appendChild(wedDetails);

						wedDetailsButton = document.createElement("BUTTON");
						wedDetailsButton.innerHTML = "Details";
						wedDetailsButton.setAttribute("onclick", "detailsWeatherWed ()"); 
						wedDetails.appendChild(wedDetailsButton);

				var list4 = document.createElement("UL");
				list4.setAttribute("class","lista");
				main.appendChild(list4);

					var thursday = document.createElement("LI");
					thursday.innerHTML = "Day: "+ weatherData.days[3].day;
					list4.appendChild(thursday);

					var thuTemp = document.createElement("LI");
					thuTemp.innerHTML = "Temperature: "+ weatherData.days[3].temp + weatherData.tempUnit;
					list4.appendChild(thuTemp);	

					var thuDetails = document.createElement("LI");
					list4.appendChild(thuDetails);

						thuDetailsButton = document.createElement("BUTTON");
						thuDetailsButton.innerHTML = "Details";
						thuDetailsButton.setAttribute("onclick", "detailsWeatherThu ()"); 
						thuDetails.appendChild(thuDetailsButton);

				var list5 = document.createElement("UL");
				list5.setAttribute("class","lista");
				main.appendChild(list5);

					var friday = document.createElement("LI");
					friday.innerHTML = "Day: "+ weatherData.days[4].day;
					list5.appendChild(friday);

					var friTemp = document.createElement("LI");
					friTemp.innerHTML = "Temperature: "+ weatherData.days[4].temp + weatherData.tempUnit;
					list5.appendChild(friTemp);	

					var friDetails = document.createElement("LI");
					list5.appendChild(friDetails);

						friDetailsButton = document.createElement("BUTTON");
						friDetailsButton.innerHTML = "Details";
						friDetailsButton.setAttribute("onclick", "detailsWeatherFri ()"); 
						friDetails.appendChild(friDetailsButton);
				
				var list6 = document.createElement("UL");
				list6.setAttribute("class","lista");
				main.appendChild(list6);

					var saturday = document.createElement("LI");
					saturday.innerHTML = "Day: "+ weatherData.days[5].day;
					list6.appendChild(saturday);

					var satTemp = document.createElement("LI");
					satTemp.innerHTML = "Temperature: "+ weatherData.days[5].temp + weatherData.tempUnit;
					list6.appendChild(satTemp);	

					var satDetails = document.createElement("LI");
					list6.appendChild(satDetails);

						satDetailsButton = document.createElement("BUTTON");
						satDetailsButton.innerHTML = "Details";
						satDetailsButton.setAttribute("onclick", "detailsWeatherSat ()"); 
						satDetails.appendChild(satDetailsButton);

				var list7 = document.createElement("UL");
				list7.setAttribute("class","lista");
				main.appendChild(list7);

					var sunday = document.createElement("LI");
					sunday.innerHTML = "Day: "+ weatherData.days[6].day;
					list7.appendChild(sunday);

					var sunTemp = document.createElement("LI");
					sunTemp.innerHTML = "Temperature: "+ weatherData.days[6].temp + weatherData.tempUnit;
					list7.appendChild(sunTemp);	

					var sunDetails = document.createElement("LI");
					list7.appendChild(sunDetails);

						sunDetailsButton = document.createElement("BUTTON");
						sunDetailsButton.innerHTML = "Details";
						sunDetailsButton.setAttribute("onclick", "detailsWeatherSun ()"); 
						sunDetails.appendChild(sunDetailsButton);
}

displayWeather();

//Details for monday
function detailsWeatherMon (){
	clearAll();

	var main = document.getElementById("main");

		var list1 = document.createElement("UL");
		list1.setAttribute("class","listaDetails");
		main.appendChild(list1);

			var monday = document.createElement("LI");
			monday.innerHTML = "Day: " + weatherData.days[0].day;
			list1.appendChild(monday);

			var monTemp = document.createElement("LI");
			monTemp.innerHTML = "Temperature: "+ weatherData.days[0].temp + weatherData.tempUnit;
			list1.appendChild(monTemp);	

			var monWD = document.createElement("LI");
			monWD.innerHTML = "Wind direction: "+ weatherData.days[0].windDirection;
			list1.appendChild(monWD); 		

			var monWS = document.createElement("LI");
			monWS.innerHTML = "Wind speed: "+ weatherData.days[0].windSpeed + weatherData.windSpeedUnit ;
			list1.appendChild(monWS);

			var monType = document.createElement("LI");
			monType.innerHTML = "Type: "+ weatherData.days[0].type;
			list1.appendChild(monType);

			var monTypeDirection = document.createElement("I");
			monTypeDirection.setAttribute("class", "fas fa-angle-double-down");
			list1.appendChild(monTypeDirection);

			var back = document.createElement("LI");
			list1.appendChild(back);

				var backButton = document.createElement("BUTTON");
				backButton.innerHTML = "BACK";
				backButton.setAttribute("onclick", "displayWeather ()");
				back.appendChild(backButton);
}

//Details for tuesday
function detailsWeatherTue (){
	clearAll();

	var list2 = document.createElement("UL");
		list2.setAttribute("class","listaDetails");
		main.appendChild(list2);

			var tuesday = document.createElement("LI");
			tuesday.innerHTML = "Day: "+ weatherData.days[1].day;
			list2.appendChild(tuesday);

			var tueTemp = document.createElement("LI");
			tueTemp.innerHTML = "Temperature: "+ weatherData.days[1].temp + weatherData.tempUnit;
			list2.appendChild(tueTemp);	

			var tueWD = document.createElement("LI");
			tueWD.innerHTML = "Wind direction: "+ weatherData.days[1].windDirection;
			list2.appendChild(tueWD); 		

			var tueWS = document.createElement("LI");
			tueWS.innerHTML = "Wind speed: "+ weatherData.days[1].windSpeed + weatherData.windSpeedUnit;
			list2.appendChild(tueWS);

			var tueType = document.createElement("LI");
			tueType.innerHTML = "Type: "+ weatherData.days[1].type;
			list2.appendChild(tueType);

			var tueTypeDirection = document.createElement("I");
			tueTypeDirection.setAttribute("class", "fas fa-angle-double-left");
			list2.appendChild(tueTypeDirection);

			var back = document.createElement("LI");
			list2.appendChild(back);

				var backButton = document.createElement("BUTTON");
				backButton.innerHTML = "BACK";
				backButton.setAttribute("onclick", "displayWeather ()");
				back.appendChild(backButton);

}

//Details for wednesday
function detailsWeatherWed (){
	clearAll();

		var list3 = document.createElement("UL");
		list3.setAttribute("class","listaDetails");
		main.appendChild(list3);

			var wednesday = document.createElement("LI");
			wednesday.innerHTML = "Day: "+ weatherData.days[2].day;
			list3.appendChild(wednesday);

			var wedTemp = document.createElement("LI");
			wedTemp.innerHTML = "Temperature: "+ weatherData.days[2].temp + weatherData.tempUnit;
			list3.appendChild(wedTemp);	

			var wedWD = document.createElement("LI");
			wedWD.innerHTML = "Wind direction: "+ weatherData.days[2].windDirection;
			list3.appendChild(wedWD); 		

			var wedWS = document.createElement("LI");
			wedWS.innerHTML = "Wind speed: "+ weatherData.days[2].windSpeed + weatherData.windSpeedUnit;
			list3.appendChild(wedWS);

			var wedType = document.createElement("LI");
			wedType.innerHTML = "Type: "+ weatherData.days[2].type;
			list3.appendChild(wedType);

			var wedTypeDirection = document.createElement("I");
			wedTypeDirection.setAttribute("class", "fas fa-angle-double-right");
			list3.appendChild(wedTypeDirection);

			var back = document.createElement("LI");
			list3.appendChild(back);

				var backButton = document.createElement("BUTTON");
				backButton.innerHTML = "BACK";
				backButton.setAttribute("onclick", "displayWeather ()");
				back.appendChild(backButton);
}

//Details for thursday
function detailsWeatherThu (){
 	clearAll();

	var list4 = document.createElement("UL");
	list4.setAttribute("class","listaDetails");
	main.appendChild(list4);

		var thursday = document.createElement("LI");
		thursday.innerHTML = "Day: "+ weatherData.days[3].day;
		list4.appendChild(thursday);

		var thuTemp = document.createElement("LI");
		thuTemp.innerHTML = "Temperature: "+ weatherData.days[3].temp + weatherData.tempUnit;
		list4.appendChild(thuTemp);	

		var thuWD = document.createElement("LI");
		thuWD.innerHTML = "Wind direction: "+ weatherData.days[3].windDirection;
		list4.appendChild(thuWD); 		

		var thuWS = document.createElement("LI");
		thuWS.innerHTML = "Wind speed "+ weatherData.days[3].windSpeed + weatherData.windSpeedUnit;
		list4.appendChild(thuWS);

		var thuType = document.createElement("LI");
		thuType.innerHTML = "Type: "+ weatherData.days[3].type;
		list4.appendChild(thuType);


		var thuTypeDirection = document.createElement("I");
		thuTypeDirection.setAttribute("class", "fas fa-angle-double-up");
		list4.appendChild(thuTypeDirection);

		var back = document.createElement("LI");
		list4.appendChild(back);

			var backButton = document.createElement("BUTTON");
			backButton.innerHTML = "BACK";
			backButton.setAttribute("onclick", "displayWeather ()");
			back.appendChild(backButton);
}

//Details for friday
function detailsWeatherFri(){
	clearAll();

	var list5 = document.createElement("UL");
	list5.setAttribute("class","listaDetails");
	main.appendChild(list5);

		var friday = document.createElement("LI");
		friday.innerHTML = "Day: "+ weatherData.days[4].day;
		list5.appendChild(friday);

		var friTemp = document.createElement("LI");
		friTemp.innerHTML = "Temperature: "+ weatherData.days[4].temp + weatherData.tempUnit;
		list5.appendChild(friTemp);	

		var friWD = document.createElement("LI");
		friWD.innerHTML = "Wind direction: "+ weatherData.days[4].windDirection;
		list5.appendChild(friWD); 		

		var friWS = document.createElement("LI");
		friWS.innerHTML = "Wind speed: "+ weatherData.days[4].windSpeed + weatherData.windSpeedUnit;
		list5.appendChild(friWS);

		var friType = document.createElement("LI");
		friType.innerHTML = "Type: "+ weatherData.days[4].type;
		list5.appendChild(friType);


		var friTypeDirection = document.createElement("I");
		friTypeDirection.setAttribute("class", "fas fa-angle-double-down");
		list5.appendChild(friTypeDirection);

		var back = document.createElement("LI");
		list5.appendChild(back);

			var backButton = document.createElement("BUTTON");
			backButton.innerHTML = "BACK";
			backButton.setAttribute("onclick", "displayWeather ()");
			back.appendChild(backButton);
}

//Details for saturday
function detailsWeatherSat (){
	clearAll();

	var list6 = document.createElement("UL");
	list6.setAttribute("class","listaDetails");
	main.appendChild(list6);

		var saturday = document.createElement("LI");
		saturday.innerHTML = "Day: "+ weatherData.days[5].day;
		list6.appendChild(saturday);

		var satTemp = document.createElement("LI");
		satTemp.innerHTML = "Temperature: "+ weatherData.days[5].temp + weatherData.tempUnit;
		list6.appendChild(satTemp);	

		var satWD = document.createElement("LI");
		satWD.innerHTML = "Wind direction: "+ weatherData.days[5].windDirection;
		list6.appendChild(satWD); 		

		var satWS = document.createElement("LI");
		satWS.innerHTML = "Wind speed: "+ weatherData.days[5].windSpeed + weatherData.windSpeedUnit;
		list6.appendChild(satWS);

		var satType = document.createElement("LI");
		satType.innerHTML = "Type: "+ weatherData.days[5].type;
		list6.appendChild(satType);

		var satTypeDirection = document.createElement("I");
		satTypeDirection.setAttribute("class", "fas fa-angle-double-left");
		list6.appendChild(satTypeDirection);

		var back = document.createElement("LI");
		list6.appendChild(back);

			var backButton = document.createElement("BUTTON");
			backButton.innerHTML = "BACK";
			backButton.setAttribute("onclick", "displayWeather ()");
			back.appendChild(backButton);
}

//Details for sunday
function detailsWeatherSun (){
	clearAll();

	var list7 = document.createElement("UL");
	list7.setAttribute("class","listaDetails");
	main.appendChild(list7);

		var sunday = document.createElement("LI");
		sunday.innerHTML = "Day: "+ weatherData.days[6].day;
		list7.appendChild(sunday);

		var sunTemp = document.createElement("LI");
		sunTemp.innerHTML = "Temperature: "+ weatherData.days[6].temp + weatherData.tempUnit;
		list7.appendChild(sunTemp);	

		var sunWD = document.createElement("LI");
		sunWD.innerHTML = "Wind direction: "+ weatherData.days[6].windDirection;
		list7.appendChild(sunWD); 		

		var sunWS = document.createElement("LI");
		sunWS.innerHTML = "Wind speed: "+ weatherData.days[6].windSpeed + weatherData.windSpeedUnit;
		list7.appendChild(sunWS);

		var sunType = document.createElement("LI");
		sunType.innerHTML = "Type: "+ weatherData.days[6].type;
		list7.appendChild(sunType);

		var sunTypeDirection = document.createElement("I");
		sunTypeDirection.setAttribute("class", "fas fa-angle-double-right");
		list7.appendChild(sunTypeDirection);

		var back = document.createElement("LI");
		list7.appendChild(back);

			var backButton = document.createElement("BUTTON");
			backButton.innerHTML = "BACK";
			backButton.setAttribute("onclick", "displayWeather ()");
			back.appendChild(backButton);
}

// Clear function
function clearAll (){
	document.getElementById("main").innerHTML = "";
}

//Function Celsius to Kelvin
function kelvin (){

	clearAll();

	var main = document.getElementById("main");

			var list1 = document.createElement("UL");
			list1.setAttribute("class","lista");
			main.appendChild(list1);

				var monday = document.createElement("LI");
				monday.innerHTML = "Day: " + weatherData.days[0].day;
				list1.appendChild(monday);

				var monTemp = document.createElement("LI");
				var tempC = weatherData.days[0].temp;
				var tempCInt = parseFloat(tempC);
				monTemp.innerHTML = "Temperature: "+ 273.15+tempCInt +"K";
				list1.appendChild(monTemp);	

				var monDetails = document.createElement("LI");
				list1.appendChild(monDetails);

					monDetailsButton = document.createElement("BUTTON");
					monDetailsButton.innerHTML = "Details";
					monDetailsButton.setAttribute("onclick", "detailsWeatherMon ()"); 
					monDetails.appendChild(monDetailsButton);

				var list2 = document.createElement("UL");
				list2.setAttribute("class","lista");
				main.appendChild(list2);

					var tuesday = document.createElement("LI");
					tuesday.innerHTML = "Day: "+ weatherData.days[1].day;
					list2.appendChild(tuesday);

					var tueTemp = document.createElement("LI");
					tueTemp.innerHTML = "Temperature: "+ weatherData.days[1].temp + weatherData.tempUnit;
					list2.appendChild(tueTemp);	

					var tueDetails = document.createElement("LI");
					list2.appendChild(tueDetails);

						tueDetailsButton = document.createElement("BUTTON");
						tueDetailsButton.innerHTML = "Details";
						tueDetailsButton.setAttribute("onclick", "detailsWeatherTue ()"); 
						tueDetails.appendChild(tueDetailsButton);

				var list3 = document.createElement("UL");
				list3.setAttribute("class","lista");
				main.appendChild(list3);

					var wednesday = document.createElement("LI");
					wednesday.innerHTML = "Day: "+ weatherData.days[2].day;
					list3.appendChild(wednesday);

					var wedTemp = document.createElement("LI");
					wedTemp.innerHTML = "Temperature: "+ weatherData.days[2].temp + weatherData.tempUnit;
					list3.appendChild(wedTemp);	

					var wedDetails = document.createElement("LI");
					list3.appendChild(wedDetails);

						wedDetailsButton = document.createElement("BUTTON");
						wedDetailsButton.innerHTML = "Details";
						wedDetailsButton.setAttribute("onclick", "detailsWeatherWed ()"); 
						wedDetails.appendChild(wedDetailsButton);

				var list4 = document.createElement("UL");
				list4.setAttribute("class","lista");
				main.appendChild(list4);

					var thursday = document.createElement("LI");
					thursday.innerHTML = "Day: "+ weatherData.days[3].day;
					list4.appendChild(thursday);

					var thuTemp = document.createElement("LI");
					thuTemp.innerHTML = "Temperature: "+ weatherData.days[3].temp + weatherData.tempUnit;
					list4.appendChild(thuTemp);	

					var thuDetails = document.createElement("LI");
					list4.appendChild(thuDetails);

						thuDetailsButton = document.createElement("BUTTON");
						thuDetailsButton.innerHTML = "Details";
						thuDetailsButton.setAttribute("onclick", "detailsWeatherThu ()"); 
						thuDetails.appendChild(thuDetailsButton);

				var list5 = document.createElement("UL");
				list5.setAttribute("class","lista");
				main.appendChild(list5);

					var friday = document.createElement("LI");
					friday.innerHTML = "Day: "+ weatherData.days[4].day;
					list5.appendChild(friday);

					var friTemp = document.createElement("LI");
					friTemp.innerHTML = "Temperature: "+ weatherData.days[4].temp + weatherData.tempUnit;
					list5.appendChild(friTemp);	

					var friDetails = document.createElement("LI");
					list5.appendChild(friDetails);

						friDetailsButton = document.createElement("BUTTON");
						friDetailsButton.innerHTML = "Details";
						friDetailsButton.setAttribute("onclick", "detailsWeatherFri ()"); 
						friDetails.appendChild(friDetailsButton);
				
				var list6 = document.createElement("UL");
				list6.setAttribute("class","lista");
				main.appendChild(list6);

					var saturday = document.createElement("LI");
					saturday.innerHTML = "Day: "+ weatherData.days[5].day;
					list6.appendChild(saturday);

					var satTemp = document.createElement("LI");
					satTemp.innerHTML = "Temperature: "+ weatherData.days[5].temp + weatherData.tempUnit;
					list6.appendChild(satTemp);	

					var satDetails = document.createElement("LI");
					list6.appendChild(satDetails);

						satDetailsButton = document.createElement("BUTTON");
						satDetailsButton.innerHTML = "Details";
						satDetailsButton.setAttribute("onclick", "detailsWeatherSat ()"); 
						satDetails.appendChild(satDetailsButton);

				var list7 = document.createElement("UL");
				list7.setAttribute("class","lista");
				main.appendChild(list7);

					var sunday = document.createElement("LI");
					sunday.innerHTML = "Day: "+ weatherData.days[6].day;
					list7.appendChild(sunday);

					var sunTemp = document.createElement("LI");
					sunTemp.innerHTML = "Temperature: "+ weatherData.days[6].temp + weatherData.tempUnit;
					list7.appendChild(sunTemp);	

					var sunDetails = document.createElement("LI");
					list7.appendChild(sunDetails);

						sunDetailsButton = document.createElement("BUTTON");
						sunDetailsButton.innerHTML = "Details";
						sunDetailsButton.setAttribute("onclick", "detailsWeatherSun ()"); 
						sunDetails.appendChild(sunDetailsButton);
}

//Function meters per second to kilometers per hours
function msToKmh(){

	clearAll();

	var main = document.getElementById("main");

			var list1 = document.createElement("UL");
			list1.setAttribute("class","lista");
			main.appendChild(list1);

				var monday = document.createElement("LI");
				monday.innerHTML = "Day: " + weatherData.days[0].day;
				list1.appendChild(monday);

				var monTemp = document.createElement("LI");
				monTemp.innerHTML = "Temperature: "+ weatherData.days[0].temp +"K";
				list1.appendChild(monTemp);	

				var monWS = document.createElement("LI");
				monWS.innerHTML = "Wind speed: "+ weatherData.days[0].windSpeed*3.6 + "km/h";
				list1.appendChild(monWS);

				var monDetails = document.createElement("LI");
				list1.appendChild(monDetails);

					monDetailsButton = document.createElement("BUTTON");
					monDetailsButton.innerHTML = "Details";
					monDetailsButton.setAttribute("onclick", "detailsWeatherMon ()"); 
					monDetails.appendChild(monDetailsButton);


				var list2 = document.createElement("UL");
				list2.setAttribute("class","lista");
				main.appendChild(list2);

					var tuesday = document.createElement("LI");
					tuesday.innerHTML = "Day: "+ weatherData.days[1].day;
					list2.appendChild(tuesday);

					var tueTemp = document.createElement("LI");
					tueTemp.innerHTML = "Temperature: "+ weatherData.days[1].temp + weatherData.tempUnit;
					list2.appendChild(tueTemp);	

					var tueWS = document.createElement("LI");
					tueWS.innerHTML = "Wind speed: "+ weatherData.days[1].windSpeed*3.6 + "km/h";
					list2.appendChild(tueWS);

					var tueDetails = document.createElement("LI");
					list2.appendChild(tueDetails);

						tueDetailsButton = document.createElement("BUTTON");
						tueDetailsButton.innerHTML = "Details";
						tueDetailsButton.setAttribute("onclick", "detailsWeatherTue ()"); 
						tueDetails.appendChild(tueDetailsButton);

				var list3 = document.createElement("UL");
				list3.setAttribute("class","lista");
				main.appendChild(list3);

					var wednesday = document.createElement("LI");
					wednesday.innerHTML = "Day: "+ weatherData.days[2].day;
					list3.appendChild(wednesday);

					var wedTemp = document.createElement("LI");
					wedTemp.innerHTML = "Temperature: "+ weatherData.days[2].temp + weatherData.tempUnit;
					list3.appendChild(wedTemp);	

					var wedWS = document.createElement("LI");
					wedWS.innerHTML = "Wind speed: "+ weatherData.days[0].windSpeed*3.6 + "km/h";
					list3.appendChild(wedWS);

					var wedDetails = document.createElement("LI");
					list3.appendChild(wedDetails);

						wedDetailsButton = document.createElement("BUTTON");
						wedDetailsButton.innerHTML = "Details";
						wedDetailsButton.setAttribute("onclick", "detailsWeatherWed ()"); 
						wedDetails.appendChild(wedDetailsButton);

				var list4 = document.createElement("UL");
				list4.setAttribute("class","lista");
				main.appendChild(list4);

					var thursday = document.createElement("LI");
					thursday.innerHTML = "Day: "+ weatherData.days[3].day;
					list4.appendChild(thursday);

					var thuTemp = document.createElement("LI");
					thuTemp.innerHTML = "Temperature: "+ weatherData.days[3].temp + weatherData.tempUnit;
					list4.appendChild(thuTemp);

					var thuWS = document.createElement("LI");
					thuWS.innerHTML = "Wind speed: "+ weatherData.days[3].windSpeed*3.6 + "km/h";
					list4.appendChild(thuWS);	

					var thuDetails = document.createElement("LI");
					list4.appendChild(thuDetails);

						thuDetailsButton = document.createElement("BUTTON");
						thuDetailsButton.innerHTML = "Details";
						thuDetailsButton.setAttribute("onclick", "detailsWeatherThu ()"); 
						thuDetails.appendChild(thuDetailsButton);

				var list5 = document.createElement("UL");
				list5.setAttribute("class","lista");
				main.appendChild(list5);

					var friday = document.createElement("LI");
					friday.innerHTML = "Day: "+ weatherData.days[4].day;
					list5.appendChild(friday);

					var friTemp = document.createElement("LI");
					friTemp.innerHTML = "Temperature: "+ weatherData.days[4].temp + weatherData.tempUnit;
					list5.appendChild(friTemp);	

					var friWS = document.createElement("LI");
					friWS.innerHTML = "Wind speed: "+ weatherData.days[4].windSpeed*3.6 + "km/h";
					list5.appendChild(friWS);

					var friDetails = document.createElement("LI");
					list5.appendChild(friDetails);

						friDetailsButton = document.createElement("BUTTON");
						friDetailsButton.innerHTML = "Details";
						friDetailsButton.setAttribute("onclick", "detailsWeatherFri ()"); 
						friDetails.appendChild(friDetailsButton);
				
				var list6 = document.createElement("UL");
				list6.setAttribute("class","lista");
				main.appendChild(list6);

					var saturday = document.createElement("LI");
					saturday.innerHTML = "Day: "+ weatherData.days[5].day;
					list6.appendChild(saturday);

					var satTemp = document.createElement("LI");
					satTemp.innerHTML = "Temperature: "+ weatherData.days[5].temp + weatherData.tempUnit;
					list6.appendChild(satTemp);

					var satWS = document.createElement("LI");
					satWS.innerHTML = "Wind speed: "+ weatherData.days[5].windSpeed*3.6 + "km/h";
					list6.appendChild(satWS);	

					var satDetails = document.createElement("LI");
					list6.appendChild(satDetails);

						satDetailsButton = document.createElement("BUTTON");
						satDetailsButton.innerHTML = "Details";
						satDetailsButton.setAttribute("onclick", "detailsWeatherSat ()"); 
						satDetails.appendChild(satDetailsButton);

				var list7 = document.createElement("UL");
				list7.setAttribute("class","lista");
				main.appendChild(list7);

					var sunday = document.createElement("LI");
					sunday.innerHTML = "Day: "+ weatherData.days[6].day;
					list7.appendChild(sunday);

					var sunTemp = document.createElement("LI");
					sunTemp.innerHTML = "Temperature: "+ weatherData.days[6].temp + weatherData.tempUnit;
					list7.appendChild(sunTemp);

					var sunWS = document.createElement("LI");
					sunWS.innerHTML = "Wind speed: "+ weatherData.days[6].windSpeed*3.6 + "km/h";
					list7.appendChild(sunWS);	

					var sunDetails = document.createElement("LI");
					list7.appendChild(sunDetails);

						sunDetailsButton = document.createElement("BUTTON");
						sunDetailsButton.innerHTML = "Details";
						sunDetailsButton.setAttribute("onclick", "detailsWeatherSun ()"); 
						sunDetails.appendChild(sunDetailsButton);
}

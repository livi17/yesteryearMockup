/********************************************************************
 *                                                                  *
 *   YESTERYEAR APP                                                 *
 *    main.js - v 1.0                                               *
 *                                                                  *
 *   Copyright (c) 2014 Michael LaRiviere (leaffan1984@gmail.com)   *
 *   Licensed under the MIT license                                 *
 *                                                                  *
 *******************************************************************/


 document.addEventListener("DOMContentLoaded", function(event) {

 	var age;
 	var currYear = new Date().getFullYear();
 	var currMonth = new Date().getMonth();
 	var birthdate;
 	var birthYear = 1973;
 	var birthMonth = 5;

 	age = (currYear - birthYear);
 	if(birthMonth>currMonth){
 		age = age-1;
 	}

 	console.log("currYear: "+ currYear);
 	console.log("currMonth: "+ currMonth);
 	console.log("age: "+ age);

 	function yearButton(e){
 		console.log("e: "+ e);
 	}

 	function yearClick(i) {
 		"use strict";
 		return function () {
 			yearButton("edit" + i);
 		};
 	}

 	for (i = 1; i < 36; i++) {
 		var funcEl = document.getElementById("edit" + i);
 		funcEl.addEventListener("click", yearClick(i));
 	}

 	function dates(){
 		birthYear = birthdate.substr(0,4);
 		console.log("birthYear: "+birthYear);
 		birthMonth = birthdate.substr(5,2);
 		console.log("birthMonth: "+birthMonth);
 		birthDay = birthdate.substr(8,2);
 		console.log("birthMonth: "+birthDay);
 	}

 	var birthdateInput = document.getElementById("birthdate");
 	var submit = document.getElementById("submit");
 	submit.addEventListener("click", function(event) {
 		console.log("birthdate.value: "+ birthdateInput.value);
 		birthdate = birthdateInput.value;
 		console.log("birthdate type: "+ typeof birthdate);
 		dates();
 	}, false);

 }); // end of DOMContentLoaded
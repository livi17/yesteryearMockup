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
	var birthYear = 1973;
	var birthMonth = 5;

	age = (currYear - birthYear);
	if(birthMonth>currMonth){
		age = age-1;
	}

	console.log("currYear: "+ currYear);
	console.log("currMonth: "+ currMonth);
	console.log("age: "+ age);

	function functionButton(e){
		console.log("e: "+ e);
	}

	function functionClick(i) {
        "use strict";
        return function () {
                functionButton("edit" + i);
        };
    }

    for (i = 1; i < 36; i++) {
        var funcEl = document.getElementById("edit" + i);
        funcEl.addEventListener("click", functionClick(i));
    }


}); // end of DOMContentLoaded
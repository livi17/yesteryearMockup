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
    var birthYear;
    var birthMonth;
    var birthDay;

    age = (currYear - birthYear);
    if (birthMonth > currMonth) {
        age = age - 1;
    }

    console.log("currYear: " + currYear);
    console.log("currMonth: " + currMonth);
    console.log("age: " + age);

    function yearButton(e) {
        console.log("e: " + e);
    }

    function yearClick(i) {
        "use strict";
        return function() {
            yearButton("edit" + i);
        };
    }

    for (i = 1; i < 36; i++) {
        var funcEl = document.getElementById("edit" + i);
        funcEl.addEventListener("click", yearClick(i));
    }

    function dates() {
        var y = document.getElementsByTagName("select")[0].value;
        var m = document.getElementsByTagName("select")[1].value;
        var d = document.getElementsByTagName("select")[2].value;
        console.log("y: " + y);
        birthYear = y;
        birthMonth = m;
        birthDay = d;
    }

    var birthdateInput = document.getElementById("birthdate");
    var submit = document.getElementById("submit");
    submit.addEventListener("click", function(event) {
        dates();
        $("#intro").fadeOut("slow", function() {
            // Animation complete.
        });
        $("#yearContainer").fadeIn("slow", function() {
            // Animation complete.
        });
    }, false);

    var back = document.getElementById("back");
    back.addEventListener("click", function(event) {
    	$("#monthContainer").fadeOut("slow", function() {
            // Animation complete.
        });
        $("#yearContainer").fadeIn("slow", function() {
            // Animation complete.
        });
    }, false);

    var back2 = document.getElementById("back2");
    back2.addEventListener("click", function(event) {
        $("#dayContainer").fadeOut("slow", function() {
            // Animation complete.
        });
        $("#monthContainer").fadeIn("slow", function() {
            // Animation complete.
        });
    }, false);

    $("#birthdate").birthdayPicker();

}); // end of DOMContentLoaded
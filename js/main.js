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
    var editToggle = false;
    var clickedYear;

    age = (currYear - birthYear);
    if (birthMonth > currMonth) {
        age = age - 1;
    }

    console.log("currYear: " + currYear);
    console.log("currMonth: " + currMonth);
    console.log("age: " + age);

    function yearButton(e) {
        console.log("e: " + e);
        nextClick = parseInt(e.substr(4,2),10);
        console.log("nextClick: " + nextClick);
        clickedYear = (birthYear+nextClick);
        console.log("clickedYear: " + clickedYear);
        $("#yearContainer").fadeOut("slow", function() {
            // Animation complete.
        });
        $("#monthContainer").fadeIn("slow", function() {
            // Animation complete.
        });
        var yearHead = document.getElementById("BigTextYear");
        yearHead.innerHTML = clickedYear;


        var yearAge = document.getElementById("smallFatTextAge");
        yearAge.innerHTML = nextClick;
        var yearGrade = document.getElementById("smallFatTextGrade");

        if(nextClick == 5){
            yearGrade.innerHTML = "K";
        } else if(nextClick > 5 && nextClick < 17){
            yearGrade.innerHTML = (nextClick-4);
        } else if (nextClick == 17){
            yearGrade.innerHTML = "U1";
        } else if (nextClick == 18){
            yearGrade.innerHTML = "U2";
        }else if (nextClick == 19){
            yearGrade.innerHTML = "U3";
        } else if (nextClick == 20){
            yearGrade.innerHTML = "U4";
        }else {
            yearGrade.innerHTML = "-";
        }
        $( "#screen" ).scrollTop( 0 );
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
        var m = document.getElementsByTagName("select")[0].value;
        var d = document.getElementsByTagName("select")[1].value;
        var y = document.getElementsByTagName("select")[2].value;
        console.log("y: " + y);
        console.log("m: " + m);
        console.log("d: " + d);
        birthYear = parseInt(y,10);;
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

    var editor = document.getElementById("editor");
    editor.addEventListener("click", function(event) {
        if(editToggle==false){
            editToggle = true;
        $( "#editor" ).animate({
            top: "-30",
          }, 350, function() {
            // Animation complete.
          });
    } else {
        editToggle = false;
        $( "#editor" ).animate({
            top: "418",
          }, 350, function() {
            // Animation complete.
          });

    }

    }, false);

    $("#birthdate").birthdayPicker();

}); // end of DOMContentLoaded
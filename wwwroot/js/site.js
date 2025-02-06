// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
let price = 0;
let wins = 0;

$("#calculate").click(function () {
    if ($("#hours").val() <= 0){
        alert("Please enter a number greater than 0")
    }
    else {

        price = $("#rate").val() * $("#hours").val();
        price = parseFloat(price).toFixed(2);
        $("#price").val("$" + price);
        wins = ($("#hours").val() * 3).toFixed(0);
        $("#wins").val(wins + " wins");

    }
})
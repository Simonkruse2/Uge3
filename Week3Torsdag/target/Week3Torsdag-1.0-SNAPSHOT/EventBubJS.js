/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function clickme(e) {
    var target = e.target;
    document.getElementById("html").innerText = " Hi From " + target.id;
}
var clickedMeGood1 = document.getElementById("b1");
clickedMeGood1.onclick = clickme;
var clickedMeGood2 = document.getElementById("b2");
clickedMeGood2.onclick = clickme;
var clickedmegood3 = document.getElementById("outer");
clickedmegood3.onclick = clickme;

let boys = ["Lars", "Jan", "Peter", "Bo", "Frederik"];
let listboys = boys.map(function (name) {
    return "<li>" + name + "</li>";
});
let listboysAsString = "<ul>" + listboys.join("") + "</ul>";
console.log(listboysAsString);
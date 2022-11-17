/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

var element = document.createElement('div');
element.id = 'pound';
document.getElementById('output').appendChild(element);
var element = document.createElement('div');
element.id = 'gram';
document.getElementById('output').appendChild(element);
var element = document.createElement('div');
element.id = 'ounce';
document.getElementById('output').appendChild(element);
document.getElementById("output").style.position = "relative";
document.getElementById("output").style.left = "50%";
document.getElementById("output").style.right = "50%";
document.addEventListener('submit', function Calculate() {
    document.getElementById("pound").innerHTML = (document.getElementById('search').value * 2.2046 + "lb");
    document.getElementById("gram").innerHTML = (document.getElementById('search').value * 0.0010000 + "g");
    document.getElementById("ounce").innerHTML = (document.getElementById('search').value * 35.274 + "oz");
    event.preventDefault();
});


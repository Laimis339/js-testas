/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

btn__state = 0;
var button = document.getElementById("btn__element");
button.onclick = function () {
    btn__state++;
    document.getElementById("btn__state").innerHTML = btn__state;
}
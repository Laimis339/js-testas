/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
document.body.style.backgroundColor = "lightgrey";
fetch(ENDPOINT)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
function appendData(data) {
    var dataContainer = document.getElementById("output");
    for (var i = 0; i < data.length; i++) {
        var element = document.createElement("div");
        element.innerHTML = 'Brand: ' + data[i].brand;
        dataContainer.appendChild(element);
        element.setAttribute(
            'style',
            'padding: 1px; margin-left: 30px; margin-right: 30px; margin-top: 30px; color: #258ce0; font-size: x-large;'
        );
        var element = document.createElement("div");
        element.innerHTML = 'Model: ' + data[i].models + ".";
        dataContainer.appendChild(element);
        element.setAttribute(
            'style',
            'background-color: white; padding: 5px; margin-left: 30px; margin-right: 30px; margin-bottom: 30px;'
        );
    }
}

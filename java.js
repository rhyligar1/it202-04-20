/*
var random = document.getElementsByClassName("random")[0];
var input = json.results;
for (var i = 0; i < results.length; i++){
    var h2 = document.createElement("h2");
    h2.innerHTML = input[i].gender;
    random.appendChild(h2);
    
    var nation = document.createElement("nation");
    p.innerHTML = input[i].nat;
    random.appendChild(nation);
}
*/

function getNationality() {
    fetch('https://randomuser.me/api/?format=json')
       .then((response) => {
        return response.json()
    }).then(function(data) {
        let nat = data.nat;
        console.log(nat);
    });
};
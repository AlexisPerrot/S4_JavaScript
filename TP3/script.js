
//Met à jour l'horloge toutes les secondes
function horlogeUpdate(){
	var dateActuelle = new Date();
	var secActuelle = dateActuelle.getSeconds();
	var minActuelle = dateActuelle.getMinutes();
	var heureActuelle=dateActuelle.getHours();
	document.getElementById("horloge").textContent = heureActuelle + ':' + minActuelle + ':' + secActuelle;
	setTimeout(horlogeUpdate, 1000);
}

function changerChapitre(url){
	var req = new XMLHttpRequest();
	req.open("GET", url);
	req.onerror = function() {
		console.log("Échec de chargement de la page : "+url);
	};
	req.onload = function() {
		if (req.status === 200) {
			var data = JSON.parse(req.responseText);
				// do what you have to do with 'data'
		} else {
			console.log("Erreur " + req.status);
		}
	};
	req.send();
}

window.addEventListener("load", function(){

	//Lancement de l'horloge qui se refresh à chaque seconde
	horlogeUpdate();
	
	document.addEventListener("hashchange",function(){
		//utiliser window.location.href
		//spliter l'url par #
		//utiliser l'url avec changerChapitre 
	)};
);
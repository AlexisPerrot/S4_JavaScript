
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
				console.log(data);
				document.getElementById("histoire").textContent = data.txt;
				document.getElementById("liens").innerHTML = "";
				for(var i=0;i<data.links.length;i++){
					var elemListe = document.createElement("li");
					var lien = document.createElement("a");
					lien.textContent = data.links[i].txt;
					lien.href = data.links[i].link;
					elemListe.appendChild(lien);
					document.getElementById("liens").appendChild(elemListe);
				}
		} else {
			console.log("Erreur " + req.status);
		}
	};
	req.send();
}

//CheckURLCourant sert à choisir le chapitre à afficher en fonction de ce qui suit le hash de l'URL
function checkURLCourant(){
	var url = window.location.href;
	console.log(url);
	var urlsplit = url.split("#",2)[1];
	if(urlsplit !== undefined){
		console.log(urlsplit);
		changerChapitre("Chapitre"+urlsplit+".json");
	}
	else{
		changerChapitre("chapitre1.json");
	}
}

window.addEventListener("load", function(){
	//Lancement de l'horloge qui se refresh à chaque seconde
	horlogeUpdate();
	//On check l'URL une première fois au cas où l'utilisateur essaie d'accéder à une page différente de la première dès le début (marque page, lien externe,...)
	checkURLCourant();
	//On abonne la fonction de vérification de l'URL à l'évènement "hashchange"
	window.addEventListener("hashchange",checkURLCourant);
});
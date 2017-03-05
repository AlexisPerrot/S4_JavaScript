
//Met à jour l'horloge toutes les secondes et appelle la fonction "verifAlarmes" à chque début de minute.
function horlogeUpdate(){
	var dateActuelle = new Date();
	var secActuelle = dateActuelle.getSeconds();
	var minActuelle = dateActuelle.getMinutes();
	var heureActuelle=dateActuelle.getHours();
	document.getElementById("horloge").textContent = heureActuelle + ':' + minActuelle + ':' + secActuelle;
	if(secActuelle === 0){
		verifAlarmes(heureActuelle, minActuelle);
	}
	setTimeout(horlogeUpdate, 1000);
}

//Vérifie si l'heure passée en paramètre est égale à chacune des alarmes et les déclenche les unes après les autres (si plusieurs correspondent)
//en affichant successivement des pop-up contenant le nom de l'alarme et en jouant la musique associée
function verifAlarmes(heureActuelle, minActuelle){
	var alarmes = document.querySelectorAll(".alarme");
	alarmes.forEach(function(alarme){
		console.log("\nheure alarme : " + alarme.querySelector(".inputHeures").value + "\nminutes alarme : " + alarme.querySelector(".inputMinutes").value + "\nheure actuelle : " + heureActuelle + "\nminute actuelle : " + minActuelle);
		if(alarme.querySelector(".inputHeures").value == heureActuelle && alarme.querySelector(".inputMinutes").value == minActuelle){
			var musique = document.createElement("AUDIO");
			if (musique.canPlayType("audio/mpeg")) {
				musique.setAttribute("src",alarme.querySelector("select").value);
				musique.setAttribute("id",alarme.querySelector("select").value);
				musique.play();
			}
			if(!alert(alarme.querySelector(".nomAlarme").value))musique.pause();
		}
	});
}



window.addEventListener("load", function(){
	
	//Lancement de l'horloge qui se refresh à chaque seconde et qui vérifie les alarmes à chaque minutes
	horlogeUpdate();
	
	//Ajout de l'enventListener qui écoute les clics sur les boutons '+'
	document.getElementById("add").addEventListener("click",function(){
		var listeAlarmes = document.getElementById("alarmes");
		var newAlarme = listeAlarmes.lastChild.cloneNode(true);
		listeAlarmes.insertBefore(newAlarme,listeAlarmes.lastChild);
	});
	
	//Ajout de l'eventListener qui écoute les clics sur les boutons '-'
	document.getElementById("alarmes").addEventListener("click",function(evt){
		if(evt.target.className==="drop"){
			document.getElementById("alarmes").removeChild(evt.target.parentNode);
		}
	});
});


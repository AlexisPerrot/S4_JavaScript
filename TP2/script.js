function horlogeUpdate(){
	var dateActuelle = new Date;
	var secActuelle = dateActuelle.getSeconds();
	var minActuelle = dateActuelle.getMinutes();
	var heureActuelle=dateActuelle.getHours();
	document.getElementById("horloge").textContent = heureActuelle + ':' + minActuelle + ':' + secActuelle;
	if(secActuelle === 0){
		verifAlarmes(heureActuelle, minActuelle);
	}
	setTimeout(horlogeUpdate, 1000);
}

function verifAlarmes(heureActuelle, minActuelle){
	var alarmes = document.querySelectorAll(".alarme");
	alarmes.forEach(function(alarme){
		console.log("\nheure alarme : " + alarme.querySelector(".inputHeures").value + "\nminutes alarme : " + alarme.querySelector(".inputMinutes").value + "\nheure actuelle : " + heureActuelle + "\nminute actuelle : " + minActuelle);
		if(alarme.querySelector(".inputHeures").value == heureActuelle && alarme.querySelector(".inputMinutes").value == minActuelle){
			alert("c'est l'heure !");
		}
	});
}

function addAlarme(){
	var listeAlarmes = document.getElementById("alarmes");
	var newAlarme = listeAlarmes.lastChild.cloneNode(true);
	listeAlarmes.insertBefore(newAlarme,listeAlarmes.lastChild);
	document.getElementById("add").addEventListener("click",addAlarme);
}

window.addEventListener("load", function(){
	//Lancement de l'horloge qui se refresh à chaque seconde et qui vérifie les alarmes à chaque minutes
	horlogeUpdate();
	
	//Ajout de l'enventListener qui écoute les clics sur les boutons '+'
	document.getElementById("add").addEventListener("click",addAlarme);
	
	//Ajout de l'eventListener qui écoute les clics sur les boutons '-'
	document.getElementById("alarmes").addEventListener("click",function(evt){
		if(evt.target.className==="drop"){
			document.getElementById("alarmes").removeChild(evt.target.parentNode)
		}
	});
})

function changeMusic($i) {
			var x = document.createElement("AUDIO");

			if (x.canPlayType("audio/mpeg")) {
				x.setAttribute("src",$i);
				x.setAttribute("id",$i);
				x.play();
			}
			
			
		}
		
		

function pauseAudio(x) { 
	if(!alert("C'est l'heure !!!"))x.pause(); 
}
 


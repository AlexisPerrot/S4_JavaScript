function horlogeUpdate(){
	var dateActuelle = new Date;
	var secActuelle = dateActuelle.getSeconds();
	document.getElementById("horloge").textContent = dateActuelle.getHours() + ':' + dateActuelle.getMinutes() + ':' + secActuelle;
	if(secActuelle === "0"){
		verifAlarmes();
	}
	setTimeout(horlogeUpdate, 1000);
}

function verifAlarmes(){
	var alarmes = document.getElementsByClassName("alarme");
	for (alarm in alarmes){
		
	}
}

window.addEventListener("load", function(){
	horlogeUpdate();
	
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
 


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

 


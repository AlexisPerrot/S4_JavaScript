function checkPrenom(){
	if((!/[^a-zA-Z]/.test(document.getElementById("prenom").value) && document.getElementById("prenom").value.length>=1)){
		document.getElementById("e_prenom").style.display="none";
		return 1;
	}
	else{
		document.getElementById("e_prenom").style.display="inline";
		return 0;
	}
}
function checkNom(){
	if((!/[^a-zA-Z]/.test(document.getElementById("nom").value) && document.getElementById("nom").value.length>=1)){
		document.getElementById("e_nom").style.display="none";
		return 1;
	}
	else{
		document.getElementById("e_nom").style.display="inline";
		return 0;
	}
}
function checkAge(){
	if((/[0-9]/.test(document.getElementById("age").value)) && (document.getElementById("age").value)>=18){
		document.getElementById("e_age").style.display="none";
		return 1;
	}
	else{
		document.getElementById("e_age").style.display="inline";
		return 0;
	}
}
function checkIdentifiant(){
	reponse = false;
	if(document.getElementById("identifiant").value.length>=1 && document.getElementById("identifiant").value.length<12){
		if(!/[^a-zA-Z]/.test(document.getElementById("identifiant").value)){
			reponse = true;
		}
	}
	if(document.getElementById("identifiant").value.length>=1 && document.getElementById("identifiant").value.length<12 && !/[^a-zA-Z]/.test(document.getElementById("identifiant").value)){
		document.getElementById("e_identifiant").style.display="none";
		return 1;
	}
	else{
		document.getElementById("e_identifiant").style.display="inline";
		return 0;
	}
}
function checkMotDePasse(){
	var strength = 0;
	var maj = new RegExp("[A-Z]");
	var min = new RegExp("[a-z]");
	var nbr = new RegExp("[0-9]");
	var spe = new RegExp("[^a-zA-Z0-9]");
	
	if (document.getElementById("mdp").value.length>=8){
		strength+=20;
	}
	if ((maj.test(document.getElementById("mdp").value))){
		strength+=20;
	}
	if ((min.test(document.getElementById("mdp").value))){
		strength+=20;
	}
	if ((nbr.test(document.getElementById("mdp").value))){
		strength+=20;
	}
	if ((spe.test(document.getElementById("mdp").value))){
		strength+=20;
	}
	document.getElementById("lvl_mdp").innerHTML="Mot de passe sécurisé à : "+strength+"%"
	if (strength === 100){
		return 1;
	}
	else{
		return 0;
	}
}


function checkMDP2(){
	if (document.getElementById("mdp").value===document.getElementById("mdp2").value){
		document.getElementById("e_mdp2").style.display="none";
		return 1;
	}else{
		document.getElementById("e_mdp2").style.display="inline";
		return 0;
	}
}
function checkCGU(){
	if (document.getElementById("cgu").checked === true){
		document.getElementById("e_cgu").style.display="none";
		return 1;
	}else{
		document.getElementById("e_cgu").style.display="inline";
		return 0;
	}
}


function checkValider(){
	if(checkPrenom()){
		if(checkNom()){
			if(checkAge()){
				if(checkIdentifiant()){
					if(checkMotDePasse()){
						if(checkMDP2()){
							if(checkCGU()){
								document.getElementById("ok").disabled="";
							}else{
								document.getElementById("ok").disabled="true";
							}
						}else{
							document.getElementById("ok").disabled="true";
						}
					}else{
						document.getElementById("ok").disabled="true";
					}
				}else{
					document.getElementById("ok").disabled="true";
				}
			}else{
				document.getElementById("ok").disabled="true";
			}
		}else{
			document.getElementById("ok").disabled="true";
		}
	}else{
		document.getElementById("ok").disabled="true";
	}
}

window.addEventListener("load", function(){
	document.getElementById("prenom").addEventListener("input",checkPrenom);
	document.getElementById("nom").addEventListener("input",checkNom);
	document.getElementById("age").addEventListener("input",checkAge);
	document.getElementById("identifiant").addEventListener("input",checkIdentifiant);
	document.getElementById("mdp").addEventListener("input",checkMotDePasse);
	document.getElementById("mdp2").addEventListener("input",checkMDP2);
	document.getElementById("cgu").addEventListener("input",checkCGU);

	document.getElementById("prenom").addEventListener("change",checkValider);
	document.getElementById("nom").addEventListener("change",checkValider);
	document.getElementById("age").addEventListener("change",checkValider);
	document.getElementById("identifiant").addEventListener("change",checkValider);
	document.getElementById("mdp").addEventListener("change",checkValider);
	document.getElementById("mdp2").addEventListener("change",checkValider);
	document.getElementById("cgu").addEventListener("change",checkValider);
})

 


function checkPrenom(){
	console.log(!/[^a-zA-Z]/.test(document.getElementById("prenom").value) && document.getElementById("prenom").value.length>=1);
	return (!/[^a-zA-Z]/.test(document.getElementById("prenom").value) && document.getElementById("prenom").value.length>=1);
}
function checkNom(){
	return (!/[^a-zA-Z]/.test(document.getElementById("nom").value) && document.getElementById("nom").value.length>=1);
}
function checkAge(){
	return ((/[0-9]/.test(document.getElementById("age").value)) && (document.getElementById("age").value)>=18);
}
function checkIdentifiant(){
	reponse = false;
	if(document.getElementById("identifiant").value.length>=1 && document.getElementById("identifiant").value.length<12){
		if(!/[^a-zA-Z]/.test(document.getElementById("identifiant").value)){
			reponse = true;
		}
	}
	return reponse;
}
function checkMotDePasse(){
	var strength = 0;
	if (document.getElementById("mdp").value.length>=8){
		if ((/[a-z]+[A-Z]+[0-9]/.test(document.getElementById("mdp").value))){
			;
		}
	}
	return 1;
}
function checkCGU(){
	if (document.getElementById("cgu").checked === true){
		return 1;
	}else return 0;
}
function setErrorMessage(message){
	console.log(message);
}

function checkValider(){
	if(checkPrenom()){
		if(checkNom()){
			if(checkAge()){
				if(checkIdentifiant()){
					if(checkMotDePasse()){
						if(checkCGU()){
							document.getElementById("ok").disabled="";
							console.log("checkValider");
						}else{
							document.getElementById("ok").disabled="true";
							setErrorMessage("Vous devez accepter les CGU");
						}
					}else{
						document.getElementById("ok").disabled="true";
						setErrorMessage("Vous devez entrer un MDP corect");
					}
				}else{
					document.getElementById("ok").disabled="true";
					setErrorMessage("Vous devez entrer un identifiant correct");
				}
			}else{
				document.getElementById("ok").disabled="true";
				setErrorMessage("Vous devez entrer un age correct");
			}
		}else{
			document.getElementById("ok").disabled="true";
			setErrorMessage("Vous devez entrer un nom correct");
		}
	}else{
		document.getElementById("ok").disabled="true";
		setErrorMessage("Vous devez entrer un prénom correct");
	}
}

document.getElementById("prenom").addEventListener("input",checkValider);
document.getElementById("nom").addEventListener("input",checkValider);
document.getElementById("age").addEventListener("input",checkValider);
document.getElementById("identifiant").addEventListener("input",checkValider);
document.getElementById("mdp").addEventListener("input",checkValider);
document.getElementById("mdp2").addEventListener("input",checkValider);
document.getElementById("cgu").addEventListener("input",checkValider);
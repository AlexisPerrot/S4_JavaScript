function checkPrenom(){
	return (document.getElementById("prenom").length<12 && document.getElementById("prenom")); 
}
function checkNom(){
	return 1;
}
function checkAge(){
	return ((/[0-9]/.test(document.getElementById("age").value)) && (document.getElementById("age")>=18));
}
function checkIdentifiant(){
	return 1;
}
function checkMotDePasse(){
	var strength = 0;
	if (document.getElementById("mdp").value.length>=8){
		if ((/[a-z]+[A-Z]+[0-9]/.test(document.getElementById("mdp").value))){
			
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
	
}

function checkValider(){
  if(checkPrenom){
    if(checkNom){
      if(checkAge){
        if(checkIdentifiant){
          if(checkMotDePasse){
            if(checkCGU){
                document.getElementById("ok").disabled="";
				console.log("checkValider");
            }else setErrorMessage("");
          }else setErrorMessage("");
        }else setErrorMessage("");
      }else setErrorMessage("");
    }else setErrorMessage("");
  }else setErrorMessage("");
}

document.getElementById("prenom").addEventListener("input",checkValider);
document.getElementById("nom").addEventListener("input",checkValider);
document.getElementById("age").addEventListener("input",checkValider);
document.getElementById("identifiant").addEventListener("input",checkValider);
document.getElementById("mdp").addEventListener("input",checkValider);
document.getElementById("mdp2").addEventListener("input",checkValider);
document.getElementById("cgu").addEventListener("input",checkValider);
function checkPrenom(){
	return (document.getElementById("prenom").length<12 && document.getElementById("prenom")); 
}
function checkNom(){
	return 1;
}
function checkAge(){
	return 1;
}
function checkIdentifiant(){
	return 1;
}
function checkMotDePasse(){
	return 1;
}
function checkCGU(){
	return 1;
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

document.getElementById("prenom").addEventListener("change",checkValider);
document.getElementById("nom").addEventListener("change",checkValider);
document.getElementById("age").addEventListener("change",checkValider);
document.getElementById("identifiant").addEventListener("change",checkValider);
document.getElementById("mdp").addEventListener("change",checkValider);
document.getElementById("mdp2").addEventListener("change",checkValider);
document.getElementById("cgu").addEventListener("change",checkValider);
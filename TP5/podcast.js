(function (){
	window.addEventListener("load", function(){
		document.getElementById("audioList").addEventListener("click", function(evt){
			console.log(document.getElementById(evt.target.id).lastChild.src);
    	document.getElementById("lecteur").src = document.getElementById(evt.target.id).lastChild.src;
			document.getElementById("titreActuel").innerHTML = document.getElementById(evt.target.id).innerHTML;
		});
		document.getElementById("ok").addEventListener("click", function(){
			var oReq = new XMLHttpRequest();
			var urlPodCast = "https://crossorigin.me/"+document.getElementById("urlPod").value;
			console.log(urlPodCast);
			oReq.open("GET", urlPodCast, true);
			console.log(oReq);
			oReq.onload = function() {
				document.getElementById("audioList").innerHTML="";
				var res = oReq.responseXML; // n'est pas responseText
				console.log(res);
				var listeItem = res.getElementsByTagName("item");

				//Tri des items par date décroissante:
				var tabItem = [];
				var i;
				for (i = 0; i < listeItem.length; i++) {
					tabItem[i]=listeItem[i];
				}
				tabItem.sort(function(a,b){
					var date1 = new Date(a.children[2].innerHTML);
					var date2 = new Date(b.children[2].innerHTML);
					return date2 - date1;
				});

				for (i = 0; i < listeItem.length; i++) {
					var titreMedia = listeItem[i].getElementsByTagName("title")[0].innerHTML;
					var urlMedia = listeItem[i].getElementsByTagName("enclosure")[0].getAttribute("url");
					var baliseMedia = document.createElement("audio");
					var baliseTitre = document.createElement("li");
					baliseTitre.textContent = titreMedia;
					console.log(baliseTitre.textContent);
					baliseMedia.setAttribute("src",urlMedia);
					baliseTitre.appendChild(baliseMedia);
					baliseTitre.setAttribute("id",i);
					console.log(baliseTitre);
					document.getElementById("audioList").appendChild(baliseTitre);
				}
			};
			oReq.send();
		});
	});
})();

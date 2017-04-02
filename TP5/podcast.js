(function (){
	window.addEventListener("load", function(){
		document.getElementById("audioList").addEventListener("click", function(evt){
			console.log(document.getElementById(evt.target.id).lastChild.src);
    	document.getElementById("lecteur").src = document.getElementById(evt.target.id).lastChild.src;;
		});
		document.getElementById("ok").addEventListener("click", function(){
			var oReq = new XMLHttpRequest();
			var url = "https://crossorigin.me/"+document.getElementById("urlPod").value;
			console.log(url);
			oReq.open("GET", url, true);
			console.log(oReq);
			oReq.onload = function() {
				var res = oReq.responseXML; // n'est pas responseText
				console.log(res);
				var listeItem = res.getElementsByTagName("item");
				console.log(listeItem);
				var txt = "";
				for (i = 0; i < listeItem.length; i++) {
					var titleContent =  listeItem[i].children[1].innerHTML;
					var url = listeItem[i].getElementsByTagName("enclosure")[0].getAttribute("url");
					var audio = document.createElement("audio");
					var titre = document.createElement("p");
					titre.textContent = titleContent;
					audio.setAttribute("src",url);
					titre.appendChild(audio);
					titre.setAttribute("id",i)
					document.getElementById("audioList").appendChild(titre);
				}
			}
			oReq.send();
		});
	});
})();

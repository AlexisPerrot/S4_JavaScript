(function (){
	
	var pencil ={
		actif:0,
		"mousedown":function(evt){
			this.actif = 1;
			ctx.moveTo(evt.pageX,evt.pageY);
			ctx.beginPath();
		},
		"mousemove":function(evt){
			if(this.actif === 1){
				ctx.lineTo(evt.pageX,evt.pageY);
				ctx.stroke();
			}
		},
		"mouseup":function(evt){
			this.actif = 0;
		}
	};
	var line ={
		"mousedown":function(evt){
			ctx.beginPath();
			ctx.moveTo(evt.pageX,evt.pageY);
		},
		"mousemove":function(evt){
			//NE RIEN FAIRE
		},
		"mouseup":function(evt){
			ctx.lineTo(evt.pageX,evt.pageY);
			ctx.stroke();
		}
	};
	var rect ={
		origineX:0,
		origineY:0,
		"mousedown":function(evt){
			this.origineX = evt.pageX
			this.origineY = evt.pageY
		},
		"mousemove":function(evt){
			//NE RIEN FAIRE
		},
		"mouseup":function(evt){
			ctx.beginPath();
			ctx.fillRect(this.origineX,this.origineY,evt.pageX-this.origineX,evt.pageY-this.origineY);
			ctx.stroke();
		}
	};
	var circle ={
		origineX:0,
		origineY:0,
		"mousedown":function(evt){
			this.origineX = evt.pageX
			this.origineY = evt.pageY
			ctx.moveTo(this.origineX,this.origineY);
		},
		"mousemove":function(evt){
			//NE RIEN FAIRE
		},
		"mouseup":function(evt){
			ctx.beginPath();
			ctx.moveTo(evt.pageX,evt.pageY);
			ctx.arc(this.origineX,this.origineY,Math.hypot(evt.pageX-this.origineX, evt.pageY-this.origineY),0, 2 * Math.PI);
			ctx.fill();
			ctx.stroke();
		}
	};
	var outilCourant = pencil;

	window.addEventListener("load", function(){
		canvas  = document.getElementById("paint");
		ctx = canvas.getContext('2d');
		console.log(ctx);
		document.getElementById("outils").addEventListener("click",function(evt){
			nomOutil = evt.target.id
			switch(nomOutil) {
				case "pencil":
					outilCourant = pencil;
					break;
				case "line":
					outilCourant = line;
					break;
				case "rect":
					outilCourant = rect;
					break;
				case "circle":
					outilCourant = circle;
					break;
				case "clear":
					ctx.clearRect(0,0,document.getElementById("paint").width,document.getElementById("paint").height);
					console.log("test");
					break;
				default:
					outilCourant = outilCourant;
			}
			
		});
		document.getElementById("paint").addEventListener("mousedown",function(evt){
			ctx.fillStyle = document.getElementById("colorpicker").value;
			ctx.strokeStyle = document.getElementById("colorpicker").value;
			outilCourant.mousedown(evt);
		});
		document.getElementById("paint").addEventListener("mousemove",function(evt){
			outilCourant.mousemove(evt);
		});
		document.getElementById("paint").addEventListener("mouseup",function(evt){
			outilCourant.mouseup(evt);
		});
	});
})();
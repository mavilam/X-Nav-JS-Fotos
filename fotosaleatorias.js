

function randomImg(){
	var index = Math.floor(Math.random() * 6);
	var img = document.getElementById("imagenes");
	var list = document.getElementById("e"+index);
	
	img.innerHTML = '<img src="'+ list.innerHTML + '"/>'
}

randomImg();


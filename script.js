function changer (id, newValue) {
	var element = document.getElementById(id);
	element.innerHTML = newValue;
}

var input_box= document.getElementById('text');


handler=function(e){
	changer('color','body{background:'+input_box.value+';}');
}

input_box.addEventListener('input',handler);


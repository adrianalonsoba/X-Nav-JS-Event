function changer (id, newValue) {
	var element = document.getElementById(id);
	element.innerHTML = newValue;
}

var input_box= document.getElementById('text');

input_box.addEventListener('input',function(e){
	changer('text_copy',input_box.value);
})
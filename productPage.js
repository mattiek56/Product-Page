var list_collapse = document.getElementsByClassName('collapsible');
var i; 

for (i = 0; i < list_collapse.length; i++) {
	list_collapse[i].addEventListener('click', function(){
		var content = this.nextElementSibling;
		if (content.style.display === 'block') {
			content.style.display = 'none';
		} else {
			content.style.display = 'block';
		}
	});
}







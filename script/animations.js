(function(){
	let navbarMenuLight=document.getElementById('navbar-menu-light');
	let navbarMenuDark=document.getElementById('navbar-menu-dark');
	let headLarge=document.getElementById('head-large');
	let headSmall=document.getElementById('head-small');
	let footer=document.getElementById('footer');
	let contactsForm=document.forms['contacts_form'];

	function init(){
		navbarMenuLight.classList.remove('move_left');
		navbarMenuDark.classList.remove('move_right');
		headLarge.classList.remove('move_left');
		headSmall.classList.remove('move_right');
	}

	function handlerScroll(){
		if(window.pageYOffset>footer.offsetTop+150){
			contactsForm.classList.remove('move_down');
			window.removeEventListener('scroll', handlerScroll);
		}
	}
	
	window.addEventListener('scroll', handlerScroll);
	window.addEventListener('load', init);
})()

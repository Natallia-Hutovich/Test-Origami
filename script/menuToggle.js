(function(){
	let navbarMenuLight=document.getElementById('navbar-menu-light');
	let navbarMenuDark=document.getElementById('navbar-menu-dark');
	let toggleMenu=document.getElementById('toggle-menu');

	function toggleContainer(container, displayMode){
			if(getComputedStyle(container).display=='none'){
				container.style.display=displayMode;
			}
			else{
				container.style.display='none';
			}
		}

	function findSubmenu(elem){
		let parent=elem.parentNode;
		while (parent.tagName!=='LI'){
			parent=parent.parentNode;
		}
		let ul=parent.getElementsByTagName('ul')[0];
		return ul;
	}	

	function toggleSubmenu(e){
		if(e.target.tagName==='A'){
			let submenu=findSubmenu(e.target);
			if(submenu){
				e.preventDefault();
				toggleContainer(submenu,'block');
			}
		}
	}

	toggleMenu.addEventListener('click', function(){
		toggleContainer(navbarMenuLight,'block');
		toggleContainer(navbarMenuDark,'block');
	});
	navbarMenuLight.addEventListener('click', function(e){
		toggleSubmenu(e);
	});	
	navbarMenuDark.addEventListener('click', function(e){
		toggleSubmenu(e);
	});
})()

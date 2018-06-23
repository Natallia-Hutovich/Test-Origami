(function(){
	let contactsForm=document.forms['contacts_form'];
	let formElements=contactsForm.elements;
	let name=formElements['name'], 
		email=formElements['email'], 
		phone=formElements['phone'],
		message=formElements['message'];
	

	function setOk(elem){
		let parent=elem.parentNode;
		let checkOk=parent.getElementsByClassName('check_ok')[0];
		checkOk.style.opacity=1;
	}

	function hideOk(elem){
		let parent=elem.parentNode;
		let checkOk=parent.getElementsByClassName('check_ok')[0];
		checkOk.style.opacity=0;
	}

	function setFormStatus(){
		let formStatus=document.getElementById('form-status');
		formStatus.style.visibility='visible';
	}

	function validateName(elem){
		return (elem.value.length>1)
	}

	function validateEmail(elem){
		return ( (elem.value.indexOf('@')>0) && (elem.value.indexOf('.')>0) )
	}

	function validatePhone(elem){
		return (elem.value.length>5)
	}

	function validateMessage(elem){
		return (elem.value.length>5)
	}

	function validateForm(){
		return ( validateName(name) && 
		    	 validateEmail(email) &&
		  		 validatePhone(phone) &&
		  		 validateMessage(message)
	    ) 
	}

	function sendForm(e){
		e.preventDefault();
		if(validateForm()){
			setFormStatus();
			name.value='';
			hideOk(name);
			email.value='';
			hideOk(email);
			phone.value='';
			hideOk(phone);
			message.value='';
			hideOk(message);
		}
	}

	function validateElements(){
		name.addEventListener('input', function(e){
			(validateName(e.target))?setOk(e.target):hideOk(e.target);
		})
		email.addEventListener('input', function(e){
			(validateEmail(e.target))?setOk(e.target):hideOk(e.target);
		})
		phone.addEventListener('input', function(e){
			(validatePhone(e.target))?setOk(e.target):hideOk(e.target);
		})
		message.addEventListener('input', function(e){
			(validateMessage(e.target))?setOk(e.target):hideOk(e.target);
		})
	}
	
	validateElements();
	contactsForm.addEventListener('submit', function(e){
		sendForm(e);		
	})
})()

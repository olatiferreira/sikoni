function signIn (){	
	var settings = {    
		"url": "http://localhost:8000/user/"+ $('#login').val() + '/' + $('#password').val(),
		"method": "GET",
		"headers": {
			"authorization": "1cbb35b2dadcbafc44219c48f6527c4e",
			"content-type": "application/json",        
		}
	}	
	$.ajax(settings).always(function (response) {
		if (response.status == 400){
			console.log (response.responseJSON['message']);
		} else if (response.status == 0){
			console.log ('server problem!');
		}
		else {
			console.log ('success');
			window.location.href = "http://localhost:8000/web/dashboard.html";
		}				
	});	
}
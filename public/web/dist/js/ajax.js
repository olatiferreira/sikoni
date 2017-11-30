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

function ticketAdd (){	
	var name = $('#name').val();
	var email = $('#name').val();
	var descyption = $('#descyption').val();	

	var data = {
    "name": 		name,
    "email": 		email,
    "descryption": 	descryption, 	
	};

	var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:8000/ticket",
  "method": "POST",
  "headers": {
    "authorization": "1cbb35b2dadcbafc44219c48f6527c4e",
    "content-type": "application/json",
    "cache-control": "no-cache",
    "postman-token": "1021ac4c-f687-fc66-13ef-407ed56381b2"
  },
  "processData": false,
  "data": JSON.stringify(data)
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
}
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
			signError(response.responseJSON['message']);
		} else if (response.status == 0){
			serverProblem();
		}
		else {			
			window.location.href = "http://localhost:8000/web/dashboard.html";
		}				
	});	
}

function ticketAdd (){		
	var data = {
		"name": 		$('#name').val(),
		"email": 		$('#email').val(),
		"descryption": 	$('#descryption').val(),	
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

	$.ajax(settings).always(function (response) {  
		ticketSuccess();
	});
}

function serverProblem(){
	swal({
		title: 'Erro ao conectar com o servidor!',        
		type: 'error',        
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',        
	}).then(function () {              
		window.location.replace("http://localhost:8000/web/");
	})
};

function signError(error){
	swal({
		title: 'Erro!',        
		text: error,
		type: 'error',        
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',        
	}).then(function () {              
		window.location.replace("http://localhost:8000/web/");
	})
};

function ticketSuccess(){
	swal({
		title: 'Ticket cadastrado com sucesso!',        
		type: 'success',        
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',        
	}).then(function () {              
		window.location.replace("http://localhost:8000/web/ticketAdd.html");
	})
};

function ticketError(){
	swal(
		'Algo deu errado!',
		'Verifique...',
		'error'
		)
};
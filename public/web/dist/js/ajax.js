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

function ticketSearch (){	
	var settings = {    
		"url": "http://localhost:8000/ticket",
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
			var len = response.data.length;
			var txt = "";
			if(len > 0){
				for(var i=0;i<len;i++){
					if(response.data[i].name){
						txt += "<tr><td>"+response.data[i].id+"</td>"+
						"<td>"+response.data[i].name+"</td>"+
						"<td>"+response.data[i].email+"</td>"+
						"<td>"+response.data[i].entry_date+"</td>"+
						"<td>"+response.data[i].status+"</td>"+
						"</tr>";
					}
				}
				if(txt != ""){
					$("#table").append(txt).removeClass("hidden");
				}
			}
		}				
	});	
}

function dashboard (){	
	var settings = {    
		"url": "http://localhost:8000/ticketCount",
		"method": "GET",
		"headers": {
			"authorization": "1cbb35b2dadcbafc44219c48f6527c4e",
			"content-type": "application/json",        
		}
	}

	var settings2 = {    
		"url": "http://localhost:8000/userCount",
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
			$('#ticketCount').html(response.data);
		}				
	});	
	$.ajax(settings2).always(function (response) {
		if (response.status == 400){
			signError(response.responseJSON['message']);
		} else if (response.status == 0){
			serverProblem();
		}
		else {					
			$('#userCount').html(response.data);
		}				
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

function CheckPassword(){   
	var passw = "6466";  
	var pasCode = document.getElementById("pas");
	if((pasCode.value.match(/6466/g) != null) && pasCode.value.match(/6466/g)[0] == passw){   
		window.location.href = "Zone1.html";
	}  
	else{   
		alert('Wrong...!')  
		return false;  
	}  
} 

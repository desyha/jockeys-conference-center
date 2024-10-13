// console.log("jell");
function validate(){
	var name = document.getElementById('fullname').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;
	var radio = "";
	if(document.getElementById('radiophone').checked==true)
		radio = 'rphone';
	else if(document.getElementById('radioemail').checked==true)
		radio ='rmail';
	var message= document.getElementById('message').value;
	var bool = true;

	if(name == ""){
		document.getElementById('err-fullname').innerHTML="Name must filled";
		bool = false;
	}
	else if(cekSpasi(name) < 2){
		document.getElementById('err-fullname').innerHTML="Name must be more than 1 words";
		bool = false;
	}else{
		document.getElementById('err-fullname').innerHTML="";
	}

	if(phone == ""){
		document.getElementById('err-phone').innerHTML="Phone number must filled";
		bool = false;
	}
	else if(phone.length < 11){
		document.getElementById('err-phone').innerHTML="A valid phone number is at least 11 digits";
		bool = false;
	}else{
		document.getElementById('err-phone').innerHTML="";
	}

	if(email == ""){
		document.getElementById('err-email').innerHTML="Email must be filled";
		bool = false;
	}
	else if(cekEmail(email)== false){
		document.getElementById('err-email').innerHTML="Invalid Email Format";
		bool = false;
	}else{
		document.getElementById('err-email').innerHTML="";
	}
   	
   	if(radio==""){
   		document.getElementById('err-contactmethod').innerHTML="Please choose a contant method";
   		bool = false;
   	}else{
   		document.getElementById('err-contactmethod').innerHTML="";
   	}
	
	if(message == ""){
		document.getElementById('err-message').innerHTML="Message must be filled";
		bool = false;
	
	}else{
		document.getElementById('err-message').innerHTML="";
	}

	if(bool!=false){
		alert("Message sent!");
		location.reload();
	}	
}



function cekEmail(email){
	if(email.startsWith("@") || email.startsWith(".")){
		return false;
	}
	else if(email.endsWith("@") || email.endsWith("."))	{
		return false;
	}
	else if(email.indexOf("@.") > -1 || email.indexOf(".@") > -1 )
	{
		return false;
	}
	else if(email.indexOf("@") < 0 || email.indexOf(".") < 0)
	{
		return false;
	}
		else
	{
		return true;
	}
}

function cekSpasi(string){
	string = string.trim(); 
	return string.split(' ').length; 
}	
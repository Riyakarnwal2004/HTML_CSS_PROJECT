function validateform(){  
    var x=document.myform.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address");  
  return false;  
  }  
     
    var firstpassword=document.myform.password.value;  
      
     if(firstpassword.length<8){  
      alert("Password must be at least 8 characters long.");  
      return false;  
      }  
    
    }  
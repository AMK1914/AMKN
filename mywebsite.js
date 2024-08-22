function login() {
    
    let username = document.getElementsByClassName("ht_no")[0].value;
    let password = document.getElementsByClassName("pass")[0].value;

    let id = "22291A0517";
    let key = "123456";


        if(username==id && password==key){
            window.location.href = "sp.html";
        }
        else{
            alert("Invalid Credentials");

        }
}
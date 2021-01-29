function check() {
    let username = document.getElementById("name");
    let password =  document.getElementById("password");
    if (username.value == "") {
        alert("enter the name");
        return false;
    }
    else if (password == "") {
        alert("enter the password");
        return false;
    }
}
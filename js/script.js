function validateform() {

    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var cpass = document.getElementById("cpss").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;
}

if (user == "" || user == null) {
    // document.getElementById("username").innerHTML = "Pleas Enter User ";
    alert("Name can't be blank");
    return false;
}

if (pass == "") {
    document.getElementById("comformpassword").innerHTML = "Pleas Eneter  Password ";
    return false;
}

if (cpass == "") {
    document.getElementById("comformpassword").innerHTML = "Pleas Eneter Comform Password ";
    return false;
}

if (number == "") {
    document.getElementById("mobilenumber").innerHTML = "Pleas Eneter Mobile Number ";
    return false;
}

if (email == "") {
    document.getElementById("emailaddress").innerHTML = "Pleas Eneter Email Address";
    return false;
} else {
    document.write("<h1> Congratulation Registration Successfull");
}
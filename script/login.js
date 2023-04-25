function login(form){


    if(((form.username.value)=="admin@admin.com") && ((form.password.value)=="123456"))
    {
        alert("Login Successful")
    }

    else{
        alert("Incorrect email or password")
    }
}
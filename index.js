function validation(){

    let user = document.getElementById("user").value;
    let Que = document.getElementById("Que").value;
    let Email = document.getElementById("Email").value;
    let MobileNumber = document.getElementById("MobileNumber").value;
    let file = document.getElementById("file").value;

    if(user == ""){
        document.getElementById("username").innerHTML= "Please Enter The Name.."
        return false;
    }

    if(Que == ""){
        document.getElementById("quelifiction").innerHTML= "Please Enter The Quelification.."
        return false;
    }

    if(Email == ""){
        document.getElementById("Emailids").innerHTML= "Please Enter The Email Address.."
        return false;
    }
    if(Email.indexOf("@")<= 0){
        document.getElementById("Emailids").innerHTML= "Please Enter The Valid Email Address.."
        return false;

    }

    if(MobileNumber == ""){
        document.getElementById("MobileNo").innerHTML= "Please Enter The Mobile Number.."
        return false;
    }
    if(isNaN(MobileNumber)){
        document.getElementById("MobileNo").innerHTML= "Please Enter Digits Number.."
        return false;
    }
    if(MobileNumber.length!=10){
        document.getElementById("MobileNo").innerHTML= "Please Enter The 10 Digits Number.."
        return false;
    }

    if(file == ""){
        document.getElementById("fileupload").innerHTML= "Please Select File.."
        return false;
    }
    return true;
}
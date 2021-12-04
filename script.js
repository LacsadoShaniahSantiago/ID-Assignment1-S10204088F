function checkName(e){
    console.log("entering check name")
    errorMsg = "";

    let name = document.getElementByClass("name").value;

    if (name.length < 6){
        errorMsg = `Please enter full name</b>`;
        console.log(errorMsg);
        document.getElementById("errorname").innerHTML = errrMsg;
    }else{
        document.getElementById('errorname').innerHTML = "";
    }
}

var fullName = document.getElementById('name');

fullName.addEventListener('blur', checkName, false);
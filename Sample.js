function firstName() {
    let pattern = new RegExp('^[A-Z]{1,}[a-z]{3,}$');
    let input = document.getElementById("Name").value;
    let status = pattern.test(input);
    if (status==false) {
        alert("Invalid Name,First Letter Should be Caps");
    }
    else
    {
        alert("Validated Successfully..!!");
    }
}

function email() {
    let pattern = new RegExp('[a-z]*[.][a-z]+[@][a-z]*[.][a-z]*[.][a-z]+');
    let input = document.getElementById("email").value;
    let status = pattern.test(input);
    if (status==false) {
        alert("Invalid email,Check Your User Mail-ID");
    }
    else
    {
        alert("Validated Successfully..!!");
    }
}
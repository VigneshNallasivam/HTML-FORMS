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

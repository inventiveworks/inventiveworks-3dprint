var password = "Admin@1"
function passcheck(){

    if(document.getElementById('pass1').value != password){
        alert('wrong PAssword, Try Again');
        return false;
    }
    if(document.getElementById('pass1').value == password){
        alert('Correct Passowrd');
    }

}
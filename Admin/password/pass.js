var password = "!Admin@!"

function passcheck(){

    if(document.getElementById('pass1').value != password){
        alert('Wrong Password, Try Again');
        return false;
    }
    if(document.getElementById('pass1').value == password){
        alert('Hello Admin... Nice To See You!');
    }

}
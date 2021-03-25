function getForgotForm(){
    console.log(document.getElementsByClassName('login')[0])
    document.getElementsByClassName('login')[0].style.display = "none";
    document.getElementsByClassName('forgot-pass')[0].style.display = "block";
}

function getLoginForm(){
    document.getElementsByClassName('forgot-pass')[0].style.display = "none";
    document.getElementsByClassName('login')[0].style.display = "block";
}
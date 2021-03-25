
function toggleDropDown(event){
    var e = event.currentTarget;
    
    var container = e.parentElement;
    var ele = container.getElementsByClassName("btn-dropdown-menu")[0];
    
    if (ele.style.display === 'block'){
        ele.style.display = 'none'
    }
    else {
        var drop = document.getElementsByClassName("btn-dropdown-menu")
        for(var i = 0; i<drop.length; i++){
            var each = drop[i]
            if(each.style.display === "block"){
                each.style.display = "none"
            }
        }
            
        ele.style.display = 'block'
    }
}

window.onclick = function(event){
    var e = event.target
    if(e.className != 'btn-dropdown-toggle'){
        var drop = document.getElementsByClassName("btn-dropdown-menu")
        for(var i = 0; i<drop.length; i++){
            var each = drop[i]
            if(each.style.display === "block"){
                each.style.display = "none"
            }
        }
    }
    else {

    }
}
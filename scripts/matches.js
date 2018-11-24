var more = document.getElementById('show');
var less = document.getElementById('hide');
var match = document.getElementsByClassName('odd');
var matche = document.getElementsByClassName('even');
function Show(){
    more.classList.add('liner');
    less.classList.remove('liner');
    for (var i =0; i < match.length; i++){
        match[i].classList.remove('liner');
    }
    for (var i =0; i < match.length; i++){
        matche[i].classList.remove('liner');
    }
}
function Hide(){
    more.classList.remove('liner');
    less.classList.add('liner');
    for (var i =0; i < match.length; i++){
        match[i].classList.add('liner');
    }
    for (var i =0; i < match.length; i++){
        matche[i].classList.add('liner');
    }
}   
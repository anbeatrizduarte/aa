
/* Botão modo dark */
var bttModeDark = document.getElementById("bttDarkMode")

function modeDark() {
    document.body.classList.toggle('dark')
}

bttModeDark.addEventListener('click', modeDark, false)

/* Deslize das imagens principais */

window.addEventListener('scroll', () => {
    let bg1 = document.getElementById("bg1")
    let bg2 = document.getElementById("bg2")
    let bgwave = document.querySelector('main')
    let textlg = document.getElementById("secmainh1")
    let value = window.scrollY;

    textlg.style.top = value * -0.8 + 'px';
    bg1.style.left = value * -0.8 + 'px';
    bg2.style.left = value * -0.8 + 'px';
    bgwave.style.backgroundPositionX = value * 0.8 + 'px';

})

/* Barra lateral */

const navSide = document.getElementById("nav-side")
var showBttNav = document.getElementsByClassName("bttNav-side")
var arrsBttNS = [showBttNav[0], showBttNav[1]]

window.addEventListener('scroll', () => {   
    arrsBttNS[0].style.right = '0'
    arrsBttNS[0].style.transition = '0.7s'
    arrsBttNS[1].style.right = '0'
    arrsBttNS[1].style.transition = '0.7s'   
})

showBttNav[1].onclick = () => {
    var remFavH = document.getElementById("favh4")
    var remFavH2 = document.getElementById("favh8")
    var remSac = document.getElementById("sac4")
    var remSac2 = document.getElementById("sac8")
    navSide.classList.toggle("navside-active")
    remFavH.style.zIndex = '-1'
    remFavH2.style.zIndex = '-1'
    remSac.style.zIndex = '-1'
    remSac2.style.zIndex = '-1'
}

/* Botões de favoritar e adicionar ao carrinho */

var favheart = document.getElementsByClassName("favheart");
var favheartAct = document.getElementsByClassName("heart-act")
var sac = document.getElementsByClassName("sac-icon")

var arrHeart = [favheartAct[0], favheartAct[1], favheartAct[2], favheartAct[3], favheartAct[4], favheartAct[5], favheartAct[6], favheartAct[7]]

function fav() {
    arrHeart[0].classList.toggle('heartAct');
}
function fav1() {
    arrHeart[1].classList.toggle('heartAct');
}
function fav2() {
    arrHeart[2].classList.toggle('heartAct');
}
function fav3() {
    arrHeart[3].classList.toggle('heartAct');
}
function fav4() {
    arrHeart[4].classList.toggle('heartAct');
}
function fav5() {
    arrHeart[5].classList.toggle('heartAct');
}
function fav6() {
    arrHeart[6].classList.toggle('heartAct');
}
function fav7() {
    arrHeart[7].classList.toggle('heartAct');
}

favheart[0].addEventListener('click', fav, false);
favheart[1].addEventListener('click', fav1, false);
favheart[2].addEventListener('click', fav2, false);
favheart[3].addEventListener('click', fav3, false);
favheart[4].addEventListener('click', fav4, false);
favheart[5].addEventListener('click', fav5, false);
favheart[6].addEventListener('click', fav6, false);
favheart[7].addEventListener('click', fav7, false);

function noProd() {
    window.alert("[ERRO] Este produto não está disponível por enquanto");
}






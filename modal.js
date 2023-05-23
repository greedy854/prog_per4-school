const blue = document.getElementById("js--blue");
const valorant = document.getElementsByClassName("product");

blue.onclick = function () {
    for (let i = 0; i < valorant.length; i++) {
        valorant[i].style.display = "none";
    }
    document.getElementById("js--blueModal").style.display = "grid";
}

const closeBlueModal = document.getElementById("js--closeBlue");
closeBlueModal.onclick = function () {
    document.getElementById("js--blueModal").style.display = "none";
    for (let i = 0; i < valorant.length; i++) {
        valorant[i].style.display = "block";
}
}

const white = document.getElementById("js--white");
const valorant1 = document.getElementsByClassName("product");

white.onclick = function () {
    for (let i = 0; i < valorant1.length; i++) {
        valorant1[i].style.display = "none";
    }
    document.getElementById("js--whiteModal").style.display = "grid";
}

const closewhiteModal = document.getElementById("js--closewhite");
closewhiteModal.onclick = function () {
    document.getElementById("js--whiteModal").style.display = "none";
    for (let i = 0; i < valorant1.length; i++) {
        valorant1[i].style.display = "block";
}
}
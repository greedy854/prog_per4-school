let rootElement = document.querySelector(":root");
let darkMode = true;
let darkModeSwitch = document.getElementById("mode");

darkModeSwitch.checked = false;

let interaction = darkModeSwitch.onchange = function(){
    if(darkMode === true){
        rootElement.style.setProperty("--background-color", "white");
        rootElement.style.setProperty("--font-color", "black");
        rootElement.style.setProperty("--border-color", "black");
        darkMode = false;
        return;
    }
    rootElement.style.setProperty("--background-color", "rgba(33, 39, 48,1)");
    rootElement.style.setProperty("--font-color", "rgb(212, 212, 212)");
    rootElement.style.setProperty("--border-color","rgba(212, 212, 212, 0.4)");
    darkMode = true;
}


console.log(`%cHoi jordan cool he!:)`, 'font-weight:bold;color:red'); 
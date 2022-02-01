var element = document.getElementById("imgscreen");
function fullscreen(){
    if(element.webkitRequestFullScreen){
        element.webkitRequestFullScreen();
    }
}
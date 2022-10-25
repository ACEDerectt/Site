function resizeFrame(sender){
    document.getElementById("mainContent").style.height = document.getElementById("contentFrame").contentWindow.document.documentElement.scrollHeight + "px"
}
function changeContent(fileName){

    document.getElementById("contentFrame").src = fileName
    resizeFrame(this)
}
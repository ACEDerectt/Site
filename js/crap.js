function resizeFrame(sender){
    sender.style.height = sender.contentWindow.document.documentElement.scrollHeight + "px"
}
function changeContent(fileName){
    document.getElementById("contentFrame").src = fileName
}
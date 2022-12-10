//Logic For Menu
function toggleMenu(){
    document.getElementById('menu').style.display="none"
    document.getElementById('menu-close').style.display="block"
    document.getElementById('menu-items').style.display="flex"
}
function offMenu(){
    document.getElementById('menu').style.display="block"
    document.getElementById('menu-close').style.display="none"
    document.getElementById('menu-items').style.display="none"
}
//Logic For POPUP
function ShowPopup(){
    document.getElementById('Popup').style.display="flex"
}

function HidePopup(){
    document.getElementById('Popup').style.display="none"
}

//Logic For Code Editor:
function ShowPreview(){
    var HtmlCode = document.getElementById("html").value;
    var CSSCode = "<style>" + document.getElementById("css").value + "</style>";
    var jsCode = "<scri"+"pt>" + document.getElementById("js").value + "</scri"+"pt>";
    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(HtmlCode+CSSCode+jsCode);
    frame.close();
}
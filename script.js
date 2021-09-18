document.getElementById("1").addEventListener("click", function() {
    var leftPart =document.createElement("div");
    leftPart.setAttribute("class","left-window");
    var rightPart =document.createElement("div");
    rightPart.setAttribute("class","right-window");
    var window = document.getElementById("window-1");
    var window = document.getElementById("window-1");
    window.appendChild(rightPart)
    leftPart.appendChild(window)
  }); 
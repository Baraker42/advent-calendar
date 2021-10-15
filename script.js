const createWindows = function (){
  var singleWindow = document.getElementById("container");
  var counter = 1;
  
  for (var i = 0; i <4; i++){
    var column = document.createElement("div");
    column.setAttribute("class","window-column"+i);
    singleWindow.appendChild(column);
    for (var j =0; j <6; j++){
        windowNumber = document.createElement("div");
        windowNumber.setAttribute("class","number");
        windowNumber.innerHTML = counter;
        numberWrapper = document.createElement("div");
        numberWrapper.setAttribute("class","number-wrapper");
        numberWrapper.appendChild(windowNumber);
        windowLine = document.createElement("div");
        windowLine.setAttribute("class",("line"));
        windowButton = document.createElement("button");
        windowButton.setAttribute("class","window-button");
        windowButton.setAttribute("id",counter);
        windowButton.appendChild(windowLine);
        windowButton.appendChild(numberWrapper);
        windowLeft = document.createElement("div");
        windowLeft.setAttribute("id","invisible-left-"+counter);
        windowStart = document.createElement("div");
        windowStart.setAttribute("class","window");
        windowRight = document.createElement("div");
        windowRight.setAttribute("id","invisible-right-"+counter);
        windowStart.appendChild(windowButton);
        column.appendChild(windowLeft);
        column.appendChild(windowStart);
        column.appendChild(windowRight);
        counter++
    }
  }
};
createWindows();

const windowOpener = function (){
  var getNumber = parseInt(document.activeElement.id);
  console.log(24-getNumber,"days to christmas");
  //var xmasNumber = document.getElementById(getNumber);

  document.getElementById("invisible-right-" + getNumber).classList.add("visible-right")
  document.getElementById("invisible-left-" +getNumber).classList.add("visible-left")

  //vyprázdnění obsahu buttonu
  let element = document.getElementById(getNumber);
    while (element.firstChild) {
  element.removeChild(element.firstChild);
  }
  document.getElementById(getNumber).classList.add("empty")

  var song = document.createElement("div");
  songId="song-"+getNumber
  song.setAttribute("id",songId)
  song.setAttribute("class","song-class")
  song.innerHTML='<a href="https://www.youtube.com/watch?v=sE3uRRFVsmc">song</a>'

  var photo =document.createElement("div");
  photoId="photo"+getNumber
  photo.setAttribute("id",photoId)
  photo.setAttribute("class","photo-class");
  photo.innerHTML="<p>Day photo</p><br><p>Show</p>"

  windowParent=document.getElementById(getNumber)
  windowParent.appendChild(song)
  windowParent.appendChild(photo)
  
};

var xmasWindow = document.getElementsByClassName("window-button");
for (var i = 0; i < xmasWindow.length; i++) {
    xmasWindow[i].addEventListener('click', windowOpener, false);
}
/*
document.getElementById("1").addEventListener("click", function() {
  //zviditelnění "okenic"
  
  }); */
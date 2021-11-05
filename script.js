dayList=[{"day":7,"song":"makarena","word":"carol"},
{"day":2,"song":"makarena","word":"carol"},
{"day":14,"song":"makarena","word":"carol"},
{"day":21,"song":"makarena","word":"carol"},
{"day":16,"song":"makarena","word":"carol"},
{"day":8,"song":"makarena","word":"carol"},
{"day":1,"song":"makarena","word":"carol"},
{"day":6,"song":"makarena","word":"carol"},
{"day":20,"song":"makarena","word":"carol"},
{"day":19,"song":"makarena","word":"carol"},
{"day":23,"song":"makarena","word":"carol"},
{"day":12,"song":"makarena","word":"carol"},
{"day":13,"song":"makarena","word":"carol"},
{"day":3,"song":"makarena","word":"carol"},
{"day":24,"song":"makarena","word":"carol"},
{"day":5,"song":"makarena","word":"carol"},
{"day":22,"song":"makarena","word":"carol"},
{"day":18,"song":"makarena","word":"carol"},
{"day":10,"song":"makarena","word":"carol"},
{"day":9,"song":"makarena","word":"carol"},
{"day":4,"song":"makarena","word":"carol"},
{"day":17,"song":"makarena","word":"carol"},
{"day":11,"song":"makarena","word":"carol"},
{"day":15,"song":"makarena","word":"carol"},
]
const createWindows = function (){
  var singleWindow = document.getElementById("container");
  var counter = 0;
  var adventCookies = document.cookie
  var newcookies = adventCookies.split(";")

  for (var i = 0; i <4; i++){
    var column = document.createElement("div");
    column.setAttribute("class","window-column-"+i);
    singleWindow.appendChild(column);
    for (var j =0; j <6; j++){
        windowNumber = document.createElement("div");
        windowNumber.setAttribute("class","number");
        windowNumber.innerHTML = dayList[counter].day;
        numberWrapper = document.createElement("div");
        numberWrapper.setAttribute("class","number-wrapper");
        numberWrapper.appendChild(windowNumber);
        windowLine = document.createElement("div");
        windowLine.setAttribute("class",("line"));
        windowButton = document.createElement("button");
        windowButton.setAttribute("class","window-button");
        windowButton.setAttribute("id",dayList[counter].day);
        windowButton.appendChild(windowLine);
        windowButton.appendChild(numberWrapper);
        windowLeft = document.createElement("div");
        windowLeft.setAttribute("id","invisible-left-"+dayList[counter].day);
        windowStart = document.createElement("div");
        windowStart.setAttribute("class","window");
        windowRight = document.createElement("div");
        windowRight.setAttribute("id","invisible-right-"+dayList[counter].day);
        windowStart.appendChild(windowButton);
        windowOpen = document.createElement("div");
        windowOpen.setAttribute("class","opened-window")
        windowOpen.setAttribute("id","window-"+dayList[counter].day)
        windowOpen.appendChild(windowLeft);
        windowOpen.appendChild(windowStart);
        windowOpen.appendChild(windowRight);
        column.appendChild(windowOpen)
        document.cookie = "day"+dayList[counter].day+"="+false+";max-age="+600;
        counter++
    }
  }
};
createWindows();

const windowOpener = function (){
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDate();
  var getNumber = parseInt(document.activeElement.id);
  if (month == 10 && day >= getNumber){
    console.log(24-getNumber,"days to christmas");

    document.getElementById("invisible-right-" + getNumber).classList.add("visible-right")
    document.getElementById("invisible-left-" + getNumber).classList.add("visible-left")
    for (var i = 0; i < dayList.length; i++) {
        if (dayList[i].day==getNumber){
          daySong=dayList[i].song
          dayWord=dayList[i].word
        }
    }
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
    song.innerHTML="<a href="+daySong+">song</a>"

    var photo =document.createElement("div");
    photoId="photo"+getNumber
    photo.setAttribute("id",photoId)
    photo.setAttribute("class","photo-class");
    photo.innerHTML="<p>Day photo</p><p><strong>"+dayWord+"</p></strong>"

    windowParent=document.getElementById(getNumber)
    windowParent.appendChild(song)
    windowParent.appendChild(photo)

  }else{
  console.log("Too sooon")
}
};



var xmasWindow = document.getElementsByClassName("window-button");
for (var i = 0; i < xmasWindow.length; i++) {
    xmasWindow[i].addEventListener('click', windowOpener, false);
}
dayList=[{"day":7,"song":"https://www.youtube.com/watch?v=2fAG2yv-o5A&t=1s&ab_channel=CelticWomanOfficial","word":"Cozy place"},
{"day":2,"song":"https://www.youtube.com/watch?v=U7C4Ym-XQUI&ab_channel=PeterHollens","word":"Carols / Music"},//zatím
{"day":14,"song":"https://www.youtube.com/watch?v=-bnzUHzsma0&ab_channel=PeterHollens","word":"Movie/TV Series"},//zatím
{"day":21,"song":"https://www.youtube.com/watch?v=8tC5NSyY_lQ&ab_channel=PeterHollens","word":"Family"},//zatím
{"day":16,"song":"https://www.youtube.com/watch?v=CO6OZIY-lYw&ab_channel=HomeFree","word":"Star"},
{"day":8,"song":"https://www.youtube.com/watch?v=QARJ4-nI7rI&ab_channel=TheHound%2BTheFox","word":"Ornaments"},
{"day":1,"song":"https://www.youtube.com/watch?v=u-SGx53zpuI&ab_channel=CelticWomanOfficial","word":"Wreath"},
{"day":6,"song":"https://www.youtube.com/watch?v=wIQQDYaoWpc&ab_channel=HomeFree","word":"Sparkle"},
{"day":20,"song":"https://www.youtube.com/watch?v=dSJ4EWeHyE4&ab_channel=CelticWomenVEVO","word":"Christmas cookies"},
{"day":19,"song":"https://www.youtube.com/watch?v=fzOG99GEmoM&ab_channel=CelticWomanKorea","word":"Christmas jumper"},
{"day":23,"song":"https://www.youtube.com/watch?v=lGJoPmGA5uc&ab_channel=HomeFree","word":"Festive food"},
{"day":12,"song":"https://www.youtube.com/watch?v=VDmIddF7DfQ&ab_channel=CelticWomenVEVO","word":"Bethlehem"},
{"day":13,"song":"https://www.youtube.com/watch?v=ath8jKJ96kc&ab_channel=HomeFree","word":"Lights"},//zatím
{"day":3,"song":"https://www.youtube.com/watch?v=E_JTbBNxZ1I&ab_channel=CelticWomanOfficial","word":"Candy cane"},
{"day":24,"song":"https://www.youtube.com/watch?v=e_RAdKHW2Qk&ab_channel=CelticWomanOfficial","word":"Christmas tree"},
{"day":5,"song":"https://www.youtube.com/watch?v=7uyb2q18aPY&ab_channel=CelticWomanOfficial","word":"Jingle bell"},
{"day":22,"song":"https://www.youtube.com/watch?v=eEtUGgBwzEM&ab_channel=TheHound%2BTheFox","word":"Mistletoe"},
{"day":18,"song":"https://www.youtube.com/watch?v=duXeChMFTzg&ab_channel=TheHound%2BTheFox","word":"Angel"},
{"day":10,"song":"https://www.youtube.com/watch?v=xME52v35ofU&ab_channel=HomeFree","word":"Candle"},
{"day":9,"song":"https://www.youtube.com/watch?v=6c8GlSb6XlA&t=228s&ab_channel=HomeFree","word":"Reindeer"},
{"day":4,"song":"https://www.youtube.com/watch?v=SiF8EsvfCWk&ab_channel=GrimReaper","word":"Holly"},
{"day":17,"song":"https://www.youtube.com/watch?v=tT61n0VFr5I&ab_channel=PeterHollens","word":"Memories"},
{"day":11,"song":"https://www.youtube.com/watch?v=Ab0ArBnZYSE&ab_channel=CelticWomanForumnet","word":"Snow"},
{"day":15,"song":"https://www.youtube.com/watch?v=IekoOT_e-pQ&ab_channel=mihaelamdp2","word":"Presents"},
]
const createWindows = function (){
  var singleWindow = document.getElementById("container");
  var counter = 0;
  var adventCookies = document.cookie

  for (var i = 0; i <4; i++){
    var column = document.createElement("div");
    column.setAttribute("class","window-column-"+i);
    singleWindow.appendChild(column);
    for (var j =0; j <6; j++){
        windowNumber = document.createElement("div");
        windowNumber.setAttribute("class","number");
        windowNumber.innerHTML = dayList[counter].day;
        windowButton = document.createElement("div");
        windowButton.setAttribute("class","window-button empty");
        windowButton.setAttribute("id",dayList[counter].day);
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

        //if rule when based on cookies recongnize open window in past
        if(adventCookies.includes("day"+dayList[counter].day+"=true")){
          windowLeft.setAttribute("class","visible-left");;
          windowRight.setAttribute("class","visible-right");
          windowOpen.appendChild(windowLeft);
          windowOpen.appendChild(windowStart);
          windowOpen.appendChild(windowRight);
          column.appendChild(windowOpen);

          for (var d = 0; d < dayList.length; d++) {
            if (dayList[d].day==dayList[counter].day){
            daySong=dayList[d].song
            dayWord=dayList[d].word
            }
          }
          var song = document.createElement("div");
          songId="song-"+dayList[counter].day
          song.setAttribute("id",songId)
          song.setAttribute("class","song-class")
          song.innerHTML="<a href="+daySong+" target='_blank'>song</a>"

          var photo =document.createElement("div");
          photoId="photo"+dayList[counter].day
          photo.setAttribute("id",photoId)
          photo.setAttribute("class","photo-class");
          photo.innerHTML="<p>Day photo</p><p><strong>"+dayWord+"</p></strong>"

          windowParent=document.getElementById(dayList[counter].day);
          windowParent.appendChild(song);
          windowParent.appendChild(photo);
        }
        //if there is no true cookie for this day print closed window
        else{
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
        windowStart = document.createElement("div");
        windowStart.setAttribute("class","window");
        windowStart.appendChild(windowButton);
        windowOpen = document.createElement("div");
        windowOpen.setAttribute("class","opened-window")
        windowOpen.setAttribute("id","window-"+dayList[counter].day)
        windowOpen.appendChild(windowLeft);
        windowOpen.appendChild(windowStart);
        windowOpen.appendChild(windowRight);
        column.appendChild(windowOpen);
        document.cookie = "day"+dayList[counter].day+"="+false+";max-age="+600;
        }
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
    song.innerHTML="<a href="+daySong+" target='_blank'>song</a>"

    var photo =document.createElement("div");
    photoId="photo"+getNumber
    photo.setAttribute("id",photoId)
    photo.setAttribute("class","photo-class");
    photo.innerHTML="<p>Day photo</p><p><strong>"+dayWord+"</p></strong>"

    windowParent=document.getElementById(getNumber)
    windowParent.appendChild(song)
    windowParent.appendChild(photo)
    document.cookie ="day"+getNumber+"="+true+";max-age="+600
  }else{
  console.log("Too sooon")
}
};

var createSnow = function (){
  var snowing = document.getElementById("snowflakes")
  snowflakesList = ["❅","❆","❅","❆","❅","❆","❅","❆","❅","❆","❅","❆","❅","❆","❆","❅","❆"];
  for (var i = 0; i<snowflakesList.length; i++){
    snowflake=document.createElement("div");
    snowflake.setAttribute("class","snowflake");
    snowflake.innerHTML=(snowflakesList[i]);
    snowing.appendChild(snowflake);
  }
  }
createSnow();


var xmasWindow = document.getElementsByClassName("window-button");
for (var i = 0; i < xmasWindow.length; i++) {
    xmasWindow[i].addEventListener('click', windowOpener, false);
}
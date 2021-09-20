document.getElementById("1").addEventListener("click", function() {
  //zviditelnění "okenic"
  document.getElementById("invisible-right-1").classList.add("visible-right")
  document.getElementById("invisible-left-1").classList.add("visible-left")

  //vyprázdnění obsahu buttonu
  let element = document.getElementById("1");
    while (element.firstChild) {
  element.removeChild(element.firstChild);
  }
  document.getElementById("1").classList.add("empty")

  var song = document.createElement("div");
  songId="song-"+"1"
  song.setAttribute("id",songId)
  song.setAttribute("class","song-class")
  song.innerHTML='<a href="https://www.youtube.com/watch?v=sE3uRRFVsmc">song</a>'

  var photo =document.createElement("div");
  photoId="photo"+"1"
  photo.setAttribute("id",photoId)
  photo.setAttribute("class","photo-class");
  photo.innerHTML="<p>Day photo</p><br><p>Show</p>"

  windowParent=document.getElementById("1")
  windowParent.appendChild(song)
  windowParent.appendChild(photo)
  }); 
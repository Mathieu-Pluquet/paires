var tab = ["ours.jpeg","coca.jpeg", "banane.jpeg", "bonbon.jpeg", "reglisse.jpeg","sham.jpeg","croco.jpeg", "ours.jpeg","coca.jpeg", "banane.jpeg", "bonbon.jpeg", "reglisse.jpeg","sham.jpeg","croco.jpeg"]
var tab2 = []
var imgAll = document.querySelectorAll("img");
var carte;

shuffle(tab)
for (let i=0;i<imgAll.length;i++) {
imgAll[i].addEventListener("click", function paire() {
carte = tab[i];
imgAll[i].setAttribute("src", "img/"+carte);
imgAll[i].setAttribute("alt", carte);
tab2.push(carte)
if (tab2.length==2) {
  if (tab2[0] !== tab2[1]) {
    setTimeout(bonjour,300)
  }
  else {
    tab2=[]
  }
}
})
}




// sous fonction

function bonjour () {
  for (let y=0;y<imgAll.length;y++){
  if(imgAll[y].alt== tab2[0] || imgAll[y].alt == tab2[1]) {
    imgAll[y].src = "img/fond.jpeg"
    imgAll[y].alt=""
  }
}
tab2=[]
}

// fonction random

function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

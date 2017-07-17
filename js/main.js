var tab = ["ours.jpeg","coca.jpeg", "banane.jpeg", "bonbon.jpeg", "reglisse.jpeg","sham.jpeg","croco.jpeg", "ours.jpeg","coca.jpeg", "banane.jpeg", "bonbon.jpeg", "reglisse.jpeg","sham.jpeg","croco.jpeg"]
var tab2 = []
var imgAll = document.querySelectorAll("img");
var carte;

for (let i=0;i<imgAll.length;i++) {
imgAll[i].addEventListener("click", function paire() {
carte = tab[i];
imgAll[i].setAttribute("src", "img/"+carte);
imgAll[i].setAttribute("alt", carte);
console.log(imgAll[i].src);
tab2.push(carte)
if (tab2.length==2) {
  if (tab2[0] !== tab2[1]) {
    for (let y=0;y<imgAll.length;y++){
      if(imgAll[y].alt== tab2[0] || imgAll[y].alt == tab2[1]) {
        imgAll[y].src = "img/fond.jpeg"
        imgAll[y].alt=""
      }
    }
    tab2=[]
  }
  else {
    tab2=[]
  }
}
})
}
